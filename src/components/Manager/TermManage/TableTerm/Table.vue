<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";
import { handleError, alertNotifyDefaul } from "../../../../helper/function";
import { _SUCCESS } from "../../../../helper/variable";

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
      searchInput: "",
      TermSearch: []
    };
  },
 watch: {
    searchInput: updateTableData,
    TermList: updateTableData
  },
  methods:{
    deleteTerm,
    uploadFile
  },
  mounted
};

//methods
function deleteTerm(index) {
  this.TermList.splice(index, 1);
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
  this.TermSearch = this.TermList.filter(item => {
    if (item.name.toLowerCase().includes(searchText)) return true;
    if (item.startTime.toLowerCase().includes(searchText)) return true;
    if (item.endTime.toLowerCase().includes(searchText)) return true;
    if (item.subject.toLowerCase().includes(searchText)) return true;
    if (item.registSTime.toLowerCase().includes(searchText)) return true;
    if (item.registETime.toLowerCase().includes(searchText)) return true;
    return false;
  });
}

function mounted() {
  this.TermSearch = this.TermList;
}
//support function
</script>

<style>
</style>


<!---
    if (item.name.toLowerCase().includes(searchText)) return true;
    if (item.startTime.toLowerCase().includes(searchText)) return true;
    if (item.endTime.toLowerCase().includes(searchText)) return true;
    if (item.subject.toLowerCase().includes(searchText)) return true;
    if (item.registSTime.toLowerCase().includes(searchText)) return true;
    if (item.registETime.toLowerCase().includes(searchText)) return true;
---->