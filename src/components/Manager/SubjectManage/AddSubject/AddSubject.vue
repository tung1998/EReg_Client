<template src='./AddSubject.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createSubject } from "../../../../api/subject";
export default {
  name: "AddSubjectModal",
  data() {
    return {
      subject: {
        name: "",
        address: "",
        computerQuantity: ""
      }
    };
  },
  methods: {
    addNewSubject,
    resetInput
  }
};

function addNewSubject() {
  if (this.subject.name && this.subject.address && this.subject.computerQuantity) {
    createSubject(
      {
        name: this.subject.name,
        address: this.subject.address,
        computerQuantity: Number(this.subject.computerQuantity)
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("AddSubject", result.data);
        this.subject.name = "";
        this.subject.address = "";
        this.subject.computerQuantity = 0;
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.subject.name = "";
  this.subject.address = "";
  this.subject.computerQuantity = 0;
}
</script>

<style scoped>
</style>
