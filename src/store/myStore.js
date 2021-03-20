import Fuex from './Fuex';
import { useStorage } from '@vueuse/core';

const store = new Fuex.Store({
    state: {
        // projects: [],
        selectedProject: '',
        projects: useStorage('projects2', [
        ])
    },
    mutations: {
        AddProject(state, payload) {
            state.projects.push(payload);
        },
        deleteProject(state, index) {
            state.projects.splice(index, 1)
        }
    },
    actions: {

    },
    getters: {

        emptyOrGetProjects: (state) => state.projects.length <= 0 ? false : state.projects,

        projectsEmpty: (state) => state.projects.length <= 0,

        getAllProjects: (state) => state.projects,

        selectedProject: (state) => state.projects.find(x => x.id === state.selectedProject),

    }
})

export default store