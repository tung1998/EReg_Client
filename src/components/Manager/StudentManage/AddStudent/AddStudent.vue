<template src='./AddRoom.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { alertNotifyDefaul, handleError } from "../../../../helper/function";
import { _ERRORS, _SUCCESS } from "../../../../helper/variable";
import { createRoom } from "../../../../api/room";
export default {
  name: "AddRoomtModal",
  data() {
    return {
      room: {
        name: "",
        address: "",
        computerQuantity: ""
      }
    };
  },
  methods: {
    addNewRoom,
    resetInput
  }
};

function addNewRoom() {
  if (this.room.name && this.room.address && this.room.computerQuantity) {
    createRoom(
      {
        name: this.room.name,
        address: this.room.address,
        computerQuantity: Number(this.room.computerQuantity)
      },
      this.$cookies.get("accessToken")
    )
      .then(result => {
        this.$emit("addRoom", result.data);
        this.room.name = "";
        this.room.address = "";
        this.room.computerQuantity = 0;
        alertNotifyDefaul(_SUCCESS.createSuccess);
      })
      .catch(handleError);
  } else alertNotifyDefaul(_ERRORS.formFillOut);
}

function resetInput() {
  this.room.name = "";
  this.room.address = "";
  this.room.computerQuantity = 0;
}
</script>

<style scoped>
</style>
