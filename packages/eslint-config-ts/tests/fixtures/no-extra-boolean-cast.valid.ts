const baz = 'foo';
const foo = 'baz';
const bar = 'bat';
const bat = 'bar';

// Should not error on "Redundant double negation"
if (!!baz) {
	console.log(1);
}

// Should not error on "Redundant Boolean call"
if (Boolean(baz)) {
	console.log(2);
}

// More cases

if (Boolean(!!baz)) {
	console.log(2);
}

if (!!foo || bar) {
	console.log(1);
}

if ((!!foo || bar) && baz) {
	console.log();
}

console.log(foo && Boolean(!!bar) ? baz : bat);
