module.exports = function (members, startIndex) {
  var Enum = this;

  if (members instanceof Array) {
    return members.forEach(function (member, index) {
      var value = startIndex ? startIndex + index : index;
      Enum[Enum[value] = member] = value;
    });
  }

  return Object.keys(members).forEach(function (key) {
    Enum[Enum[members[key]] = key] = members[key];
  });
}