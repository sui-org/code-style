/* eslint-disable @typescript-eslint/no-unused-vars */

// Should indicate that no value is returned (void)
function test() {
	console.log(10);
}

// Should indicate that a number is returned
const fn = function () {
	return 1;
};

// Should indicate that a string is returned
const arrowFn = () => 'test';

// Should indicate that a boolean or string 'no' is returned
function test2(x: number) {
	if (x > 5) {
		return true;
	}
	return 'no';
}

class Test {
	// Should indicate that no value is returned (void)
	method() {
		console.log(this);
	}
}
