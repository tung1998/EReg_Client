<template src='./WorkingPage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import {deleteAccessToken} from "../../../api/user";
import { handleError } from '../../../helper/function';

export default {
  name: "WorkingPage",
  data() {
    return {
      username: ""
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
</script>

<style scoped>

</style>
