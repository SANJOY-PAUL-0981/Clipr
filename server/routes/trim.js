const { Router } = require("express");
const urlRouter = Router();
const { urlModel } = require('../models/db');

// POST /trim → create short URL
urlRouter.post("/trim", async (req, res) => {
    try {
        const longUrl = req.body.longUrl;

        if (!longUrl || typeof longUrl !== "string" || !longUrl.startsWith("http")) {
            return res.status(400).json({
                message: "Invalid URL",
                code: 400
            });
        }

        // Algorithm for generating shortCode
        const shortCodeGeneration = () => {
            let limit = 6;
            let shortCode = "";
            for (let i = 0; i < limit; i++) {
                const random = Math.random() * 100;
                const fullNum = Math.floor(random);

                if (fullNum >= 50) {
                    const upperCaseASCII = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
                    shortCode += String.fromCharCode(upperCaseASCII);
                } else {
                    const lowerCaseASCII = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                    shortCode += String.fromCharCode(lowerCaseASCII);
                }
            }
            return shortCode;
        };

        let shortCode = shortCodeGeneration();

        const verifyShortCode = await urlModel.findOne({ shortCode });

        if (verifyShortCode) {
            shortCode = shortCodeGeneration();
            return res.json({
                message: "Short Code Already Exists, lets regenerate",
                regenaratedCode: shortCode
            });
        } else {
            const shortUrl = `${process.env.BASE_URL}/url/trim/` + shortCode;
            const urlData = await urlModel.create({
                longUrl,
                shortCode,
                shortUrl
            });

            return res.json({
                message: "URL saved!",
                urlData
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
            code: 500
        });
    }
});

// GET /trim/:shortCode → redirect to long URL
urlRouter.get("/trim/:shortCode", async (req, res) => {
    try {
        const shortCode = req.params.shortCode;

        const originalUrl = await urlModel.findOne({ shortCode });

        if (originalUrl) {
            originalUrl.linkClicks += 1;
            await originalUrl.save();

            return res.redirect(302, originalUrl.longUrl);
        } else {
            return res.status(404).send("Short URL Not Found");
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
            code: 500
        });
    }
});

// Link Clicks
urlRouter.post("/linkClicks", async (req, res) => {
    try {
        const shortCode = req.body.shortCode

        if(!shortCode){
            return res.status(400).json({
                message: "Enter Short Code"
            })
        }

        const url = await urlModel.findOne({
            shortCode: shortCode
        })

        const totalClicks = url.linkClicks

        return res.json({
            totalClicks
        })
    }catch(error){
        return res.status(404).json({
            message: "No Such Short Code Found",
            error: error.message,
            code: 404
        })
    }
});

// for UptimeRoot
app.get("/ping", (req, res) => {
  res.send("pong");
});


// Export the router properly
module.exports = ({
    urlRouter
});
