<template src='./StudentManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddStudentModal from "./AddStudent/AddStudent.vue";
import TableStudent from "./TableStudent/Table";
import { getAllStudent } from "../../../api/student";
import { handleError } from "../../../helper/function";

let accessToken;

export default {
  name: "StudentManage",
  components: { AddStudentModal, TableStudent },
  data() {
    return {
      StudentList: [],
      onEditing: false
    };
  },
  methods: {
    addStudent,
    reloadTable: created
  },
  created
};

//methods
function addStudent(data) {
  this.StudentList.push(data);
}
//cycleHook
function created() {
  getAllStudent(this.$cookies.get("accessToken"))
    .then(result => {
      this.StudentList = result.data;
    })
    .catch(handleError);
}
</script>

<style scoped>
</style>
