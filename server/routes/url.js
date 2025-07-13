const { Router } = require("express")
const urlRouter = Router();

urlRouter.get("/test", async(req, res) => {
    res.json({
        message: "test done successfully!"
    })
})

module.exports = ({
    urlRouter
})