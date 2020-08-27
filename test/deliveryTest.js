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

deliveryTest('Rush in NY',t => {
    const anOrder={
        deliveryState:'NY',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(3,deliveryDate(anOrder,true))
})

deliveryTest('Rush in ELSE',t => {
    const anOrder={
        deliveryState:'ELSE',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,true))
})

deliveryTest('notRush in MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,false))
})

deliveryTest('notRush in ME',t => {
    const anOrder={
        deliveryState:'ME',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(5,deliveryDate(anOrder,false))
})

deliveryTest('notRush in ELSE',t => {
    const anOrder={
        deliveryState:'ELSE',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(6,deliveryDate(anOrder,false))
})


