import {ArrayUtil} from '../util/ArrayUtil'

export function ArrayExt():void {

	Array.prototype.max = function (): number {
		return ArrayUtil.max(this)
	}
	Array.prototype.is_empty = function (): boolean {
		return ArrayUtil.is_empty(this)
	}
	Array.prototype.random = function () {
		return ArrayUtil.random(this)
	}
	Array.prototype.first = function () {
		return ArrayUtil.first(this)
	}
	Array.prototype.last = function () {
		return ArrayUtil.last(this)
	}
}