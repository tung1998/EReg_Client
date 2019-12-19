<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";

export default {
  name: "ModuleManagerTable",
  components: {
    TableRow
  },
  props: {
    TermList: Array
  },
  data() {
    return {
      Fields: ["STT", "Học kì", "Thời gian bắt đầu", "Thời gian kết thúc", "Môn học", "Ngày bắt đầu đăng kí","Ngày kết thúc đăng kí", "Sửa/Xóa"],
    };
  },
  methods:{
    deleteTerm
  }
};

//methods
function deleteTerm(index) {
  this.TermList.splice(index, 1);
}
//support function
</script>

<style>
</style>