<template src='./AddTermSubStu.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createTermSubStu } from "../../../../api/termSubStu";
export default {
  name: "AddTermSubStutModal",
  data() {
    return {
      termSubStu: {
        termID: "",
        subjectID: "",
        subjectName: "",
        student: ""
      }
    };
  },
  methods: {
    addNewTermSubStu,
    resetInput
  }
};

function addNewTermSubStu() {
  if (this.termSubStu.termID && this.termSubStu.subjectID && this.termSubStu.subjectName && this.termSubStu.student) {
    createTermSubStu(
      {
      termID: this.termSubStu.termID,
      subjectID: this.termSubStu.subjectID,
      subjectName: this.termSubStu.subjectName,
      student: this.termSubStu.student
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addTermSubStu", result.data);
        this.termSubStu.termID = "";
        this.termSubStu.subjectID = "" ;
        this.termSubStu.subjectName = "" ;
        this.termSubStu.student = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.termSubStu.termID = "";
  this.termSubStu.subjectID = "" ;
  this.termSubStu.subjectName = "" ;
  this.termSubStu.student = "";
}
</script>

<style scoped>
</style>
