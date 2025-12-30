"use strict";

const uniqueMessage = e => {
    let s;
    try {
        let r = e.message.substring(
            e.message.lastIndexOf(".$") + 2,
            e.message.lastIndexOf("_1")
        );
        s = r.charAt(0).toUpperCase() + r.slice(1) + " already exists";
    } catch (e) {
        s = "Unique field already exists";
    }
    return s;
};

exports.errorHandler = (e => {
    let s = "";
    if (e.code)
        switch (e.code) {
            case 11000:
            case 11001:
                s = uniqueMessage(e);
        }
    else {
        if (e.message.indexOf("Cast to ObjectId failed") !== -1) s = "No data found";
        for (let r in e.errors) if (e.errors[r].message) s = e.errors[r].message;
    }
    if (s.includes("Path")) s = s.slice(6);
    return s;
});
