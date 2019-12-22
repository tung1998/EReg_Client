<template src='./TermManage.html'></template>

<script>
import AddTermModal from "./AddTerm/AddTerm.vue";
import AddTermClassModal from "./AddTermClass/AddTermClass.vue";
import TableTerm from "./TableTerm/Table";
import TableTermClass from "./TableTermClass/Table";
import { getAllTerm } from "../../../api/term";
import { getAllSubject } from "../../../api/subject";
import { getAllTermSubStu } from "../../../api/termSubStu";
import { handleError } from "../../../helper/function";

let accessToken;

export default {
  name: "TermManage",
  components: { AddTermModal, AddTermClassModal, TableTerm, TableTermClass },
  data() {
    return {
      TermList: [],
      SubjectList: [],
      TermSubStuList:[],
      onEditing: false,
      currentTerm: ""
    };
  },
  methods: {
    addTerm,
    addTermClass,
    reloadTable: created,
    termSelectChange
  },
  created
};

//methods
function addTerm(data) {
  this.TermList.push(data);
}

//methods
function addTermClass(data) {
  this.TermSubStuList.push(data);
}
//cycleHook
function created() {
  let accessToken = this.$cookies.get("accessToken")
  getAllSubject(accessToken)
    .then(result => {
      this.SubjectList = result.data;
    })
    .catch(handleError);
  getAllTerm(accessToken)
    .then(result => {
      this.TermList = result.data;
    })
    .catch(handleError);
  getAllTermSubStu(accessToken)
    .then(result => {
      this.TermSubStuList = result.data;
    })
    .catch(handleError);
    
}

function termSelectChange(id){
  this.currentTerm = id
}
</script>

<style scoped>
</style>
