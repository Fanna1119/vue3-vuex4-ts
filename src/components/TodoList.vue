<template>
  <div v-if="getall">
    <div v-for="i in getall">
      {{ i }}
    </div>
  </div>
  <div v-else>empty</div>

  <button @click="execute">exx</button>
  <button @click="deleteme">del</button>
</template>

<script>
import { computed, inject } from "vue";
import { nanoid } from "nanoid";

export default {
  setup() {
    const store = inject("store");
    const projects = computed(() => store.getters.getAllProjects);

    const execute = () =>
      store.commit(
        "AddProject",
        {
          project_id: nanoid(),
          project_name: "name-" + nanoid(),
          created: new Date(),
          due_date: new Date(),
          todos: [],
        }
      );

    const deleteme = () => store.commit("deleteProject", 0);
    const getall = computed(() => store.getters.emptyOrGetProjects);

    return {
      projects,
      execute,
      deleteme,
      getall,
    };
  },
};
</script>

<style>
</style>