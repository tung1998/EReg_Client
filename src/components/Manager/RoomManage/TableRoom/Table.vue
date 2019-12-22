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
   RoomList: Array
  },
  data() {
    return {
      Fields: [
        "STT", 
        "Phòng", 
        "Địa chỉ", 
        "Số máy tính", 
        "Sửa/Xóa"
      ],
      searchInput: "",
     RoomSearch: []
    };
  },
  watch: {
    searchInput: updateTableData,
   RoomList: updateTableData
  },
  methods: {
    deleteRoom
  },
  mounted
};

//methods
function deleteRoom(index) {
  this.RoomList.splice(index, 1);
}

// computed
function updateTableData() {
  let searchText = this.searchInput.toLowerCase();
  
  this.RoomSearch = this.RoomList.filter(item => {
    if (item.name.toLowerCase().includes(searchText)) return true;
    if (item.address.toLowerCase().includes(searchText)) return true;
    return false;
  });
}

function mounted() {
  this.RoomSearch = this.RoomList;
}
//support function
</script>

<style>
</style>
