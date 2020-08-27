const { printOwing } = require('../src/print');

describe('print receipt', () => {
	it('sss',
		() => {
		  
			const expectResult = `***********************\n**** Customer Owes ****\n***********************\nname: james\namount: 20\ndate: 2019-06-06}`;

			console.log = jest.fn();

			const invoice={
				borderSpacing:[
					{amount:9},
					{amount:11}
				],
				customer:'james'
			}

			printOwing(invoice);

			//expect(console.log).toHaveBeenCalledWith(expectResult);
		});
});