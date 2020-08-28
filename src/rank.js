function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = history.length < 5 ? 5:1 ;
  result += history.filter(v => v.profit < 0).length;
  return Math.max(voyage.zone === 'china' && hasChina(history)?result-2:result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  if (voyage.zone === 'china' && hasChina(history)) {
    return caculateChinaVoyageProfit(history,voyage,result);
  }
  else {
    return caculateNotChinaVoyageProfit(history,voyage,result);
  }
}

caculateChinaVoyageProfit = (history,voyage,result) => {
  result += 3;
  result = (history.length > 10) ? result + 1 : result
  result = voyage.length > 12 ? voyage.length > 18 ? result : result+1 : result;
  return result;
}

caculateNotChinaVoyageProfit = (history,voyage,result) => {
  result = (history.length > 8) ? result + 1 : result
  result = voyage.length < 14 ? result : result-1
  return result;
}

function rating(voyage, history) {
  return judgeAorB(voyageProfitFactor(voyage, history), voyageRisk(voyage), captainHistoryRisk(voyage, history));
}

judgeAorB = (vpf, vr, chr) => {
  return vpf * 3 > (vr + chr * 2) ? 'A' : 'B'
}

module.exports = {
  rating
};

