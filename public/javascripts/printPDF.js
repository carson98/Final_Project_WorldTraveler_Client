function printPDF() {
  const filename = "Tour-Schedule.pdf";

  html2canvas(document.querySelector("#tour-schedule")).then(canvas => {
    let pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
    pdf.save(filename);
  });
}
