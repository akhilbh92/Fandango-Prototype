const usermodel = require('../../models/Users');

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
            const user = await usermodel.create({
                email: body.email,
                password: body.password,
                fname: body.fname,
                role: body.role
            });
            cb(null,user)
        }catch (e) {
            cb(e,null);
        }
    }
};