<template src='./TermSubStuManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddTermSubStuModal from "./AddTermSubStu/AddTermSubStu.vue";
import TableTermSubStu from "./TableTermSubStu/Table";
import { getAllTermSubStu } from '../../../api/termSubStu';
import { handleError } from '../../../helper/function';

let accessToken 

export default {
  name: "TermSubStuManage",
  components: { AddTermSubStuModal, TableTermSubStu },
  data() {
    return {
      TermSubStuList: [],
      onEditing: false
    };
  },
  methods: {
    addTermSubStu,
  },
  created
};

//methods
function addTermSubStu(data){
  this.TermSubStuList.push(data)
}
//cycleHook
function created() {
  getAllTermSubStu(this.$cookies.get('accessToken')).then(result=>{
    this.TermSubStuList = result.data
  }).catch(handleError)
}
</script>

<style scoped>
</style>
