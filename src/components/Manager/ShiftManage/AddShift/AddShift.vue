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
  if (this.shift.subjectID && this.shift.roomID && this.shift.time && this.shift.studentID && this.shift.term) {
    createShift(
      {
        studentID: this.shift.studentID,
        roomID: this.shift.roomID,
        time: this.shift.time,
        studentID: this.shift.studentID,
        term: this.shift.term
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addShift", result.data);
        this.shift.studentID = "";
        this.shift.roomID = "";
        this.shift.time = "";
        this.shift.studentID = "" ;
        this.shift.term = "" ;
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.shift.studentID = "";
  this.shift.roomID = "";
  this.shift.time = "";
  this.shift.studentID = "" ;
  this.shift.term = "" ;
}
</script>

<style scoped>
</style>
