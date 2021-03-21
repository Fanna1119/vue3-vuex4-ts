<template>
  <div class="box-card">
    <div class="card-header">
      <span>
        <el-button
          type="primary"
          icon="el-icon-s-grid"
          @click="opendrawer = !opendrawer"
        ></el-button>
      </span>
      <el-button class="button" type="text">Operation button</el-button>
      <el-button class="button" type="text">Operation button</el-button>
      <el-button class="button" type="text">Operation button</el-button>
    </div>
  </div>
  <el-drawer title="My Projects" v-model="opendrawer" direction="ltr">
    <div v-for="i in drawervalues">
      <button>
        {{ i.project_name }}
      </button>
    </div>
  </el-drawer>
</template>


<script>
import { computed, inject, ref } from "vue";

export default {
  setup() {
    const settings = inject("settings");
    const store = inject("store");
    const drawervalues = computed(() => store.getters.projectsNames);
    const opendrawer = ref(false);

    return { opendrawer, drawervalues };
  },
};
</script>


<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}

.icon-size {
  font-size: 25px;
}
</style>