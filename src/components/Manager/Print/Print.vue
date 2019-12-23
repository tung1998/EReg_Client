<template src='./Print.html'></template>

<script>
import { printElem, exportFile, handleError } from "../../../helper/function";
import { getAllTerm } from "../../../api/term";
import { getAllShift, getStudent } from "../../../api/shift";
import { getAllRoom } from "../../../api/room";
import { getAllTermSubStu } from "../../../api/termSubStu";

export default {
  name: "Print",
  data() {
    return {
      TermList: [],
      RoomList: [],
      TermSubStuListAll: [],
      TermSubStuList: [],
      StudentList: [],
      ShiftListAll: [],
      ShiftListFilter: [],
      termSelect: "",
      termSubStuSelect: "",
      shiftSelect: ""
    };
  },
  methods: {
    exportFileButtonClick,
    printFileButtonClick
  },
  watch: {
    termSelect: termSelectChange,
    termSubStuSelect: termSubStuSelectChange,
    shiftSelect: shiftSelectChange
  },
  created
};

///methodes
function exportFileButtonClick() {
  exportFile("print-area");
}
function printFileButtonClick() {
  printElem("print-area");
}

function created() {
  let accessToken = this.$cookies.get("accessToken");
  getAllTerm(accessToken)
    .then(result => {
      this.TermList = result.data;
    })
    .catch(handleError);
  getAllRoom(accessToken)
    .then(result => {
      this.RoomList = result.data;
    })
    .catch(handleError);
  getAllTermSubStu(accessToken)
    .then(result => {
      this.TermSubStuListAll = result.data;
    })
    .catch(handleError);
  getAllShift(accessToken)
    .then(result => {
      this.ShiftListAll = result.data;
    })
    .catch(handleError);
}

function termSelectChange() {
  this.TermSubStuList = this.TermSubStuListAll.filter(
    item => item.termID == this.termSelect
  );
}

function termSubStuSelectChange() {
  this.ShiftListFilter = this.ShiftListAll.filter(
    item => item.subjectID == this.termSubStuSelect
  ).map(item => {
    item.room = this.RoomList.filter(room => room._id == item.roomID).map(
      room => `${room.name}-${room.address}`
    )[0];
    return item;
  });
}

function shiftSelectChange() {
  getStudent(this.shiftSelect._id, this.$cookies.get("accessToken")).then(
    result => {
      this.StudentList = result.data;
    }
  );
}
</script>

<style scoped>
</style>
