"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringUtil {
    static is_number(str) {
        return !isNaN(str);
    }
    // FIXME: Empty string is parsed as 0
    static to_number(str) {
        if (!StringUtil.is_number(str)) {
            throw new TypeError(`StringUtil: Unable to parse ${str} to number`);
        }
        return Number(str);
    }
}
exports.StringUtil = StringUtil;
