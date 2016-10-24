"use strict";

const defaults = {timeout: 1000};

module.exports = function(config) {

    var publish = {
        message: function(payload, next) {

            payload.data.text += " pub_append 2";

            next(null, payload);
        }
    };

    var subscribe = {
        message: function(payload, next) {
            
            payload.data.text += " sub_append 2";

            next(null, payload);
        }
    };

    return {
        middleware: {publish, subscribe}
    }

}
