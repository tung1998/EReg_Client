<template src='./studentPrint.html'></template>

<script>
import { printElem } from "../../../helper/function";

export default {
  name: "studentPrint",
  data() {
    return {};
  },
  methods: {
    exportFile,
    printFile
  }
};

///methodes
function exportFile() {
  var header =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML =
    header + document.getElementById("print-area").innerHTML + footer;

  var source =
    "data:application/vnd.ms-word;charset=utf-8," +
    encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = "document.doc";
  fileDownload.click();
  document.body.removeChild(fileDownload);
}

function printFile(elem, css) {
  printElem('print-area')
}
</script>

<style scoped>
</style>
