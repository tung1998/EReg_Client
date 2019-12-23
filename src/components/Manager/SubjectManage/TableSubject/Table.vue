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
   SubjectList: Array
  },
  data() {
    return {
      Fields: [
        "STT", 
        "Mã môn học", 
        "Môn học", 
        "Sửa/Xóa"
      ],
      searchInput: "",
     SubjectSearch: []
    };
  },
  watch: {
    searchInput: updateTableData,
   SubjectList: updateTableData
  },
  methods: {
    deleteSubject
  },
  mounted
};

//methods
function deleteSubject(index) {
  this.SubjectList.splice(index, 1);
}

// computed
function updateTableData() {
  let searchText = this.searchInput.toLowerCase();
  this.SubjectSearch = this.SubjectList.filter(item => {
    if (item.subjectCode.toLowerCase().includes(searchText)) return true;
    if (item.name.toLowerCase().includes(searchText)) return true;
    return false;
  });
}

function mounted() {
  this.SubjectSearch = this.SubjectList;
}
//support function
</script>

<style>
</style>
