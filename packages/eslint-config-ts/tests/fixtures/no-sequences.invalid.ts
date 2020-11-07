let test = 1;
const doSomething = () => {
	console.log('done');
};

for (; doSomething(), test < 3; ) {
	console.log(test++);
}
