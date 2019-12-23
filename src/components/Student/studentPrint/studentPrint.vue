<template src='./studentPrint.html'></template>

<script>
import { printElem, exportFile, handleError } from "../../../helper/function";
import { getAllTerm } from "../../../api/term";
import { getRegisterShiftByTerm } from "../../../api/shift";
import { getAllRoom } from "../../../api/room";
import { getAllTermSubStu } from "../../../api/termSubStu";
import { getCurrentInfo } from "../../../api/student";

export default {
  name: "studentPrint",
  data() {
    return {
      TermList: [],
      shiftDataList: [],
      RoomList: [],
      TermSubStuList: [],
      termSelect: "",
      studentSelect: ""
    };
  },
  methods: {
    exportFileButtonClick,
    printFileButtonClick
  },
  watch: {
    termSelect: termSelectChange
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
      this.TermSubStuList = result.data;
      console.log(result.data);
    })
    .catch(handleError);
  getCurrentInfo(accessToken)
    .then(result => {
      console.log(result)
      this.studentSelect = result.data;
      console.log(this.name);
    })
    .catch(handleError);
}

function termSelectChange() {
  getRegisterShiftByTerm(
    this.termSelect._id,
    this.$cookies.get("accessToken")
  ).then(result => {
    console.log(result);
    this.shiftDataList = result.data.map(item => {
      item.room = this.RoomList.filter(room => room._id == item.roomID).map(
        room => `${room.name}-${room.address}`
      )[0];
      item.subject = this.TermSubStuList.filter(
        subject => subject._id == item.subjectID
      )[0].subjectName;
      // item.subjectCode = this.TermSubStuList.filter(
      //   subject => subject._id == item.subjectID
      // )[0].subjectCode;
      return item;
    });
  });
}
</script>

<style scoped>
</style>
