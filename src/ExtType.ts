export type AnyDate = Date | number | string

declare global {
	interface Date {
		utc(): number
		epoch(): number
		elapsed(date?: AnyDate): number
		add(ms: number): Date
		subtract(ms: number): Date
		is_before(date: AnyDate): boolean
		is_after(date: AnyDate): boolean
		has_passed(date: AnyDate): boolean
		_f(date: string): string
	}

	interface String {
		is_number(): boolean
		is_blank(): boolean
		lines(): string[]
		replace_all(search: string, replacement: string): string
		remove(...char: string[]): string
		_i(): number
		_json <T>(): T
		secs(): number
		mins(): number
		hours(): number
		days(): number
	}

	interface Array<T> {
		max(): number
		is_empty(): boolean
		random(): T
		first(): T
		last(): T
	}
}