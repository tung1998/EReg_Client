<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";
import { handleError, alertNotifyDefaul } from "../../../../helper/function";
import { _SUCCESS } from "../../../../helper/variable";

export default {
  name: "ModuleManagerTable",
  components: {
    TableRow
  },
  props: {
    ShiftList: Array,
    termSelect: Object,
    TermSubStuList: Array,
    RoomList: Array
  },
  data() {
    return {
      Fields: [
        "STT",
        "Môn thi",
        "Ca thi",
        "Phòng thi",
        "Thời gian",
        "Sửa/Xóa"
      ],
      searchInput: "",
      ShiftSearch: []
    };
  },
  watch: {
    searchInput: updateTableData,
    ShiftList: updateTableData
  },
  methods: {
    deleteShift
  },
  mounted
};

//methods
function deleteShift(index) {
  this.ShiftList.splice(index, 1);
}

// computed
function updateTableData() {
  let searchText = this.searchInput.toLowerCase();
  this.ShiftSearch = this.ShiftList.filter(item => {
    if (item.subjectID.toLowerCase().includes(searchText)) return true;
    if (item.shiftExam.toLowerCase().includes(searchText)) return true;
    if (item.roomID.toLowerCase().includes(searchText)) return true;
    if (item.time.toLowerCase().includes(searchText)) return true;
    if (item.term.toLowerCase().includes(searchText)) return true;

    return false;
  });
}

function mounted() {
  this.ShiftSearch = this.ShiftList;
}
//support function
</script>

<style>
</style>
