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
  if (nearCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(4);
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(5);
  }
  else {
    return anOrder.placedOn.plusDays(6);
  }
}


module.exports={deliveryDate}