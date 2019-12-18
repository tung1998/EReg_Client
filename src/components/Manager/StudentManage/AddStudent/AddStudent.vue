<template src='./AddStudent.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createStudent } from "../../../../api/student";
export default {
  name: "AddStudenttModal",
  data() {
    return {
      student: {
        studentID: "",
        name: "",
        dateOfBirth: "",
        sex: "",
        major: "",
        classMajor: "",
        address: "",
        phone: "",
        email: ""
      }
    };
  },
  methods: {
    addNewStudent,
    resetInput
  }
};

function addNewStudent() {
  if (
    this.student.studentID &&
    this.student.name &&
    this.student.dateOfBirth &&
    this.student.sex &&
    this.student.major &&
    this.student.classMajor
  ) {
    createStudent(
      {
        studentID: this.student.studentID,
        name: this.student.name,
        dateOfBirth: this.student.dateOfBirth,
        sex: this.student.sex,
        major: this.student.major,
        classMajor: this.student.classMajor,
        address: this.student.address,
        phone: this.student.phone,
        email: this.student.email
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addStudent", result.data);
        this.student.studentID = "";
        this.student.name = "";
        this.student.dateOfBirth = "";
        this.student.address = "";
        this.student.sex = "";
        this.student.major = "";
        this.student.classMajor = "";
        this.student.address = "";
        this.student.phone = "";
        this.student.email = "";
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.student.studentID = "";
  this.student.name = "";
  this.student.dateOfBirth = "";
  this.student.address = "";
  this.student.sex = "";
  this.student.major = "";
  this.student.classMajor = "";
  this.student.address = "";
  this.student.phone = "";
  this.student.email = "";
}
</script>

<style scoped>
</style>
