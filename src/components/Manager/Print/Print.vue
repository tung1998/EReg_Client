<template src='./Print.html'></template>

<!--<script src="./Login.js"></script>-->
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

function printFileButtonClick() {
  printElem("print-area");
}


</script>

<style scoped>
</style>
