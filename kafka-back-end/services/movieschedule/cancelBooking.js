var modelBilling = require('./../../models/Billing');

function handle_request(msg, callback) {
    console.log(`Handle request: ${msg}`);
    // force: true will drop the table if it already exists
    modelBilling.Billing.sync({
        force: false
    }).then(() => {
        // Table created
        if (msg.bookingId && msg.bookingId !== 0) {
            return modelBilling.Billing.update({
                status: 'C'
            }, { where: { id: msg.bookingId } });
        }
    }).then((data) => {
        callback(null, data);
    });
}

module.exports = {
    handle_request
}