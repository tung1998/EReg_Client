<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
export default {
  name: "TableRoomManage",
  props: {
    Room: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.Room }
    };
  },
  methods: {
    rowClick,
    rowSaveClick,
    rowCancelClick,
    rowEditClick,
    rowRemoveClick
  },
  computed: {
    getModuleName,
    getModuleType
  }
};
//computed
function getModuleName() {
  return this.Modules.filter(item => item.value == this.rowData.component)[0]
    .name;
}
function getModuleType() {
  if (this.Module.type == 0) return "Module đơn";
  else if (this.Module.type == 1) return "Module cha";
  else return "Module con";
}
//methods
function rowClick() {}
function rowSaveClick() {
  meteorCallDefaul("module.update", {
    _id: this.Module._id,
    data: this.rowData
  })
    .then(result => {
      this.Module = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(error => {
      alertNotifyDefaul(_ERRORS.somethingWrong);
    });
}
function rowCancelClick() {
  this.rowData = { ...this.Module };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  meteorCallDefaul("module.delete", this.Module._id)
    .then(result => {
      this.$emit("deleteModule");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(error => {
      alertNotifyDefaul(_ERRORS.somethingWrong);
    });
}
//suportfunction
</script>

<style>
</style>