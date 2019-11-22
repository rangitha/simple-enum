module.exports = function (members) {
  var Enum = this;

  if (members instanceof Array) {
    return members.forEach(function (member, index) {
      Enum[Enum[index] = member] = index;
    });
  }

  return Object.keys(members).forEach(function (key) {
    Enum[Enum[members[key]] = key] = members[key];
  });
}