<template>
  <div class="hello">
    <MfeOneChildComponent />
    <div class="shared-comp">
      <SharedComponent />
    </div>
      <div class="shared-comp-2">
      <SharedComponentGeneric :steps="store.state.stepsGeneric" />
    </div>
    {{ moment().format("MMMM Do YYYY, h:mm:ss a") }}
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex'
import moment from "moment";
import MfeOneChildComponent from "./MfeOne-ChildComponent.vue";
import SharedComponent from "./SharedComponent.vue";
import SharedComponentGeneric from './SharedComponentGeneric.vue';

export default {
  components: {
    MfeOneChildComponent,
    SharedComponent,
    SharedComponentGeneric,
  },
  props: {},

  setup() {
    const store = useStore()
    const count = ref(0);

    return {
      count,
      moment,
      store
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
.shared-comp {
  background-color: lightgray;
  padding: 5px;
  width: 400px;
  margin-top: 10px;
  position: absolute;
  right: 20px;
  top: 150px;
}
.shared-comp-2 {
  background-color: lightseagreen;
  padding: 5px;
  width: 400px;
  margin-top: 10px;
  position: absolute;
  right: 20px;
  top: 370px;
}
</style>
