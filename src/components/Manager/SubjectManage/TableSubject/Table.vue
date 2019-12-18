<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";

export default {
  name: "ModuleManagerTable",
  components: {
    TableRow
  },
  props: {
    SubjectList: Array
  },
  data() {
    return {
      Fields: ["STT", "Môn thi", "Mã môn", ""],
    };
  },
  methods:{
    deleteSubject
  }
};

//methods
function deleteSubject(index) {
  this.SubjectList.splice(index, 1);
}
//support function
</script>

<style>
</style>