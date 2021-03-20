<template>
  <el-button type="text" @click="openDialog = true"
    >Click to open the Dialog</el-button
  >

  <el-dialog
    title="Create a Project"
    v-model="openDialog"
    width="50%"
    :center="true"
  >
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="Project Name">
        <el-input type="input" v-model="form.project_title"></el-input>
      </el-form-item>

      <el-form-item label="Due Date">
        <el-date-picker
          v-model="form.duedate"
          type="date"
          placeholder="Pick a day"
          style="width: 100%"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="Project Description">
        <el-input type="textarea" v-model="form.project_description"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { Field, Form } from "vee-validate";
import { ref, inject, reactive } from "vue";
export default {
  props: {
    openDialog: {
      default: false,
    },
  },
  components: {
    "vue-cal": VueCal,
    Field,
    Form,
  },
  setup() {
    const ruleForm = ref();
    const store = inject("store");

    const duedate = ref();

    const form = reactive({
      project_title: "",
      duedate: "",
      project_description: "",
    });

    const clearFields = () => {
      form.project_title = "";
      form.duedate = "";
      form.project_description = "";
    };

    //inject store [done]
    const createProject = () =>
      store.commit("AddProject", {
        project_id: nanoid(),
        project_name: form.project_title,
        project_description: form.project_description,
        created: new Date(),
        due_date: form.due_date,
        todos: [],
      });

    const rules = ref({
      project_title: [
        {
          required: true,
          message: "Please input Project name",
          trigger: "blur",
        },
        {
          min: 3,
          message: "Length should be more than 3 letters",
          trigger: "blur",
        },
      ],
    });

    //create project textinputs
    //send to store project
    //clear all fields

    //on edit click gather project info and update

    return {
      duedate,
      form,
      createProject,
      rules,
      ruleForm
    };
  },
};
</script>

<style>
</style>
