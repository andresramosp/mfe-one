<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Pets de Swagger PetStore, usando Api Cliente de Shell</span>
        <el-button plain @click="sayHello" class="button" type="info"
          >Hello To Micro Frontend Two</el-button
        >
      </div>
    </template>
    <div v-for="pet of pets" :key="pet" class="text item">{{ "Pet " + pet }}</div>
  </el-card>
</template>

<script>
import { computed } from 'vue'
import { useStore} from 'vuex'
export default {
  setup() {

    const store = useStore()

    const sayHello = () => {
      window.dispatchEvent(
        new CustomEvent("hello-event", {
          detail: {
            type: "show_dialog",
            name: "close_file",
          },
        })
      );
    };

    const pets = computed(() => store.getters.pets )

    return { sayHello, pets };
  },
};
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>