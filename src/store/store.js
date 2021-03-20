import { reactive, computed, readonly, toRefs } from "vue";
import { useStorage } from '@vueuse/core';
import { findAndDelete, findItemIndex } from '../composables'

const projects = useStorage('projects', [

]);

const activeProject = useStorage('activeProject', {

});


const projectswrapper = projects.value;





//useGetters

//check if project obj/array is empty
const projectIsEmpty = computed(() => projectswrapper.length <= 0);

//returns object with all project names and their ids
const projectsNames = computed(() => projectswrapper.map((item) => (
  {
    project_id: item.project_id,
    project_name: item.project_name
  }
)));


const CurrentProject = computed(() => projectswrapper.find(x => x.project_id === activeProject.value))






const getAllProjects = computed(() => projectswrapper);

// const currentProject;
const getProjectByIndex = x => (projectswrapper[x]);


const projectCount = computed(() => projectswrapper.length)



const getCurrentProjectTodos = (project_id, todo_id) => {
  const index = findItemIndex(projectswrapper, ['project_id'], project_id);
  return projectswrapper[index]['todos']

}


//useMutations
const setActiveProject = (project_id) => activeProject.value = project_id;

//project mutations
const removeProject = (proj_id) => findAndDelete(projectswrapper, ['project_id'], proj_id);
const addProject = (proj) => projectswrapper.push(proj);
// const editProject;


//todo mutations
// const removeTodo;
// const addTodo;
// const editTodo;
// const todoDone;





export default {
  getAllProjects,
  addProject,
  removeProject,
  getProjectByIndex,
  getCurrentProjectTodos,
  projectCount,
  projectsNames,
  setActiveProject
}

// project_id: string,
// project_name: string,
// created: string,
// due_date: string,
// todos: Array<TodoType>