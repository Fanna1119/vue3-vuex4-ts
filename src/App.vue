<template>
  <el-container>
    <el-header><nav-bar /></el-header>
    <el-main><router-view /></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TodoList from "./components/TodoList.vue";
import { defineComponent, inject, ref } from "vue";
import { nanoid } from "nanoid";
export default defineComponent({
  name: "App",
  components: {
    "todo-list": TodoList,
    "nav-bar": Navbar,
  },
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>