<template src='./AddShift.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createShift } from "../../../../api/shift";
export default {
  name: "AddShiftModal",
  data() {
    return {
      shift: {
        subject_id: "",
        shift_id: "",
        time: "",
        student_id: "",
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
  if (this.shift.subject_id && this.shift.shift_id && this.shift. time && this.shift.student_id && this.shift.term) {
    createShift(
      {
        subject_id: this.shift.subject_id,
        shift_id: this.shift.shift_id,
        time: this.shift.time,
        address: this.shift.student_id,
        term: this.shift.term
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addShift", result.data);
        this.shift.subject_id = "";
        this.shift.shift_id = "";
        this.shift.time = "";
        this.shift.student_id = "";
        this.shift.term = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.shift.subject_id = "";
  this.shift.shift_id = "";
  this.shift.time = "";
  this.shift.student_id = "";
  this.shift.term = "";
}
</script>

<style scoped>
</style>
