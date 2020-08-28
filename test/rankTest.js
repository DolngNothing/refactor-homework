const rankTest = require('ava');
const {rating} = require('../src/rank')


rankTest('case 1 has china and length > 10 <12, history<5 , hasChina', t => {
  const voyage = {
    zone: 'china',
    length: 11,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 2 has china and length > 12 < 18, history<5 , hasChina', t => {
  const voyage = {
    zone: 'china',
    length: 16,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 3 has china and length >18, history<5 , hasChina', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const rank = rating(voyage,history.slice(0,4))
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