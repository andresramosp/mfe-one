<template>
  <div style="padding: 20px;">
    <span>Componente genérico hospedado en MfeOne sin Store interno (usando props)</span>
    <div style="margin-top: 20px">
      <el-steps :active="active" finish-status="success">
        <el-step
          v-for="(step, index) of steps"
          :key="index"
          :title="step.name"
        />
      </el-steps>
      <!-- <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" /> -->
      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import "element-plus/dist/index.css";
import { ElButton, ElSteps, ElStep } from "element-plus";
export default {
  components: {
    ElButton,
    ElSteps,
    ElStep,
  },
  props: { steps: { type: Array } },
  setup() {
    const active = ref(0);

    const next = () => {
      if (active.value++ > 2) active.value = 0;
    };

    return { active, next };
  },
};
</script>