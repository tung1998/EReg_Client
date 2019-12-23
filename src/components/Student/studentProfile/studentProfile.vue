<template src='./studentProfile.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { handleError } from "../../../helper/function";
import { getCurrentInfo } from "../../../api/student";
export default {
  name: "studentProfile",
  data() {
    return {         
        name:"",
        MSSV:"",
        major:""
    };
  },
  created
};


function created() {
  let accessToken = this.$cookies.get("accessToken");
  console.log(accessToken)
  getCurrentInfo(accessToken)
    .then(result => {
      console.log(result)
      this.name = result.data;
      this.MSSV = result.data;
      this.major = result.data;
      console.log(this.name);
    })
    .catch(handleError);
}


</script>

<style scoped>
</style>
