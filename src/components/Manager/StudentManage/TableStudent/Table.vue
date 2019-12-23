<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";
import { importFile } from "../../../../api/student";
import { handleError, alertNotifyDefaul } from "../../../../helper/function";
import { _SUCCESS } from "../../../../helper/variable";

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
      Fields: [
        "STT",
        "MSSV",
        "Họ tên",
        "Ngày sinh",
        "Giới tính",
        "Lớp khóa học",
        "Khoa",
        "Sửa/Xóa"
      ],
      searchInput: "",
      StudentSearch: []
    };
  },
  watch: {
    searchInput: updateTableData,
    StudentList: updateTableData
  },
  methods: {
    deleteStudent,
    uploadFile
  },
  mounted
};

//methods
function deleteStudent(index) {
  this.StudentList.splice(index, 1);
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

// computed
function updateTableData() {
  let searchText = this.searchInput.toLowerCase()
  this.StudentSearch = this.StudentList.filter(item => {
    if (item.studentCode&&item.studentCode.toLowerCase().includes(searchText)) return true;
    if (item.name&&item.name.toLowerCase().includes(searchText)) return true;
    if (item.dateOfBirth&&item.dateOfBirth.toLowerCase().includes(searchText)) return true;
    if (item.sex&&item.sex.toLowerCase().includes(searchText)) return true;
    if (item.major&&item.major.toLowerCase().includes(searchText)) return true;
    if (item.classMajor&&item.classMajor.toLowerCase().includes(searchText)) return true;
    return false;
  });
}

//support function

//cyclehook
function mounted() {
  this.StudentSearch = this.StudentList;
}
</script>

<style>
</style>