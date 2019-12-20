<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";

export default {
  name: "ModuleManagerTable",
  components: {
    TableRow
  },
  props: {
    TermSubStuList: Array
  },
  data() {
    return {
      Fields: ["STT", "Học kì", "Mã môn học", "Môn học", "Sinh viên", "Sửa/Xóa"],
    };
  },
  methods:{
    deleteTermSubStu
  }
};

//methods
function deleteTermSubStu(index) {
  this.TermSubStuList.splice(index, 1);
}
//support function
</script>

<style>
</style>