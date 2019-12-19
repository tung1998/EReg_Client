<template src='./SubjectManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddSubjectModal from "./AddSubject/AddSubject.vue";
import TableSubject from "./TableSubject/Table";
import { getAllSubject } from '../../../api/subject';
import { handleError } from '../../../helper/function';

let accessToken;

export default {
  name: "SubjectManage",
  components: { AddSubjectModal, TableSubject },
  data() {
    return {
      SubjectList: [],
      onEditing: false
    };
  },
  methods: {
    addSubject,
  },
  created
};

//methods
function addSubject(data){
  this.SubjectList.push(data)
}
//cycleHook
function created() {
  getAllSubject(this.$cookies.get('accessToken'))
  .then(result=>{
    this.SubjectList = result.data
  }).catch(handleError)
}
</script>

<style scoped>
</style>
