import {DateUtil} from '../src/util/DateUtil'
import {DateExt} from '../src/prototype/DateExt'

DateExt()

describe('Time', () => {

	test('utc/epoch', async () => {
		let date = new Date(1576598796987)
		expect(date.utc()).toEqual(1576598796987)
		expect(date.epoch()).toEqual(1576598796)
	})

	test('add/elapsed', async () => {
		let date = DateUtil.now()
		let date2 = date.add(61234)
		expect(date.elapsed(date2)).not.toEqual(61233)
		expect(date.elapsed(date2)).not.toEqual(61235)
		expect(date.elapsed(date2)).toEqual(61234)
		expect(date2.elapsed(date)).toEqual(61234)
	})
	//
	// test('subtract/elapsed', async () => {
	// 	let date = DateUtil.now()
	// 	let date2 = DateUtil.subtract(39280, date)
	// 	expect(DateUtil.elapsed(date, date2)).not.toEqual(39279)
	// 	expect(DateUtil.elapsed(date, date2)).not.toEqual(39281)
	// 	expect(DateUtil.elapsed(date, date2)).toEqual(39280)
	// 	expect(DateUtil.elapsed(date2, date)).toEqual(39280)
	// })
	//
	// test('before', async () => {
	// 	let date = DateUtil.now()
	// 	let date2 = DateUtil.add(1, date)
	// 	expect(DateUtil.is_before(date, date)).toBeTruthy()
	// 	expect(DateUtil.is_before(date, date2)).toBeTruthy()
	// 	expect(DateUtil.is_before(date2, date)).not.toBeTruthy()
	// })
	//
	// test ('before now()', async () =>{
	// 	let date = DateUtil.now()
	// 	expect(DateUtil.is_before(date, DateUtil.now())).toBeTruthy()
	// })
	//
	// test('after', async () => {
	// 	let date = DateUtil.now()
	// 	let date2 = DateUtil.add(1, date)
	// 	expect(DateUtil.is_after(date, date2)).not.toBeTruthy()
	// 	expect(DateUtil.is_after(date2, date)).toBeTruthy()
	// })
	//
	// test ('after now()', async () =>{
	// 	let date = DateUtil.add(99999)
	// 	expect(DateUtil.is_after(date, DateUtil.now())).toBeTruthy()
	// })
	//
	// test ('has passed', async ()=>{
	// 	expect(DateUtil.has_passed(DateUtil.to_date(1576598796000))).toBeTruthy()
	// 	expect(DateUtil.has_passed(DateUtil.to_date(1576598796))).toBeTruthy()
	// 	expect(DateUtil.has_passed(DateUtil.to_date(9976598796))).not.toBeTruthy()
	// })
})
