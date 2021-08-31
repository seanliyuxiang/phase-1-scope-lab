var customerName = 'bob';

// for some reason, doing it function expression style didn't work
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'jon';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'tracy';
}