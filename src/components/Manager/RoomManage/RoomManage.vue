<template src='./RoomManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddRoomModal from "./AddRoom/AddRoom.vue";
import TableRoom from "./TableRoom/Table";
export default {
  name: "RoomManage",
  components: { AddRoomModal, TableRoom },
  data() {
    return {
      RoomList: [],
      onEditing: false
    };
  },
  methods: {
    addRoom,
  },
  created
};

//methods
function addRoom(data){
  this.RoomList.push(data)
}
//cycleHook
function created() {
  console.log(1);
}
</script>

<style scoped>
</style>
