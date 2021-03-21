import Fuex from './Fuex';
import { useStorage } from '@vueuse/core';

const store = new Fuex.Store({
    state: {
        theme: '',
        openDialog: false

    },
    mutations: {
        setDialog(state) {
            state.openDialog = !state.openDialog;
        }

    },
    actions: {

    },
    getters: {
        getDialog: (state) => state.openDialog
    }
})

export default store