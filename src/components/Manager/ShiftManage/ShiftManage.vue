<template src='./ShiftManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddShiftModal from "./AddShift/AddShift.vue";
import TableShift from "./TableShift/Table";
import { getAllShift } from '../../../api/shift';
import { handleError } from '../../../helper/function';

let accessToken 

export default {
  name: "ShiftManage",
  components: { AddShiftModal, TableShift },
  data() {
    return {
      ShiftList: [],
      onEditing: false
    };
  },
  methods: {
    addShift,
  },
  created
};

//methods
function addShift(data){
  this.ShiftList.push(data)
}
//cycleHook
function created() {
  getAllShift(this.$cookies.get('accessToken')).then(result=>{
    this.ShiftList = result.data
  }).catch(handleError)
}
</script>

<style scoped>
</style>
