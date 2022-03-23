<template>
  <div>
    <h1>{{ "Micro Frontend One (Vue 3 + Element Plus)" }}</h1>
    <div class="login-info">
      <div class="logged" v-if="logged">Logged in as {{ userName }}</div>
      <div class="not-logged" v-else>Not Logged</div>
    </div>
    <router-link to="/">Route 1</router-link>
    <br />
    <router-link to="/mfeone-route2">Route 2</router-link>
    <br />
    <div v-if="logged" style="margin-top: 20px">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import { auth$ } from "ModuleAuth/ModuleAuth";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();

    const logged = computed(() => store.getters.logged);
    const userName = computed(() => store.getters.getUserName);

    auth$.subscribe((payload) => {
      store.dispatch("setAuth", payload);
    });

    store.dispatch('getSteps')
    store.dispatch('getStepsGeneric')

    return {
      logged,
      userName,
    };
  },
};
</script>

<style>
.not-logged {
  background-color: pink;
  width: 100px;
}
.logged {
  background-color: greenyellow;
  width: 250px;
}
</style>
