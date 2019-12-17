"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Time_1 = __importDefault(require("../../../../lib/ext/util/Time"));
describe('Time', () => {
    test('to_date', async () => {
        let date = new Date(1576598796000);
        expect(Time_1.default.to_date(date)).toEqual(date);
        expect(Time_1.default.to_date(1576598796000)).toEqual(date);
        expect(Time_1.default.to_date(1576598796)).toEqual(date);
        expect(Time_1.default.to_date(1576598795)).not.toEqual(date);
        expect(Time_1.default.to_date('1576598796000')).toEqual(date);
        expect(Time_1.default.to_date('1576598796')).toEqual(date);
        expect(Time_1.default.to_date('1576598795')).not.toEqual(date);
        expect(Time_1.default.to_date()).toBeInstanceOf(Date);
        // FIXME: expect(Time.to_date()).toEqual(new Date())
    });
    test('invalid to_date', async () => {
        expect(() => Time_1.default.to_date('abc')).toThrow(TypeError);
        expect(() => Time_1.default.to_date('123a')).toThrow(TypeError);
        expect(() => Time_1.default.to_date(null)).toThrow(TypeError);
        expect(() => Time_1.default.to_date(true)).toThrow(TypeError);
    });
    test('utc/epoch', async () => {
        let date = new Date(1576598796987);
        expect(Time_1.default.utc(date)).toEqual(1576598796987);
        expect(Time_1.default.epoch(date)).toEqual(1576598796);
    });
    test('add/elapsed', async () => {
        let date = Time_1.default.now();
        let date2 = Time_1.default.add(61234, date);
        expect(Time_1.default.elapsed(date, date2)).not.toEqual(61233);
        expect(Time_1.default.elapsed(date, date2)).not.toEqual(61235);
        expect(Time_1.default.elapsed(date, date2)).toEqual(61234);
        expect(Time_1.default.elapsed(date2, date)).toEqual(61234);
    });
    test('subtract/elapsed', async () => {
        let date = Time_1.default.now();
        let date2 = Time_1.default.subtract(39280, date);
        expect(Time_1.default.elapsed(date, date2)).not.toEqual(39279);
        expect(Time_1.default.elapsed(date, date2)).not.toEqual(39281);
        expect(Time_1.default.elapsed(date, date2)).toEqual(39280);
        expect(Time_1.default.elapsed(date2, date)).toEqual(39280);
    });
    test('before', async () => {
        let date = Time_1.default.now();
        let date2 = Time_1.default.add(1, date);
        expect(Time_1.default.is_before(date, date)).toBeTruthy();
        expect(Time_1.default.is_before(date, date2)).toBeTruthy();
        expect(Time_1.default.is_before(date2, date)).not.toBeTruthy();
    });
    test('before now()', async () => {
        let date = Time_1.default.now();
        expect(Time_1.default.is_before(date, Time_1.default.now())).toBeTruthy();
    });
    test('after', async () => {
        let date = Time_1.default.now();
        let date2 = Time_1.default.add(1, date);
        expect(Time_1.default.is_after(date, date2)).not.toBeTruthy();
        expect(Time_1.default.is_after(date2, date)).toBeTruthy();
    });
    test('after now()', async () => {
        let date = Time_1.default.add(99999);
        expect(Time_1.default.is_after(date, Time_1.default.now())).toBeTruthy();
    });
    test('has passed', async () => {
        expect(Time_1.default.has_passed(Time_1.default.to_date(1576598796000))).toBeTruthy();
        expect(Time_1.default.has_passed(Time_1.default.to_date(1576598796))).toBeTruthy();
        expect(Time_1.default.has_passed(Time_1.default.to_date(9976598796))).not.toBeTruthy();
    });
});
