<template src='./Print.html'></template>

<script>
import { printElem, exportFile } from "../../../helper/function";

export default {
  name: "Print",
  data() {
    return {};
  },
  methods: {
    exportFileButtonClick,
    printFileButtonClick
  }
};

///methodes
function exportFileButtonClick() {
  exportFile("print-area");
}
<<<<<<< HEAD
=======

function printFileButtonClick() {
  printElem("print-area");
}

>>>>>>> 754727d1ff850a8365eac00976a0d5d8dae5855a

function printFileButtonClick() {
  printElem("print-area");
}
</script>

<style scoped>
</style>
