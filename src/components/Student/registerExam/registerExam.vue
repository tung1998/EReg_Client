<template src='./registerExam.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { getAvaiableShift } from "../../../api/shift";
import { getAllRoom } from "../../../api/room";
import { getAllTermSubStu } from "../../../api/termSubStu";
import { getCurrentInfo } from "../../../api/student";
import { handleError } from "../../../helper/function";
export default {
  name: "registerExam",
  data() {
    return {
      subjectShiftList: [],
      TermSubStuList: [],
      RoomList: [],
      StudentID: ""
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
    console.log(result);
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
        this.RoomList
      );
    })
    .catch(handleError);
}

function transData(shift, TermSubStuList, RoomList) {
  let subject = [];
  shift.forEach(item => {
    if (
      subject
        .map(item => {
          item.subjectID;
        })
        .includes(item.subjectID)
    ) {
      console.log(shift.studentID);
      if (shift.studentID.includes)
        subject
          .filter(item => item.subjectID == item.subjectID)[0]
          .shiftInfor.push({
            shifID: item._id,
            shiftTime: `Ngày ${item.time} ca ${item.shiftExam}`,
            roomID: item.roomID
          });
    } else {
      console.log(item.studentID);
      subject.push({
        subjectID: item.subjectID,
        subjectName: TermSubStuList.filter(
          item => item.subjectID == item.subjectID
        )[0].subjectName,
        shiftInfor: [
          {
            shifID: item._id,
            shiftTime: `Ngày ${item.time} ca ${item.shiftExam}`,
            roomID: item.roomID,
            room: RoomList.filter(room => room._id == item.roomID).map(
              item => `${item.name}-${item.address}`
            )[0]
          }
        ]
      });
    }
  });
  return subject;
}

function timeChange() {
  console.log(this.subjectShiftList);
}
</script>

<style scoped>
</style>
