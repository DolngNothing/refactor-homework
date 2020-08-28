function printOwing(invoice) {
  let outstanding = 0;
  let result = '***********************\n**** Customer Owes ****\n***********************\n';
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  result += `name: ${invoice.customer}\namount: ${outstanding}\ndate: ${createDueDate(new Date()).toLocaleDateString()}`;
  return result;
}
createDueDate = (today) => {
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

module.exports = { printOwing }
