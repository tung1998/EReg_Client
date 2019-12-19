<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";

export default {
  name: "ModuleManagerTable",
  components: {
    TableRow
  },
  props: {
    ShiftList: Array
  },
  data() {
    return {
      Fields: ["STT", "Môn thi", "Phòng thi", "Thời gian", "Học kì", "Chọn"],
    };
  },
  methods:{
    deleteShift
  }
};

//methods
function deleteShift(index) {
  this.ShiftList.splice(index, 1);
}
//support function
</script>

<style>
</style>