import {Time} from '../util/Time'
import {AnyDate} from '../ExtType'

Date.prototype.utc = function(): number {
	return Time.utc(this)
}

Date.prototype.epoch = function(): number {
	return Time.epoch(this)
}

Date.prototype.elapsed = function(date?: AnyDate): number {
	return Time.elapsed(this, date)
}

Date.prototype.add = function(ms: number): Date {
	return Time.add(ms, this)
}

Date.prototype.subtract = function(ms: number): Date {
	return Time.subtract(ms, this)
}

Date.prototype.is_before = function(date: AnyDate): boolean {
	return Time.is_before(this, date)
}

Date.prototype.is_after = function(date: AnyDate): boolean {
	return Time.is_after(this, date)
}

Date.prototype.has_passed = function(date: AnyDate): boolean {
	return Time.has_passed(this)
}