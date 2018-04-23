const usermodel = require('../../models/Users');
const bcrypt = require('bcrypt');


module.exports = {
    getUserByEmail: async function (body,cb) {
        console.log("Inc Login handle request:" + JSON.stringify(body));
        try{
            const user = await usermodel.findAll({
                where:{
                    email:body.email,
                }
            });
            cb(null,user[0]);
        }catch (e) {
            cb(e,null);
        }
    },
    Signup: async function (body,cb) {
        try {
            const saltedhash = await bcrypt.hash(body.password, 10);
            const user = await usermodel.create({
                email: body.email,
                password_hash: saltedhash,
                first_name: body.fname,
                role: body.role
            });
            cb(null,user)
        }catch (e) {
            cb(e,null);
        }
    }
};