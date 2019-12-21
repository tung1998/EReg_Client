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
        "STT", "Phòng", "Địa chỉ", "Số máy tính", "Sửa/Xóa"
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
    deleteRoom,
    uploadFile
  },
  mounted
};

//methods
function deleteRoom(index) {
  this.RoomList.splice(index, 1);
}

function uploadFile() {
  this.$refs.addToTable.setAttribute("disabled", "disabled");
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
  this.RoomSearch = this.RoomList.filter(item => {
    if (item.name.toLowerCase().includes(searchText)) return true;
    if (item.address.toLowerCase().includes(searchText)) return true;
    if (item.computerQuantity.toLowerCase().includes(searchText)) return true;
  
    return false;
  });
}

//support function

//cyclehook
function mounted() {
  this.RoomSearch = this.RoomList;
}
</script>

<style>
</style>