<template>
  <h1>The user is {{ $route.params.projectId }}</h1>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
      
    const {
      params: { projectId },
    } = useRoute();

    return {};
  },
};
</script>

<style>
</style>