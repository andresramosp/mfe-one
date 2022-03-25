<template>
  <div style="padding: 20px;">
    <span>Componente hospedado en MfeOne ligado al Store de MfeOne (cambia en los 3 microfronts a la vez)</span>
    <div style="margin-top: 20px">
      <el-steps :active="currentStep" finish-status="success">
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
import { computed } from "vue";

// Si accedo al Store con useStore se usará un store distinto según
// el MFE desde el que se ejecute. Si elegimos acoplar el store metiéndolo
// aquí dentro, hay que hacer exposes + remotes del store para que sea el mismo

// const store = useStore();
// import { useStore } from "vuex";

import store from 'store/store'
import "element-plus/dist/index.css";
import { ElButton, ElSteps, ElStep } from "element-plus";
export default {
  components: {
    ElButton,
    ElSteps,
    ElStep,
  },
  // props: { steps: { type: Array } },
  setup() {

    const next = () => {
      store.commit('nextStep');
    };

    const steps = computed(() => store.state.steps);
    const currentStep = computed(() => store.state.currentStep);

    return { currentStep, next, steps };
  },
};
</script>