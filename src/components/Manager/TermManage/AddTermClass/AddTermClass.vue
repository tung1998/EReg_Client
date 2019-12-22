<template src='./AddTermClass.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createTermSubStu } from "../../../../api/termSubStu";

export default {
  name: "AddTermtModal",
  props: {
    SubjectList: Array,
    currentTerm: String
  },
  data() {
    return {
      subjectCode: "",
      subjectID: "",
      subjectName: ""
    };
  },
  methods: {
    addNewTermClass,
    resetInput
  },
  watch: {
    subjectID: subjectIDChange
  }
};

function addNewTermClass() {
  if (this.subjectID) {
    createTermSubStu(
      {
        termID: this.currentTerm,
        subjectID: this.subjectID,
        subjectName: this.subjectName
      },
      this.$cookies.get("accessToken")
    ).then(result => {
      this.$emit("addTermClass", result.data);
      this.subjectID = "";
    });
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.number = "";
  this.subjectID;
}

function subjectIDChange() {
  if (this.subjectID) {
    this.subjectCode = this.SubjectList.filter(
      item => item._id == this.subjectID
    )[0].subjectCode;

    this.subjectName = this.SubjectList.filter(
      item => item._id == this.subjectID
    )[0].name;
  } else {
    this.subjectCode = "";
    this.subjectName = "";
  }
}
</script>

<style scoped>
</style>
