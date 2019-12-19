import {DateUtil} from '@aelesia/commons'
import {AnyDate} from '../ExtType'

export function DateExt(): void {
	Date.prototype.utc = function (): number {
		return DateUtil.utc(this)
	}

	Date.prototype.epoch = function (): number {
		return DateUtil.epoch(this)
	}

	Date.prototype.elapsed = function (date?: AnyDate): number {
		return DateUtil.elapsed(this, date)
	}

	Date.prototype.add = function (ms: number): Date {
		return DateUtil.add(ms, this)
	}

	Date.prototype.subtract = function (ms: number): Date {
		return DateUtil.subtract(ms, this)
	}

	Date.prototype.is_before = function (date: AnyDate): boolean {
		return DateUtil.is_before(this, date)
	}

	Date.prototype.is_after = function (date: AnyDate): boolean {
		return DateUtil.is_after(this, date)
	}

	Date.prototype.has_passed = function (date: AnyDate): boolean {
		return DateUtil.has_passed(this)
	}

	Date.prototype._f = function(format: string): string {
		return DateUtil._f(this, format)
	}
}