<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneRoom, updateRoom } from "../../../../api/room";
export default {
  name: "TableRoomManage",
  props: {
    Room: {
      type: Object,
      default: {}
    },
    index: Number
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
  }
};
//methods
function rowClick() {}
function rowSaveClick() {
  updateRoom(this.Room._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.Room = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.Room };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneRoom(this.Room._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteRoom");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}
//suportfunction
</script>

<style>
</style>