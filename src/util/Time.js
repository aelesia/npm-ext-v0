"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = require("./StringUtil");
class Time {
    static now() {
        return new Date();
    }
    static to_date(date) {
        if (date instanceof Date) {
            return date;
        }
        else if (typeof date === 'number') {
            return this.from_number(date);
        }
        else if (typeof date === 'string') {
            return this.from_number(StringUtil_1.StringUtil.to_number(date));
        }
        else if (typeof date === 'undefined') {
            return new Date();
        }
        throw new TypeError(`Time: Unable to parse ${date} to date`);
    }
    static from_number(timestamp) {
        if (timestamp <= 99999999999) {
            return new Date(timestamp * 1000);
        }
        return new Date(timestamp);
    }
    static utc(date) {
        return this.to_date(date).getTime();
    }
    static epoch(date) {
        return Math.trunc(this.to_date(date).getTime() / 1000);
    }
    static elapsed(date, date2) {
        let date_utc = this.to_date(date).getTime();
        let date2_utc = this.to_date(date2).getTime();
        return Math.abs(date_utc - date2_utc);
    }
    static add(ms, date) {
        date = this.to_date(date);
        return new Date(date.getTime() + ms);
    }
    static subtract(ms, date) {
        date = this.to_date(date);
        return new Date(date.getTime() - ms);
    }
    /**
     * Returns true if first date is equal to or before second date OR now()
     */
    static is_before(date, date2) {
        let date_utc = this.to_date(date).getTime();
        let date2_utc = this.to_date(date2).getTime();
        return date_utc <= date2_utc;
    }
    static is_after(date, date2) {
        let date_utc = this.to_date(date).getTime();
        let date2_utc = this.to_date(date2).getTime();
        return date_utc > date2_utc;
    }
    static has_passed(date) {
        return this.is_before(date, new Date());
    }
    static ext() {
        Date.prototype.utc = function () {
            return Time.utc(this);
        };
        Date.prototype.epoch = function () {
            return Time.epoch(this);
        };
        Date.prototype.elapsed = function (date) {
            return Time.elapsed(this, date);
        };
        Date.prototype.add = function (ms) {
            return Time.add(ms, this);
        };
        Date.prototype.subtract = function (ms) {
            return Time.subtract(ms, this);
        };
        Date.prototype.is_before = function (date) {
            return Time.is_before(this, date);
        };
        Date.prototype.is_after = function (date) {
            return Time.is_after(this, date);
        };
        Date.prototype.has_passed = function (date) {
            return Time.has_passed(this);
        };
    }
}
exports.default = Time;
