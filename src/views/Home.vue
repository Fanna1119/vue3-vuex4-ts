<template>
  <!-- <h1>Home page</h1> -->
  <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
  <div v-if="getall">
    <div v-for="i in getall">
      {{ i }}
    </div>
    <!-- if non , no project, if first set to first, then compute to selected -->
  </div>
  <div v-else>
    <el-empty
      description="No Project Has been Created yet. Create one To get Started"
    >
      <el-button @click="openme = !openme" type="primary" icon="el-icon-search"
        >Create A Project</el-button
      >
    </el-empty>
  </div>
  <p-g :open="openme" @closed="openme = !openme" />

  <button @click="deleteme">delete</button>
  <button @click="openme = !openme">open</button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { inject, computed, ref } from "vue";
import ProjectManage from "../components/ProjectManage.vue";

export default {
  components: {
    "p-g": ProjectManage,
  },
  setup() {
    const openme = ref(true);

    const store = inject("store");
    const settings = inject("settings");

    const getall = computed(() => store.getters.emptyOrGetProjects);

    const deleteme = () => store.commit("deleteProject", 0);

    return { getall, deleteme, openme };
  },
};
</script>

<style scoped>
.el-dialog {
  border-radius: 10rem;
  box-shadow: none;
}
</style>