function printOwing(invoice) {
  let result = '***********************\n**** Customer Owes ****\n***********************\n';
  result += `name: ${invoice.customer}\namount: ${calculateOutstanding(invoice.borderSpacing)}\ndate: ${createDueDate(new Date()).toLocaleDateString()}`;
  return result;
}

createDueDate = (today) => {
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

calculateOutstanding=(borderSpacing)=>{
  let outstanding=0;
  for (const o of borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

module.exports = { printOwing }
