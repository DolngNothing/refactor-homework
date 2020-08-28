const { printOwing } = require('../src/print');
const printTest = require('ava');

printTest('print receipt', t => {
	const expectResult = `***********************\n**** Customer Owes ****\n***********************\nname: james\namount: 20\ndate: 9/27/2020`;
	const invoice = {
		borderSpacing: [
			{ amount: 9 },
			{ amount: 11 }
		],
		customer: 'james'
	}
	let result = printOwing(invoice);
	t.is(expectResult,result);
});