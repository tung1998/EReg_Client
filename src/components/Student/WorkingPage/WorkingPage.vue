
<template src='./WorkingPage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import {deleteAccessToken} from "../../../api/user";
import { handleError } from '../../../helper/function';
import { getCurrentInfo } from "../../../api/student";

export default {
  name: "WorkingPage",
  data() {
    return {
      username: "",
      name:""
    };
  },
  methods: {
    logout
  }
};

function logout() {
  deleteAccessToken(this.$cookies.get('accessToken')).then(result=>{
    this.$cookies.remove("accessToken");
    this.$router.push({name:'login'})
  }).catch(handleError)
}
function created() {
  let accessToken = this.$cookies.get("accessToken");
  getCurrentInfo(accessToken)
    .then(result => {
      console.log(result)
      this.name = result.data;
      console.log(this.name);
    })
    .catch(handleError);
}

</script>

<style scoped>
</style>
