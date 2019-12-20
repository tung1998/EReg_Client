<template src='./TermManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddTermModal from "./AddTerm/AddTerm.vue";
import TableTerm from "./TableTerm/Table";
import { getAllTerm } from '../../../api/term';
import { handleError } from '../../../helper/function';

let accessToken 

export default {
  name: "TermManage",
  components: { AddTermModal, TableTerm },
  data() {
    return {
      TermList: [],
      onEditing: false
    };
  },
  methods: {
    addTerm,
    reloadTable: created
  },
  created
};

//methods
function addTerm(data){
  this.TermList.push(data)
}
//cycleHook
function created() {
  getAllTerm(this.$cookies.get('accessToken')).then(result=>{
    this.TermList = result.data
  }).catch(handleError)
}
</script>

<style scoped>
</style>
