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
      Fields: ["STT", "Phòng", "Địa chỉ", "Số máy tính", ""],
      TableRow
    };
  },
  methods: {
    deleteModule
  }
};

//methods
function deleteModule(index) {
  this.Modules.splice(index, 1);
}
//support function
</script>

<style>
</style>