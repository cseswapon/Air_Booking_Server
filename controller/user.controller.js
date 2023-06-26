const { userGetService } = require("../services/user.service")

module.exports.getUserControl = async (req, res) => { 
    const data = await userGetService()
    res.send({status:"ok",data})
}