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
      Fields: [
        "STT",
        "Học kì",
        "Thời gian bắt đầu",
        "Thời gian kết thúc",
        "Ngày bắt đầu đăng kí",
        "Ngày kết thúc đăng kí",
        "Sửa/Xóa"
      ],
      searchInput: "",
      TermSearch: []
    };
  },
  watch: {
    searchInput: updateTableData,
    TermList: updateTableData
  },
  methods: {
    deleteTerm
  },
  mounted
};

//methods
function deleteTerm(index) {
  this.TermList.splice(index, 1);
}

// computed
function updateTableData() {
  let searchText = this.searchInput.toLowerCase();
  this.TermSearch = this.TermList.filter(item => {
    if (item.name.toLowerCase().includes(searchText)) return true;
    if (item.startTime.toLowerCase().includes(searchText)) return true;
    if (item.endTime.toLowerCase().includes(searchText)) return true;
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