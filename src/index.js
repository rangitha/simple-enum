import SimpleEnum from './simple-enum';

const status = new SimpleEnum(['Failed', 'Success', 'Pending']);

console.log(status.Failed);
// 0

console.log(status[status.Failed]);
// 'Failed'


