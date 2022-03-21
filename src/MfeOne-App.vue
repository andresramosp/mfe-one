<template>
  <div>
    <h1>{{ "Micro Frontend One (Vue 3 + Element Plus)" }}</h1>
    <div class="login-info">
      <div class="logged" v-if="logged">Logged in with token {{ token }}</div>
      <div class="not-logged" v-else>Not Logged</div>
    </div>
    <router-link to="/route1">Route 1</router-link>
    <br />
    <router-link to="/route2">Route 2</router-link>
    <br />
    <div v-if="logged" style="margin-top: 20px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { auth$ } from "ModuleAuth/ModuleAuth";
import { ref } from "vue";

export default {
  name: "App",
  components: {},
  setup() {

    const logged = ref(false);
    const user = ref("");
    const token = ref("");

    auth$.subscribe((payload) => {
      token.value = payload.sessionToken;
      user.value = payload.user;
      logged.value = payload.sessionToken !== null;
    });

    return {
      logged,
      user,
      token,
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
