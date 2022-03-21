<template>
  <div class="hello">
    <MfeOneChildComponent/>
    {{ moment().format('MMMM Do YYYY, h:mm:ss a') }}
  </div>
</template>

<script>
import { ref } from "vue";
import moment from 'moment';
import "element-plus/dist/index.css";
import MfeOneChildComponent from "./MfeOne-ChildComponent.vue";

export default {
  components: {
    MfeOneChildComponent,
  },
  props: {},

  setup() {
    const count = ref(0);

    return {
      count,
      moment
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
