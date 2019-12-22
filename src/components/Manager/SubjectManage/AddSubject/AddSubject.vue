<template src='./AddSubject.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createSubject } from "../../../../api/subject";
export default {
  name: "AddSubjecttModal",
  data() {
    return {
      subject: {
        subjectCode: "",
        name: "",
      }
    };
  },
  methods: {
    addNewSubject,
    resetInput
  }
};

function addNewSubject() {
  console.log(this.subject.subjectCode, this.subject.name)
  if (this.subject.subjectCode && this.subject.name) {
    createSubject(
      {
        subjectCode: this.subject.subjectCode,
        name: this.subject.name
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addSubject", result.data);
        this.subject.subjectCode = "";
        this.subject.name = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.subject.subjectCode = "";
  this.subject.name = "";
}
</script>

<style scoped>
</style>
