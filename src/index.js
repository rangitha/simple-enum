const Enum = require('./enum');
const Status = new Enum(['Failed', 'Success', 'Pending']);

console.log(Status.Failed); // 0
console.log(Status[Status.Failed]); // 'Failed'