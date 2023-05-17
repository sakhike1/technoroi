<template>
    <div class="bg-gray-900">
        <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <router-link to="/" class="text-m font-bold text-gray-100 hover:text-indigo-400"><img class="w-1/2"
                        src="~/assets/logo.png" alt="">
                </router-link>
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col text-xs m-7 mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <router-link to="/">
                    <a class="text-m  text-gray-500  hover:text-blue-400">
                        Home
                    </a>
                </router-link>

                <router-link to="Services">
                    <a class="text-m  text-gray-500 hover:text-blue-400">
                        Services
                    </a>
                </router-link>

                <router-link to="About">
                    <a class="text-m  text-gray-500  hover:text-blue-400">
                        About
                    </a>
                </router-link>
                <router-link to="Contact">
                    <a class="text-m  text-gray-500  hover:text-blue-400">
                        Contact
                    </a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script >
import { ref } from "vue";
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
};
</script>