<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneTermSubStu, updateTermSubStu } from "../../../../api/termSubStu";
export default {
  name: "TableTermSubStuManage",
  props: {
    TermSubStu: {
      type: Object,
      default: {}
    },
    index: Number
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.TermSubStu }
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
  updateTermSubStu(this.TermSubStu._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.TermSubStu = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.TermSubStu };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneTermSubStu(this.TermSubStu._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteTermSubStu");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}
//suportfunction
</script>

<style>
</style>