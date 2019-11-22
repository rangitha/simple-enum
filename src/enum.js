module.exports = function (members) {
  members.forEach(function (member, index) {
    this[this[index] = member] = index
  });
}