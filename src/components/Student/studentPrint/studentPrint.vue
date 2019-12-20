<template src='./studentPrint.html'></template>

<script>
import { printElem } from "../../../helper/function";

export default {
  name: "studentPrint",
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
  exportFile('print-area')
}

function printFileButtonClick() {
  printElem('print-area')
}
</script>

<style scoped>
</style>
