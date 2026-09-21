export class Counter {
	count = $state(0);

	constructor(count: number) {
		this.count = count;
	}

	increment() {
		this.count++;
	}

	decrement() {
		this.count--;
	}

	reset() {
		this.count = 0;
	}
}
