<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button plain @click="sayHello" class="button" type="info"
          >Hello To Micro Frontend Two</el-button
        >
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
  </el-card>
</template>

<script>
export default {
  setup() {
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

    return { sayHello };
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