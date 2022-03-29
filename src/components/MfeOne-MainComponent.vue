<template>
  <div class="hello">
    <el-row :gutter="50">
      <el-col :span="8"
        ><div class="grid-content bg-purple" />
        <MfeOneChildComponent />
      </el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple" />
        <div class="shared-comp">
          <SharedComponent />
        </div>
      </el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple" />
        <div class="shared-comp-2">
          <SharedComponentGeneric :steps="store.state.stepsGeneric" />
        </div>
      </el-col>
    </el-row>
    <div class="moment-time">
      Moment.js: <br />
      {{ moment().format("MMMM Do YYYY, h:mm:ss a") }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import MfeOneChildComponent from "./MfeOne-ChildComponent.vue";
import SharedComponent from "./SharedComponent.vue";
import SharedComponentGeneric from "./SharedComponentGeneric.vue";

export default {
  components: {
    MfeOneChildComponent,
    SharedComponent,
    SharedComponentGeneric,
  },
  props: {},

  setup() {
    const store = useStore();
    const count = ref(0);

    return {
      count,
      moment,
      store,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
