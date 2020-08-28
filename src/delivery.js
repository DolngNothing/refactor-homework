function deliveryDate (anOrder, isRush) {
  return isRush? rushDelivery(anOrder):notRushDelivery(anOrder)
}

rushDelivery=(anOrder)=>{
  const nearCity = ['MA','CT',];
  const farCity = ['NY','NH',];
  if (nearCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(2);
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(3);
  }
  else {
    return anOrder.placedOn.plusDays(4);
  }
}

notRushDelivery=(anOrder)=>{
  const nearCity = ['MA','CT','NY',];
  const farCity = ['ME','NH',];
  const plusDay= 2;
  if (nearCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(plusDay + 2);
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(plusDay + 3);
  }
  else {
    return anOrder.placedOn.plusDays(plusDay + 4);
  }
}


module.exports={deliveryDate}