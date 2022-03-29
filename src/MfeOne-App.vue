<template>
  <div>
    <div class="login-info">
      <div class="logged" v-if="logged">Logged in as {{ userName }}</div>
      <div class="not-logged" v-else>Not Logged</div>
    </div>
    <router-link to="/">Route 1</router-link>
    <router-link style="margin-left: 10px" to="/mfeone-route2"
      >Route 2</router-link
    >
    <h1>{{ "Micro Frontend One (Vue 3 + Vuex + Element Plus)" }}</h1>

    <br />
    <div v-if="logged" >
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
// import { PetApiFactory, Configuration } from "Shell/clientApi";
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

    store.dispatch("getSteps");
    store.dispatch("getStepsGeneric");
    store.dispatch("getPets");

    // console.log(PetApiFactory)


    // const getPets = async () => {
    //   const config = new Configuration({
    //     basePath: window.location.origin, // 1
    //   });
    //   const apiFactory = PetApiFactory(config);
    //   let result = await apiFactory.findPetsByStatus(["available"]);
    //   console.log(result);
    // };

    // getPets();


    return {
      logged,
      userName,
    };
  },
};
</script>

<style>

</style>
