<template src='./ShiftManage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import AddShiftModal from "./AddShift/AddShift";

export default {
  name: "ShiftManage",
  components: { AddShiftModal },
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style scoped>
</style>
