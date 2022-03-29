<template>
  <div class="shared-comp-2">
    Datos de PetStore, usando Client API 1 de la Shell
    <el-table
    :header-cell-style="{ background: 'lightgray', color: 'black' }"
    :data="pets"
    height="250"
    style="width: 100%; margin-top: 20px"
  >
    <el-table-column prop="id" label="ID" :fixed="true" />
    <el-table-column prop="name" label="Name" :fixed="true" />
    <el-table-column prop="status" label="Status" :fixed="true" />
  </el-table>
  </div>
  
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

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

    const pets = computed(() => store.getters.pets);

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