
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
    <el-form-item label="Project Name" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="Project Due Date" required width="100%">
      <el-col :span="10">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            placeholder="Pick a time"
            v-model="ruleForm.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="Project Description" prop="desc">
      <el-input
        type="textarea"
        v-model="ruleForm.desc"
        placeholder="Project Description"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >Create</el-button
      >
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { inject, reactive,ref } from "vue";
export default {
  setup() {
    const store = inject("store");

    const ruleForm = reactive({
      name: "",
      date1: "",
      date2: "",
      desc: "",
    });

    // const ruleForm = ref({
    //   name: "",
    //   date1: "",
    //   date2: "",
    //   desc: "",
    // });

    return {
      ruleForm,
    };
  },

  data() {
    return {
      // ruleForm: {
      //   name: "",
      //   date1: "",
      //   date2: "",
      //   desc: "",
      // },
      rules: {
        name: [
          {
            required: true,
            message: "Project Name is Required",
            trigger: "blur",
          },
          {
            max: 5,
            message: "Length should be 3+",
            trigger: "blur",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: false,
            message: "Please input Project Description",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.store);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>
