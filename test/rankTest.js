const rankTest = require('ava');
const {rating} = require('../src/rank')


rankTest('case 1 has china and length > 10 <12, history<5 ', t => {
  const voyage = {
    zone: 'china',
    length: 11,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 2 has china and length > 12 < 18, history<5 ', t => {
  const voyage = {
    zone: 'china',
    length: 16,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 3 has china and length >18, history<5 ', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 4 has china and 4 < length <8, history<5 ', t => {
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('A',rank)
});

rankTest('case 5 has china and length <4, history<5 ', t => {
  const voyage = {
    zone: 'china',
    length: 3,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('A',rank)
});

rankTest('case 6 not china and length > 10 <12, history<5 ', t => {
  const voyage = {
    zone: 'east-indies',
    length: 11,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 7 not china and length > 12 < 18, history<5 ', t => {
  const voyage = {
    zone: 'east-indies',
    length: 16,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 8 not china and length >18, history<5 ', t => {
  const voyage = {
    zone: 'east-indies',
    length: 19,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 9 not china and 4 < length <8, history<5 ', t => {
  const voyage = {
    zone: 'east-indies',
    length: 5,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 10 not china and length <4, history<5 ', t => {
  const voyage = {
    zone: 'east-indies',
    length: 3,
  };
  const rank = rating(voyage,history.slice(0,4))
  t.is('B',rank)
});

rankTest('case 11 has china and length <4, history<5 , hasChina false', t => {
  const voyage = {
    zone: 'china',
    length: 3,
  };
  const rank = rating(voyage,history.slice(7,9))
  t.is('B',rank)
});

rankTest('case 12 has china and 4 < length <8, history<5 , hasChina false', t => {
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const rank = rating(voyage,history.slice(7,9))
  t.is('B',rank)
});

rankTest('case 13 has china and length >18, history<5 , hasChina false', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const rank = rating(voyage,history.slice(7,9))
  t.is('B',rank)
});

rankTest('case 14 has china and length > 12 < 18, history<5 , hasChina false', t => {
  const voyage = {
    zone: 'china',
    length: 16,
  };
  const rank = rating(voyage,history.slice(7,9))
  t.is('B',rank)
});

rankTest('case 15 has china and length > 10 <12, history<5 , hasChina false', t => {
  const voyage = {
    zone: 'china',
    length: 11,
  };
  const rank = rating(voyage,history.slice(7,9))
  t.is('B',rank)
});

rankTest('case 16 has china and length > 10 <12, history>5 , hasChina false', t => {
  const voyage = {
    zone: 'china',
    length: 11,
  };
  const rank = rating(voyage,history.slice(7,16))
  t.is('B',rank)
});

rankTest('case 17 not china and length <4, history>5 ', t => {
  const voyage = {
    zone: 'east-indies',
    length: 3,
  };
  const rank = rating(voyage,history.slice(0,10))
  t.is('A',rank)
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