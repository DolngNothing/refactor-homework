const { deliveryDate } = require('../src/delivery');

const deliveryTest = require('ava');

deliveryTest('Rush in MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(2,deliveryDate(anOrder,true))
})
