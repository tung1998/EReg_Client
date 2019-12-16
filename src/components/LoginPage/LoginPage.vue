<template src='./LoginPage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { checkUserPassword } from "../../api/user";
import { alertNotifyDefaul } from "../../helper/function";
import { _ERRORS, _SUCCESS } from "../../helper/variable";

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
  let { username, password } = this;
  checkUserPassword({ username, password })
    .then(result => {
      if (result.data.status) {
        this.$cookies.set("accessToken", result.accessToken);
        alertNotifyDefaul(_SUCCESS.loginSuccess);
      } else {
        alertNotifyDefaul(_ERRORS.wrongUsernameOrPassword);
        console.log(result.data.message);
      }
    })
    .catch(error => {
      alertNotifyDefaul(_ERRORS.somethingWrong);
      console.log(error);
    });
}
</script>

<style scoped>
</style>
