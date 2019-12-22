<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneShift, updateShift } from "../../../../api/shift";
export default {
  name: "TableShiftManage",
  props: {
    Shift: {
      type: Object,
      default: {}
    },

    index: Number,
    termSelect: Object,
    TermSubStuList: Array,
    RoomList: Array
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.Shift }
    };
  },
  computed: {
    room,
    subject
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
  updateShift(this.Shift._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.Shift = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.Shift };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneShift(this.Shift._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteShift");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}
//suportfunction

//computed
function room(){
  return this.RoomList.filter(item=>item._id==this.Shift.roomID).map(item=>`${item.name} - ${item.computerQuantity} chỗ ngồi`)[0]
}

function subject(){
  return this.TermSubStuList.filter(item=>item._id==this.Shift.subjectID)[0].subjectName
}
</script>

<style>
</style>