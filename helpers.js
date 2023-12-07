exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};
exports.validateNewAcctInputs = function (
  firstName,
  lastName,
  accountNumber,
  balance
) {
  return (
    /^[A-Za-z]*$/.test(firstName) &&
    /^[A-Za-z]*$/.test(lastName) &&
    /^[0-9]*$/.test(accountNumber) &&
    /^[0-9]*$/.test(balance)
  );
};
exports.acctNumExists = function (records, accountNumber) {
  const foundAcct = records.find((each) => each.accountNumber == accountNumber);
  return foundAcct ? true : false;
};
exports.getAccount = function (records, accountNumber) {
  return records.find((each) => each.accountNumber == accountNumber);
};
