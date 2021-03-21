<template>
  <el-dialog
    :fullscreen="isMobile"
    title="Create New Project"
    v-model="dialogVisible"
    width="35%"
  >
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="myform"
      label-width="150px"
      label-position="top"
    >
      <el-form-item label="Project Name" prop="name">
        <el-input size="small" v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="Project Due Date" required>
        <el-form-item prop="date1">
          <el-date-picker
            style="width: 100%"
            type="date"
            placeholder="Pick a date"
            v-model="ruleForm.date1"
          ></el-date-picker>
        </el-form-item>
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
  </el-dialog>
</template>

<script>
import { inject, reactive, ref, computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { nanoid } from "nanoid";

export default {
  props: {
    dialogOn: {
      default: false,
    },
  },
  setup(props) {
    const { width } = useWindowSize();

    const isMobile = computed(() => (width.value < 720 ? true : false));

    const store = inject("store");

    const settings = inject("settings");

    const dialogVisible = computed({
      get: () => props.dialogOn,
      set: () => settings.commit("setDialog"),
    });

    const myform = ref();
    const ruleForm = reactive({
      name: "",
      date1: "",
      desc: "",
    });

    const rules = reactive({
      name: [
        {
          required: true,
          message: "Project Name is Required",
          trigger: "blur",
        },
        {
          min: 3,
          message: "Length should be more than 3 characters",
          trigger: "blur",
        },
      ],
      date1: [
        {
          type: "date",
          required: true,
          message: "Please pick a date",
          trigger: ["change", "blur"],
        },
      ],
      desc: [
        {
          required: false,
          message: "Please input Project Description",
          trigger: "blur",
        },
      ],
    });

    const createProject = () =>
      store.commit("AddProject", {
        project_id: nanoid(),
        project_name: ruleForm.name,
        project_description: ruleForm.desc,
        created: new Date(),
        due_date: ruleForm.date1,
        todos: [],
      });

    const submitForm = () => {
      myform.value.validate((valid) => {
        if (valid) {
          createProject();
        } else {
          return false;
        }
      });
    };

    const resetForm = () => {
      myform.value.resetFields();
    };

    return {
      ruleForm,
      rules,
      myform,
      submitForm,
      resetForm,
      isMobile,
      dialogVisible,
    };
  },
};
</script>

<style>
</style>
