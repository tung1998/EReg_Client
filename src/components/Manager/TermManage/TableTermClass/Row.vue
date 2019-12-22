<template src='./Row.html'></template>

<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { deleteOneTermSubStu } from "../../../../api/termSubStu";
export default {
  name: "TableSubjectManage",
  props: {
    TermSubject: {
      type: Object,
      default: {}
    },
    TermList: Array,
    SubjectList: Array,
    index: Number
  },
  data() {
    return {
      onEditing: false,
      rowData: { ...this.TermSubject }
    };
  },
  methods: {
    rowClick,
    rowSaveClick,
    rowCancelClick,
    rowEditClick,
    rowRemoveClick
  },
  computed: {
    termName,
    subjectCode,
    numberStudent
  },
  mounted() {
    console.log(this)
  },
};
//methods
function rowClick() {}
function rowSaveClick() {
  updateTermSubject(this.TermSubject._id, this.rowData, this.$cookies.get("accessToken"))
    .then(result => {
      this.TermSubject = this.rowData;
      this.onEditing = !this.onEditing;
      alertNotifyDefaul(_SUCCESS.updateSuccess);
    })
    .catch(handleError);
}
function rowCancelClick() {
  this.rowData = { ...this.TermSubject };
  this.onEditing = !this.onEditing;
}
function rowEditClick() {
  this.onEditing = !this.onEditing;
}
function rowRemoveClick() {
  deleteOneTermSubStu(this.TermSubject._id, this.$cookies.get("accessToken"))
    .then(result => {
      this.$emit("deleteSubject");
      alertNotifyDefaul(_SUCCESS.deleteSuccess);
    })
    .catch(handleError);
}

//computed
function termName(){
  return this.TermList.filter(item=>item._id==this.TermSubject.termID)[0].name
}

function subjectCode(){
  return this.SubjectList.filter(item=>item._id==this.TermSubject.subjectID)[0].subjectCode
}

function numberStudent(){
  if(!this.TermSubject.studentList) return 0
  return this.TermSubject.studentList.length
}
//suportfunction
</script>

<style>
</style>