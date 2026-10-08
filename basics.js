/*function countEvenNumbers(numbers){
    let count = [];
    for (let num of numbers){
        if (num % 2 === 0){
            count.push(num);
        }
    }
    return count.length;
}
const numbers = [1,2,4,6,9,7,2];
console.log(countEvenNumbers(numbers));

const scores = [12, 55, 40, 98, 70, 31, 85];
 function getHighScores(scores){
    let highScores = [];
    for (let score of scores){
        if (score >= 50 ){
            highScores.push(score);
        }
 }
  return highScores.length;
 }
 console.log(getHighScores(scores));

 const prices = [10,25,5,40,18,50];
  function getDiscountedPrices(prices){
    let discountedPrices = [ ];
    for ( let price of prices ){
        if (price >= 20){
            discountedPrices.push(price - 5)
        }
    }
    return discountedPrices;
  }


  console.log(getDiscountedPrices(prices));

  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
  function getLongNames(names){
    let longNames = [];
    for (let name of names){
        if (name.length >= 5 ){
            longNames.push(name);
        }
    }
    return longNames;
  }
  console.log (getLongNames(names));

  const usernames = ["alice", "bob", "charlie"];
  function generateEmails(usernames){
    return usernames.map(username => username + 'nexorlio.com');

  }
  console.log(generateEmails(usernames));
const prices = [10, 60, 25, 100, 45, 80];
 function getTaxedHighPrice(prices){
    return prices
    .filter(price => price > 50)
    .map(price => price * 1.1);
 }
 console.log(getTaxedHighPrice(prices));
  
 const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  { name: "David", isActive: false }
];
 function getActiveUserNames(users){
    return users
    .filter(user => user.isActive)
    .map(user => user.name);
 }
 console.log(getActiveUserNames(users));
 const inventory = [
  { title: "Laptop", price: 1000, inStock: true },
  { title: "Mouse", price: 25, inStock: false },
  { title: "Keyboard", price: 75, inStock: true },
  { title: "Monitor", price: 200, inStock: true }
];
 function getAffordableInStockProducts(inventory){
    return inventory
    .filter( inventory => inventory.inStock === true &&  inventory.price < 500)
    .map(inventory => `${inventory.title} - $ ${inventory.price}`);
    
 }
 console.log(getAffordableInStockProducts(inventory));

 // Add this at the bottom of basics.js:

function calculateTotal(prices) {
    return prices
    .reduce ((total,price) => total + price , 12.99);
   Use prices.reduce((total, price) => ..., 0) here!
}

const cartPrices = [12.99, 5.50, 45.00, 10.25];
console.log(calculateTotal(cartPrices));

const orders = [
  { id: 101, amount: 250, status: "completed" },
  { id: 102, amount: 400, status: "pending" },
  { id: 103, amount: 150, status: "completed" },
  { id: 104, amount: 50, status: "cancelled" }
];
 function getTotalCompletedRevenue(orders){
    return orders
    .filter (order => order.status === 'completed')
    .reduce((total,order) => total + order.amount , 0)
 }
 console.log(getTotalCompletedRevenue(orders));
  function getTotalWatchTime(users) {
  // Write your .filter().reduce() chain here!
}

const users = [
  { name: "Amina", watchTimeMinutes: 120, isPremium: true, status: "active" },
  { name: "John", watchTimeMinutes: 45, isPremium: false, status: "active" },
  { name: "Kev", watchTimeMinutes: 200, isPremium: true, status: "inactive" },
  { name: "Sarah", watchTimeMinutes: 180, isPremium: true, status: "active" }
];

console.log(getTotalWatchTime(users));
function getTotalWatchTime(users){
    return users 
    .filter (user => user.isPremium === true && user.status === 'active')
    .reduce((total,user) => total + user.watchTimeMinutes , 0);

}
//console.log(getTotalWatchTime(users));


const employees = [
  { name: "Alice", department: "Engineering", salary: 7000 },
  { name: "Bob", department: "Marketing", salary: 4500 },
  { name: "Charlie", department: "Engineering", salary: 8500 },
  { name: "Diana", department: "Sales", salary: 5000 }
];
 function getEngineeringBudget(employees){
    return employees
    .reduce((total,employee) => employee.department === 'Engineering'? total + employee.salary : total , 0);
 }

console.log(getEngineeringBudget(employees));
const scannedItems = ["electronics", "clothing", "electronics", "groceries", "clothing", "electronics"];
 function countCategories(items){
    return items
    .reduce((acc,category) => {
      if (acc[category]){
        (acc[category]) += 1;
       }
       else {
        (acc[category]) = 1;
       }
       return acc;
    },{});
 }
 console.log(countCategories(scannedItems));*/
 const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "editor" },
  { name: "Charlie", role: "viewer" },
  { name: "Diana", role: "editor" },
  { name: "Eve", role: "admin" },
  { name: "Frank", role: "admin" }
];
function countUserRoles(users){
  return users
  .reduce ((acc, user) => {
    const role = user.role;
    if (acc[role]) {
      (acc[role]) += 1;
    }
    else {
      (acc[role]) = 1;
    }
    return acc; 
    },{});
}
console.log(countUserRoles(users));

const logs = [
  { id: 1, severity: "critical" },
  { id: 2, severity: "info" },
  { id: 3, severity: "warning" },
  { id: 4, severity: "critical" },
  { id: 5, severity: "info" },
  { id: 6, severity: "critical" }
];
function countSeverities(logs) {
  return logs
  .reduce((acc,log) => {
    const severity = log.severity;
    if (acc[severity]){
      (acc[severity]) += 1;
    }
    else {
      (acc[severity]) = 1;
    }
    return acc;
  },{});
}
  
console.log(countSeverities(logs));