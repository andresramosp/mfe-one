<template>
  <div style="padding: 20px">
    <span>This is a shared component</span>
    <div  style="margin-top: 20px">
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1" />
        <el-step title="Step 2" />
        <el-step title="Step 3" /> </el-steps
      ><el-button style="margin-top: 12px" @click="next">Next step</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import 'element-plus/dist/index.css'
import { ElButton, ElSteps, ElStep } from "element-plus";
export default {
  components: {
    ElButton,
    ElSteps,
    ElStep
  },
  setup() {
    const active = ref(0);

    const next = () => {
      if (active.value++ > 2) active.value = 0;
    };

    return { active, next };
  },
};
</script>