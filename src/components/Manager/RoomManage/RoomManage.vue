<template src='./RoomManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddRoomModal from "./AddRoom/AddRoom.vue";
import TableRoom from "./TableRoom/Table";
import { getAllRoom } from '../../../api/room';
import { handleError } from '../../../helper/function';

let accessToken;

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
    reloadTable: created
  },
  created
};

//methods
function addRoom(data){
  this.RoomList.push(data)
}
//cycleHook
function created() {
  getAllRoom(this.$cookies.get('accessToken'))
    .then(result=>{
    this.RoomList = result.data
  })
  .catch(handleError)
}
</script>

<style scoped>
</style>
