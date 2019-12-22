<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneTerm, updateTerm } from "../../../../api/term";
export default {
  name: "TableTermManage",
  props: {
    Term: {
      type: Object,
      default: {}
    },
    index: Number
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.Term }
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
  updateTerm(this.Term._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.Term = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.Term };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneTerm(this.Term._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteTerm");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}
//suportfunction
</script>

<style>
</style>