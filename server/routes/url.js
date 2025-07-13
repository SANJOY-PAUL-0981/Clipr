const { Router } = require("express")
const urlRouter = Router();
const { urlModel } = require('../models/db')

urlRouter.post("/test", async (req, res) => {
    const longUrl = req.body.longUrl

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
        shortCodeGeneration()
        return res.json({
            message: "Short Code Already Exists, lets regenate",
            regenaratedCode: shortCode
        })
    } else {
        const shortUrl = longUrl + "/" + shortCode
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

module.exports = ({
    urlRouter
})