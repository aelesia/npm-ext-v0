import {StringUtil} from '../util/StringUtil'

export function StringExt(): void {
	String.prototype.is_blank = function (): boolean {
		return StringUtil.is_blank(this.toString())
	}

	String.prototype.lines = function (): string[] {
		return StringUtil.lines(this.toString())
	}

	String.prototype.replace_all = function (search: string, replacement: string): string {
		return StringUtil.replace_all(this.toString(), search, replacement)
	}
	String.prototype.remove = function (...char: string[]): string {
		return StringUtil.remove(this.toString(), ...char)
	}

	String.prototype._i = function (): number {
		return StringUtil._i(this.toString())
	}

	String.prototype._json = function <T>(): T {
		return StringUtil._json(this.toString())
	}

	String.prototype.secs = function (): number {
		return StringUtil.secs(this.toString())
	}

	String.prototype.mins = function (): number {
		return StringUtil.mins(this.toString())
	}

	String.prototype.hours = function (): number {
		return StringUtil.hours(this.toString())
	}

	String.prototype.days = function (): number {
		return StringUtil.days(this.toString())
	}
}
