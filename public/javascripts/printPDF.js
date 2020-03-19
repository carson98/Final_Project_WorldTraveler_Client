function printPDF() {

  var schedule = document.getElementById('tour-schedule');

  var newWin = window.open("", "Print-Window");

  newWin.document.open();

  newWin.document.write(
    '<html><body onload="window.print()">' +
    schedule.innerHTML +
      "</body></html>"
  );

  newWin.document.close();

  setTimeout(function() {
    newWin.close();
  }, 10);
}
