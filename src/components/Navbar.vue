<template>
  <div class="box-card">
    <div class="card-header">
      <span>
        <el-button type="primary" icon="el-icon-s-grid"></el-button>
      </span>
      <el-button class="button" type="text">Operation button</el-button>
      <el-button class="button" type="text">Operation button</el-button>
      <el-button class="button" type="text">Operation button</el-button>
    </div>
  </div>
</template>

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