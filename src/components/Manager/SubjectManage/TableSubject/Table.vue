<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";
import { importFile } from "../../../../api/subject";
import { handleError, alertNotifyDefaul } from "../../../../helper/function";
import { _SUCCESS } from "../../../../helper/variable"; 

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
      Fields: ["STT", "Môn Thi", "Mã Môn Thi", "Sửa/Xóa"],
    };
  },
  methods:{
    deleteSubject,
    uploadFile
  }
};

//methods
function deleteSubject(index) {
  this.SubjectList.splice(index, 1);
}

function uploadFile() {
  this.$refs.addToTable.setAttribute("disabled", "disabled");
  this.$refs.importExcelBtn.setAttribute("disabled", "disabled");
  let formData = new FormData();
  let inputFile = this.$refs.fileInput.files[0];
  formData.append("inputFile", inputFile);
  importFile(formData, this.$cookies.get("accessToken"))
    .then(result => {
      console.log(result);
      alertNotifyDefaul(_SUCCESS.createSuccess);
      this.$refs.fileInput.type = "text";
      this.$refs.fileInput.type = "file";
      this.$refs.addToTable.removeAttribute("disabled");
      this.$refs.importExcelBtn.removeAttribute("disabled");
      this.$emit("reloadTable");
    })
    .catch(handleError);
}
//support function
</script>

<style>
</style>