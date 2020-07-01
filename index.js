"use strict";


exports.escapeRegExp = function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

//
exports.objToQuery = function(obj) {
    let encVal = (v) => {
        if (typeof v === 'object') {
            v = JSON.stringify(v);
        }
        return encodeURIComponent(v);
    };
    let res = [];
    for (let k in obj) {
        if (Array.isArray(obj[k])) {
            res = res.concat(obj[k].map(el => encVal(k) + '[]=' + encVal(el)));
        } else {
            res.push(encVal(k) + '=' + encVal(obj[k]));
        }
    }
    return res.join('&');
}


