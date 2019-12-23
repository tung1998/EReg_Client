<template src='./registerExam.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { getAvaiableShift, registerShift } from "../../../api/shift";
import { getAllRoom } from "../../../api/room";
import { getAllTermSubStu } from "../../../api/termSubStu";
import { getCurrentInfo } from "../../../api/student";
import { handleError, alertNotifyDefaul } from "../../../helper/function";
import { _SUCCESS } from "../../../helper/variable";
export default {
  name: "registerExam",
  data() {
    return {
      subjectShiftList: [],
      TermSubStuList: [],
      RoomList: [],
      StudentID: "",
      isDisabled: false
    };
  },
  methods: {
    timeChange
  },
  created
};

function created() {
  let accessToken = this.$cookies.get("accessToken");
  getCurrentInfo(accessToken).then(result => {
    this.StudentID = result.data._id;
  });
  getAllTermSubStu(accessToken)
    .then(result => {
      this.TermSubStuList = result.data;
      return getAllRoom(accessToken);
    })
    .then(result => {
      this.RoomList = result.data;
      return getAvaiableShift(accessToken);
    })
    .then(result => {
      this.subjectShiftList = transData(
        result.data,
        this.TermSubStuList,
        this.RoomList,
        this.StudentID
      );
      console.log(this.subjectShiftList);
    })
    .catch(handleError);
}

function transData(shifts, TermSubStuList, RoomList, StudentID) {
  let subjectID = [];
  let subjectList = [];
  shifts.forEach(shift => {
    if (subjectID.includes(shift.subjectID)) {
      let subject = subjectList.filter(
        item => item.subjectID == shift.subjectID
      )[0];
      if (shift.studentID && shift.studentID.includes(StudentID))
        subject.choosenShift == shift._id;
      subject.shiftInfor.push({
        shifID: shift._id,
        shiftTime: `Ngày ${shift.time} ca ${shift.shiftExam}`,
        roomID: shift.roomID,
        room: RoomList.filter(room => room._id == shift.roomID).map(
          room => `${room.name}-${room.address}`
        )[0]
      });
    } else {
      subjectID.push(shift.subjectID);
      if (shift.studentID && shift.studentID.includes(StudentID))
        subjectList.push({
          subjectID: shift.subjectID,
          subjectName: TermSubStuList.filter(
            termSubStu => termSubStu._id == shift.subjectID
          )[0].subjectName,
          choosenShift: shift._id,
          shiftInfor: [
            {
              shifID: shift._id,
              shiftTime: `Ngày ${shift.time} ca ${shift.shiftExam}`,
              roomID: shift.roomID,
              room: RoomList.filter(room => room._id == shift.roomID).map(
                room => `${room.name}-${room.address}`
              )[0]
            }
          ]
        });
      else
        subjectList.push({
          subjectID: shift.subjectID,
          subjectName: TermSubStuList.filter(
            termSubStu => termSubStu._id == shift.subjectID
          )[0].subjectName,
          shiftInfor: [
            {
              shifID: shift._id,
              shiftTime: `Ngày ${shift.time} ca ${shift.shiftExam}`,
              roomID: shift.roomID,
              room: RoomList.filter(room => room._id == shift.roomID).map(
                room => `${room.name}-${room.address}`
              )[0]
            }
          ]
        });
    }
  });
  return subjectList;
}

function timeChange(ev) {
  let shiftID = $(ev.target).val();
  this.isDisabled = true;
  registerShift(shiftID, this.$cookies.get("accessToken"))
    .then(result => {
      alertNotifyDefaul(_SUCCESS.updateSuccess);
      this.isDisabled = false;
    })
    .catch(handleError);
}
</script>

<style scoped>
</style>
