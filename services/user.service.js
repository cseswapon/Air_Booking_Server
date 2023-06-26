const Register = require("../modules/register.module")

module.exports.userGetService =async () => {
    return await Register.find({}).select(
      "-_id email personalName contactNumber status role"
    );
}