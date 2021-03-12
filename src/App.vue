<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link to="/fuck">error</router-link>
  </div>
  <router-view />
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useState, useMutations, useActions, useGetters } from "./helpers";
export default defineComponent({
  name: "App",
  components: {},
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>