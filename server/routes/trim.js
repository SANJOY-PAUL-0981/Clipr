const { Router } = require("express")
const urlRouter = Router();
const { urlModel } = require('../models/db')

try {
    urlRouter.post("/trim", async (req, res) => {
        const longUrl = req.body.longUrl

        if (!longUrl || typeof longUrl !== "string" || !longUrl.startsWith("http")) {
            return res.status(400).json({
                message: "Invalid URL",
                code: 400
            })
        }

        //Algoorithm for generating the shortCode
        const shortCodeGeneration = () => {
            let limit = 6;
            let shortCode = "";
            for (let i = 0; i < limit; i++) {
                const random = Math.random() * 100;
                const fullNum = Math.floor(random);

                if (fullNum >= 50) {
                    const upperCaseASCII = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
                    const upperCase = String.fromCharCode(upperCaseASCII);
                    shortCode += upperCase;
                } else {
                    const lowerCaseASCII = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                    const lowerCase = String.fromCharCode(lowerCaseASCII);
                    shortCode += lowerCase;
                }
            }
            return shortCode;
        }

        let shortCode = shortCodeGeneration()

        const verifyShortCode = await urlModel.findOne({
            shortCode: shortCode
        })

        if (verifyShortCode) {
            shortCode = shortCodeGeneration()
            return res.json({
                message: "Short Code Already Exists, lets regenate",
                regenaratedCode: shortCode
            })
        } else {
            const shortUrl = "http://localhost:3000/api/v1/url/trim/" + shortCode //localhost for dev testing
            const urlData = await urlModel.create({
                longUrl: longUrl,
                shortCode: shortCode,
                shortUrl: shortUrl
            })

            res.json({
                message: "url saved!",
                urlData
            })
        }
    })
} catch (error) {
    return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
        code: 500
    })
}

// Redirect from short -> long url logic
urlRouter.get("/trim/:shortCode", async (req, res) => {
    try {
        const shortCode = req.params.shortCode

        const originalUrl = await urlModel.findOne({
            shortCode: shortCode
        })

        if (originalUrl) {
            originalUrl.linkClicks += 1
            await originalUrl.save()

            res.redirect(302, originalUrl.longUrl)
        } else {
            res.status(404).send("Short URL Not Found")
        }
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
            code: 500
        })
    }
})

module.exports = ({
    urlRouter
})