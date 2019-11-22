const Enum = require('./enum');

const Direction = new Enum(['Up', 'Down', 'Left', 'Right']);
console.log(Direction.Up); // 0
console.log(Direction[Direction.Up]); // 'Up'

const Seasons = new Enum(['Spring', 'Summer', 'Autumn', 'Winter'], 1);
console.log(Seasons.Spring); // 1
console.log(Seasons.Summer); // 2

const Response = new Enum({
  No: 0,
  Yes: 1
});
console.log(Response.No); // 0
console.log(Response[Response.No]); // 'No'

const Button = new Enum({
  Confirm: 'OK',
  Dismiss: 'Cancel'
});
console.log(Button.Confirm); // 'OK'
console.log(Button[Button.Confirm]); // 'Confirm'

const BooleanLikeHeterogeneousEnum = new Enum({
  No: 0,
  Yes: 'Yes'
});
console.log(BooleanLikeHeterogeneousEnum.No); // 0
console.log(BooleanLikeHeterogeneousEnum.Yes); // 'Yes'