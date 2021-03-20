<template>
  <!-- <h1>Home page</h1> -->
  <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
  <div v-if="getall">
    <div v-for="i in getall">
      {{ i }}
    </div>
  </div>
  <div v-else>
    no project has been created yet,
    <p-g :openDialog="true" />
  </div>
  <button @click="deleteme">delete</button>
</template>

<script>
import { inject, computed } from "vue";
import ProjectManage from "../components/ProjectManage.vue";
export default {
  components: {
    "p-g": ProjectManage,
  },
  setup() {
    const store = inject("store");
    const getall = computed(() => store.getters.emptyOrGetProjects);
    const deleteme = () => store.commit("deleteProject", 0);
    return { getall, deleteme };
  },
};
</script>

<style>
</style>