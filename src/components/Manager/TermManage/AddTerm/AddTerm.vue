<template src='./AddTerm.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createTerm } from "../../../../api/term";
export default {
  name: "AddTermtModal",
  data() {
    return {
      term: {
        name: "",
        startTime: "",
        endTime: "",
        registSTime: "",
        registSTime: ""
      }
    };
  },
  methods: {
    addNewTerm,
    resetInput
  }
};

function addNewTerm() {
  if (this.term.name && this.term.startTime && this.term.endTime && this.term.registSTime && this.term.registETime) {
    createTerm(
      {
        name: this.term.name,
        startTime: this.term.startTime,
        endTime: this.term.endTime,
        registSTime: this.term.registSTime,
        registETime: this.term.registETime
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addTerm", result.data);
        this.term.name = "";
        this.term.startTime = "";
        this.term.endTime = "";
        this.term.registSTime = "";
        this.term.registETime = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.term.name = "";
  this.term.startTime = "";
  this.term.endTime = "";
  this.term.registSTime = "";
  this.term.registETime = "";      
}
</script>

<style scoped>
</style>
