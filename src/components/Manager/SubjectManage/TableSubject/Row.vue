<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneSubject, updateSubject } from "../../../../api/subject";
export default {
  name: "TableSubjectManage",
  props: {
    Subject: {
      type: Object,
      default: {}
    },
    index: Number
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.Subject }
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
  updateSubject(this.Subject._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.Subject = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.Subject };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneSubject(this.Subject._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteSubject");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}
//suportfunction
</script>

<style>
</style>