export class ArrayUtil {

	static max(arr: number[]): number {
		return Math.max.apply(Math, arr)
	}

	static is_empty<T>(arr: Array<T>): boolean {
		return this.length === 0
	}
	static random<T>(arr: Array<T>): T {
		return arr[Math.floor(Math.random() * arr.length)]
	}
	static first<T>(arr: Array<T>): T {
		return arr[0]
	}
	static last<T>(arr: Array<T>): T {
		return arr[this.length - 1]
	}
}
