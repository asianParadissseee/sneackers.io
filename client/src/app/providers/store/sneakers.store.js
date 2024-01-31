import {defineStore} from "pinia"

export const useSneackersStore = defineStore("sneakers store", {
    state: () => ({
        sneakers: []
    })
})
