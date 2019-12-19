<template src="./Table.html"></template>

<script>
import TableRow from "./Row.vue";

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
      Fields: ["STT", "Phòng", "Địa chỉ", "Số máy tính", "Sửa/Xóa"],
    };
  },
  methods:{
    deleteRoom
  }
};

//methods
function deleteRoom(index) {
  this.RoomList.splice(index, 1);
}
//support function
</script>

<style>
</style>