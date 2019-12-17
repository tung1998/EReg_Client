<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneStudent, updateStudent } from "../../../../api/student";
export default {
  name: "TableStudentManage",
  props: {
    Student: {
      type: Object,
      default: {}
    },
    index: Number
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.Student }
    };
  },
  methods: {
    rowClick,
    rowSaveClick,
    rowCancelClick,
    rowEditClick,
    rowRemoveClick
  }
};
//methods
function rowClick() {}
function rowSaveClick() {
  updateStudent(this.Student._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.Student = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.Student };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneStudent(this.Student._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteStudent");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}
//suportfunction
</script>

<style>
</style>