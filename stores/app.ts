import {defineStore} from "pinia";

export const useAppStore = defineStore('appStore', () => {
    const themeIsDark = ref(false);
    function changeTheme() {
        themeIsDark.value = !themeIsDark.value;
    }
    return { themeIsDark, changeTheme }
})
