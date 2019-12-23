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
    TermSubStuList: Array,
    TermList: Array,
    SubjectList: Array
  },
  data() {
    return {
      Fields: ["STT", "Môn học", "Mã", "Số lượng sinh viên", "Sửa/Xóa"],
      searchInput: "",
      TermSubStuSearch: [],
      termSelect: ""
    };
  },
  watch: {
    searchInput: updateTableData,
    TermSubStuList: updateTableData,
    termSelect: termSelectChange
  },
  methods: {
    deleteSubject,
    uploadFile
  },
  mounted
};

//methods
function deleteSubject(index) {
  this.TermSubStuList.splice(index, 1);
}

function uploadFile() {
  this.$refs.addToTable.setAttribute("disabled", "disabled");
  this.$refs.importExcelBtn.setAttribute("disabled", "disabled");
  let formData = new FormData();
  let inputFile = this.$refs.fileInput.files[0];
  formData.append("inputFile", inputFile);
  importFile(formData, this.$cookies.get("accessToken"))
    .then(result => {
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
  let termSelect = this.termSelect;
  let searchText = this.searchInput.toLowerCase();
  this.TermSubStuSearch = this.TermSubStuList.filter(
    item => item.termID == termSelect
  ).filter(item => {
    if (item.subjectName.toLowerCase().includes(searchText)) return true;
    return false;
  });
}

function termSelectChange() {
  this.$emit("termSelectChange", this.termSelect);
  let termSelect = this.termSelect;
  let searchText = this.searchInput.toLowerCase();
  this.TermSubStuSearch = this.TermSubStuList.filter(
    item => item.termID == termSelect
  ).filter(item => {
    if (item.subjectName.toLowerCase().includes(searchText)) return true;
    return false;
  });
}

function mounted() {
  this.TermSubStuSearch = this.TermSubStuList;
  let termSelect = this.termSelect;
  let searchText = this.searchInput.toLowerCase();
  this.TermSubStuSearch = this.TermSubStuList.filter(
    item => item.termID == termSelect
  ).filter(item => {
    if (item.subjectName.toLowerCase().includes(searchText)) return true;
    return false;
  });
}
//support function
</script>

<style>
</style>
