<template src='./AddShift.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createShift } from "../../../../api/shift";
export default {
  name: "AddShifttModal",
  data() {
    return {
      shift: {
        subjectID: "",
        roomID: "",
        exam: "",
        time: "",
        studentID: "",
        term: ""
      }
    };
  },
  methods: {
    addNewShift,
    resetInput
  }
};

function addNewShift() {
  console.log({
        subjectID: this.shift.subjectID,
        roomID: this.shift.roomID,
        exam: this.shift.exam,
        time: this.shift.time,
        term: this.shift.term
      })
  if (this.shift.subjectID && this.shift.roomID && this.shift.time  && this.shift.term) {
    createShift(
      {
        subjectID: this.shift.subjectID,
        roomID: this.shift.roomID,
        exam: this.shift.exam,
        time: this.shift.time,
        term: this.shift.term
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addShift", result.data);
        this.shift.subjectID = "";
        this.shift.roomID = "";
        this.shift.exam = "";
        this.shift.time = "";
        this.shift.term = "" ;
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.shift.subjectID = "";
  this.shift.roomID = "";
  this.shift.exam = "";
  this.shift.time = "";
  this.shift.term = "" ;
}
</script>

<style scoped>
</style>
