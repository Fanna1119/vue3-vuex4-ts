<template>
  <!-- <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link to="/fuck">error</router-link>
  </div>
  <router-view /> -->
  <div>
    <!-- {{getAllProjects}} -->
  </div>
  <button @click="newproj">add</button>

  <div>
    {{setActiveProject(getProjectByIndex(nummy).project_id)}} 

    {{getProjectByIndex(nummy)}}

    <div style="background-color: blue" v-for="i in projectsNames">
      {{ getCurrentProjectTodos(i.project_id) }}
    </div>
  </div>
  <input v-model="nummy" type="number" min="0" :max="projectCount - 1" />
</template>

<script>
import { defineComponent, inject, ref } from "vue";
import { nanoid } from "nanoid";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const nummy = ref(0);
    const store = inject("store");

    const {
      addProject,
      getAllProjects,
      getProjectByIndex,
      getCurrentProjectTodos,
      projectCount,
      projectsNames,
      setActiveProject
    } = store;

    const newproj = () => {
      addProject({
        project_id: nanoid(),
        project_name: "name-" + nanoid(),
        created: new Date(),
        due_date: new Date(),
        todos: [
          {
            todo_id: "todo-" + nanoid(),
            created: new Date(),
            est_completion: "10",
            title: "title",
            description: "string",
            done: false,
          },
          {
            todo_id: "todo-" + nanoid(),
            created: new Date(),
            est_completion: "10",
            title: "title",
            description: "string",
            done: false,
          },
        ],
      });
    };

    return {
      getAllProjects,
      newproj,
      nummy,
      getProjectByIndex,
      getCurrentProjectTodos,
      projectCount,
      projectsNames,
      setActiveProject
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>