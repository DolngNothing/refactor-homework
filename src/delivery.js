function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return rushDelivery(anOrder)
  }
  else {
    return notRushDelivery(anOrder)
  }
}

rushDelivery=(anOrder)=>{
  let deliveryTime=0;
  const nearCity = ['MA','CT',];
  const farCity = ['NY','NH',];
  if (nearCity.includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

notRushDelivery=(anOrder)=>{
  let deliveryTime=0;
  const nearCity = ['MA','CT','NY',];
  const farCity = ['ME','NH',];
  if (nearCity.includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}


module.exports={deliveryDate}