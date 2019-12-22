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
  },
  data() {
    return {
      Fields: [
        "STT",
        "Môn học",
        "Mã",
        "Số lượng học sinh",
        "Sửa/Xóa"
      ],
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
    deleteTerm,
    uploadFile
  },
  mounted
};

//methods
function deleteTerm(index) {
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
  console.log(this.TermSubStuList)
  let choosenTerm = this.TermSubStuList.filter(
    item => item._id == this.termSelect
  )[0];
  // console.log(choosenTerm, this.subjectSearch);
  // this.subjectSearch = choosenTerm.subject ? choosenTerm.subject : [];
  // let searchText = this.searchInput.toLowerCase();
  // this.subjectSearch = choosenTerm.subject.filter(item => {
  //   if (item.name.toLowerCase().includes(searchText)) return true;
  //   if (item.startTime.toLowerCase().includes(searchText)) return true;
  //   if (item.endTime.toLowerCase().includes(searchText)) return true;
  //   if (item.registSTime.toLowerCase().includes(searchText)) return true;
  //   if (item.registETime.toLowerCase().includes(searchText)) return true;
  //   return false;
  // });
}


function termSelectChange(){
  this.$emit('termSelectChange', this.termSelect)
}

function mounted() {
  this.TermSubStuSearch = this.TermSubStuList;
}
//support function
</script>

<style>
</style>
