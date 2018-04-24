var kafka = require('../../kafka/client');
'use strict';

let resFormat = require("../../helpers/res_format");

let updateProfileRouterFn = async function (req, res, next) {
    const userId = req.session.passport.user.userId;
    const body = req.body;
    body["userId"] = userId;

    let updateProfileById = function (body) {
        return new Promise(function (resolve, reject) {
            kafka.make_request('request', 'updateProfileById',
               body,
                function (err, results) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(results);
                });
        });
    };

    try {
        const profile = await updateProfileById(body);
        let resObj = new resFormat("profile updated");
        return res.status(resObj.getStatus()).json(resObj.log());

    } catch (err) {
        let resObj = new resFormat(err);
        return res.status(resObj.getStatus()).json(resObj.log());
    }
};

module.exports.updateProfileRouterFn = updateProfileRouterFn;
