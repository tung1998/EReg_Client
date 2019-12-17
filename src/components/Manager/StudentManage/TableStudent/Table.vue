<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";

export default {
  name: "ModuleManagerTable",
  components: {
    TableRow
  },
  props: {
    StudentList: Array
  },
  data() {
    return {
      Fields: ["STT", "MSSV", "Họ tên", "Ngày sinh", "Giới tính", "Khoa", "Lớp khóa học", ""],
    };
  },
  methods:{
    deleteStudent
  }
};

//methods
function deleteStudent(index) {
  this.StudentList.splice(index, 1);
}
//support function
</script>

<style>
</style>