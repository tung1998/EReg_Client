<template src='./AddShift.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createShift } from "../../../../api/shift";
export default {
  name: "AddShiftModal",
  props: {
    termSelect: Object,
    TermSubStuList: Array,
    RoomList: Array
  },
  data() {
    return {
      shift: {
        subjectID: "",
        shiftExam: "",
        roomID: "",
        time: "",
        studentID: ""
      }
    };
  },
  methods: {
    addNewShift,
    resetInput
  }
};

function addNewShift() {
  console.log(this.termSelect);
  if (
    this.shift.subjectID &&
    this.shift.shiftExam &&
    this.shift.roomID &&
    this.shift.time
  ) {
    createShift(
      {
        subjectID: this.shift.subjectID,
        shiftExam: this.shift.shiftExam,
        roomID: this.shift.roomID,
        time: this.shift.time,
        termID: this.termSelect._id
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addShift", result.data);
        this.shift.subjectID = "";
        this.shift.shiftExam = "";
        this.shift.roomID = "";
        this.shift.time = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.shift.subjectID = "";
  this.shift.shiftExam = "";
  this.shift.roomID = "";
  this.shift.time = "";
}
</script>

<style scoped>
</style>
