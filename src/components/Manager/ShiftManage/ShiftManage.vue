<template src='./ShiftManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddShiftModal from "./AddShift/AddShift.vue";
import TableShift from "./TableShift/Table";
import { getAllShift } from "../../../api/shift";
import { handleError } from "../../../helper/function";

import { getAllTerm } from "../../../api/term";
import { getAllTermSubStu } from "../../../api/termSubStu";
import { getAllRoom } from "../../../api/room";

let accessToken;

export default {
  name: "ShiftManage",
  components: { AddShiftModal, TableShift },
  data() {
    return {
      ShiftListAll: [],
      ShiftList: [],
      TermList: [],
      TermSubStuListAll: [],
      TermSubStuList: [],
      RoomList: [],
      onEditing: false,
      termSelect: ""
    };
  },
  methods: {
    addShift
  },
  watch: {
    termSelect: termSelectChange
  },
  created
};

//methods
function addShift(data) {
  this.ShiftList.push(data);
}
//cycleHook
function created() {
  let accessToken = this.$cookies.get("accessToken");
  getAllShift(accessToken)
    .then(result => {
      this.ShiftListAll = result.data;
    })
    .catch(handleError);
  getAllTerm(accessToken)
    .then(result => {
      this.TermList = result.data;
    })
    .catch(handleError);
  getAllTermSubStu(accessToken)
    .then(result => {
      this.TermSubStuListAll = result.data;
    })
    .catch(handleError);
  getAllRoom(accessToken)
    .then(result => {
      this.RoomList = result.data;
    })
    .catch(handleError);
}

function termSelectChange(){
  this.TermSubStuList = this.TermSubStuListAll.filter(item=>item.termID == this.termSelect._id)
  this.ShiftList = this.ShiftListAll.filter(shift=>this.TermSubStuList.map(item=>item._id).includes(shift.subjectID))
}
</script>

<style scoped>
</style>
