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
        subjectID: "",
        name: ""
      }
    };
  },
  methods: {
    addNewSubject,
    resetInput
  }
};

function addNewSubject() {
  if (this.subject.subjectID && this.subject.name) {
    createSubject(
      {
        subjectID: this.subject.subjectID,
        name: this.subject.name
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addSubject", result.data);
        this.subject.subjectID = "";
        this.subject.name = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.subject.subjectID = "";
  this.subject.name = "";
}
</script>

<style scoped>
</style>
