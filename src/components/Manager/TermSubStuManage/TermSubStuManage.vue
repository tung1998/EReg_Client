<template src='./TermSubStuManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { getAllTerm } from "../../../api/term";
import { getAllTermSubStu, importFile } from "../../../api/termSubStu";
import { handleError, alertNotifyDefaul } from "../../../helper/function";

import { _SUCCESS } from "../../../helper/variable";

export default {
  name: "TermSubStuManage",
  data() {
    return {
      TermList: [],
      TermSubStuListAll: [],
      TermSubStuList: [],
      termSelect: "",
      subjectSelect: "",
      StudentList: []
    };
  },
  watch: {
    termSelect: termSelectChange,
    subjectSelect: subjectSelectChange
  },
  methods: {
    uploadFile,
  },
  created
};

//hook
function created() {
  let accessToken = this.$cookies.get("accessToken");
  getAllTerm(accessToken)
    .then(result => {
      this.TermList = result.data;
    })
    .catch(handleError);
  getAllTermSubStu(accessToken)
    .then(result => {
      // console.log(result)
      this.TermSubStuListAll = result.data;
    })
    .catch(handleError);
}

//watch
function termSelectChange() {
  this.TermSubStuList = this.TermSubStuListAll.filter(
    item => item.termID == this.termSelect
  );
}

function subjectSelectChange() {
  if (this.subjectSelect.studentList && this.subjectSelect.studentList.length)
    this.StudentList = this.subjectSelect.studentList;
  else this.StudentList = [];
}

function uploadFile() {
  this.$refs.importExcelBtn.setAttribute("disabled", "disabled");
  let formData = new FormData();
  let inputFile = this.$refs.fileInput.files[0];
  formData.append("inputFile", inputFile);
  importFile(this.subjectSelect._id,formData, this.$cookies.get("accessToken"))
    .then(result => {
      console.log(result)
      this.StudentList = result.data.studentList
      alertNotifyDefaul(_SUCCESS.createSuccess);
      this.$refs.fileInput.type = "text";
      this.$refs.fileInput.type = "file";
      this.$refs.importExcelBtn.removeAttribute("disabled");
      // this.$emit("reloadTable");
    })
    .catch(handleError);
}
</script>

<style scoped>
</style>
