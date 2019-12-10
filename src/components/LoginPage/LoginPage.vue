<template src='./LoginPage.html'>
  
</template>

<!--<script src="./Login.js"></script>-->
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginClick: loginBtnClick
  }
};

function loginBtnClick() {
  console.log(1);
}
</script>

<style scoped>
</style>
