function age() {
  var d1 = parseInt(document.getElementById("date").value);
  var m1 = parseInt(document.getElementById("month").value);
  var y1 = parseInt(document.getElementById("year").value);

  // Validate input
  if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
    alert("Please enter valid values for day, month, and year.");
    return;
  }

  // Validate date range
  if (d1 < 1 || d1 > 31 || m1 < 1 || m1 > 12 || y1 < 1900 || y1 > new Date().getFullYear()) {
    alert("Please enter a valid date of birth.");
    return;
  }

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();

  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;
  document.getElementById("age").innerHTML =
    "Your age is " + y + " years " + m + " months " + d + " days";
}