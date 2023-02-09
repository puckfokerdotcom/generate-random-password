// generate a random password with range [a, b]
function generateRandomPassword(a, b)
{
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  const alphabet = lowercase + uppercase + numbers + punctuation;

  // randomizing a length with range: [a, b]
  // mathematics should be studied independently by reader
  const length = a + Math.floor((b-a+1)*Math.random());

  var password = "";
  for (var i = 0; i < length; ++i)
    // mathematics should be studied independently by reader
    password += alphabet.charAt(Math.floor(alphabet.length*Math.random()));

  // returns the password
  return password;
}

// creates a label which shows a string in different colors to improve readability
function createLabel(str) {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var output = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // the stylesheet classes (lowercase, etc.) should have distinguishable colors for readability
    if (lowercase.includes(char)) {
      output += "<span class=\"lowercase\">" + char + "</span>";
    } else if (uppercase.includes(char)) {
      output += "<span class=\"uppercase\">" + char + "</span>";
    } else if (numbers.includes(char)) {
      output += "<span class=\"number\">" + char + "</span>";
    } else if (punctuation.includes(char)) {
      output += "<span class=\"punctuation\">" + char + "</span>";
    }
  }
  return output;

}
