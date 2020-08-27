const rankTest = require('ava');
const {rating} = require('../src/rank')


rankTest('case 1', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };

  const rank = rating(voyage,history.slice(0,10))
  t.is('A',rank)
});


rankTest('case 2', t => {
  const voyage = {
    zone: 'east-indies',
    length: 18,
  };

  const rank = rating(voyage,history.slice(0,18))
  t.is('B',rank)
});


const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },  
  {
    zone: 'west-africa',
    profit: 7,
  }
];