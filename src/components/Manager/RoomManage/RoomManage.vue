<template src='./RoomManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddRoomModal from "./AddRoom/AddRoom.vue";

export default {
  name: "RoomManage",
  components: { AddRoomModal },
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style scoped>
</style>
