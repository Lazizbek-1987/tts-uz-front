<template>
    <div class="flex justify-between items-center py-6">
        <div>
            <h1 class="items-center">
                <span class="text-3xl font-bold text-primary">TTS</span>
                <span class="text-3xl font-bold text-secondary">.uz</span>
            </h1>
        </div>

        <div
            @click="menuOpen"
            class="items-center block lg:hidden w-6 h-6 items-center cursor-pointer right-6 top-5"
        >
            <XMarkIcon v-if="open"/>
            <Bars3Icon v-else/>
        </div>

        <div class="flex justify-between items-center hidden lg:flex">
            <ul class="flex items-center space-x-12 xl:space-x-20 text-lg">
                <li v-for="link in links">
                    <a
                        :href="link.link"
                        class="font-semibold text-gray-700 hover:border-b-2 hover:border-b-2 hover:border-b-primary"
                    >
                        {{ link.title }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="hidden lg:flex space-x-3">
            <select
                class="w-32 shadow-md rounded-full border border-gray-300 focus:border focus:ring-0 focus:border-primary">
                <option selected>O'zbekcha</option>
                <option value="1">Русский</option>
                <option value="2">English</option>

            </select>

            <button
                class="px-8 py-2 border border-primary rounded-full text-primary text-md bg-white hover:text-white
                hover:bg-primary duration-300 font-semibold"
                data-bs-toggle="modal" data-bs-target="#modal"
            >
                Kirish
            </button>
        </div>

    </div>


    <div v-if="open" class="space-y-12 block lg:hidden">
        <div class="flex justify-end space-x-6 mb-12 items-center">

            <select
                class="w-32 shadow-md rounded-full border border-gray-300 focus:border focus:ring-0 focus:border-primary">
                <option selected>O'zbekcha</option>
                <option value="1">Русский</option>
                <option value="2">English</option>

            </select>

            <button
                class="px-8 py-2 border border-primary rounded-full text-primary text-md bg-white hover:text-white
                hover:bg-primary duration-500"
                data-bs-toggle="modal" data-bs-target="#modal"
            >
                Kirish
            </button>

        </div>

        <div v-if="open" class="flex justify-start items-center">
            <ul class="items-center space-y-6 text-lg">
                <li v-for="link in links">
                    <a
                        :href="link.link"
                        class="font-medium text-gray-700 hover:border-b-2 hover:border-b-2 hover:border-b-primary"
                    >
                        {{ link.title }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="space-y-2">
            <h1 class="font-medium">Facebook</h1>
            <img src="public/img/asaxiy.png" alt="">
        </div>
    </div>

    <TheModal/>


</template>

<script>
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import TheModal from "./TheModal.vue";

export default {
    name: "TheHeader",
    components: {
        TheModal,
        XMarkIcon,
        Bars3Icon
    },
    data() {
        return {
            open: false,
            showModal: false,
            links: [
                {title: 'Bosh sahifa', link: '#'},
                {title: 'Loyihalar', link: '#'},
                {title: 'API', link: '#'},
                {title: 'Sohalar', link: '#'},
                {title: 'Statistika', link: '#'},
            ]
        }
    },
    methods: {
        menuOpen() {
            this.open = !this.open
        },
    }
}
</script>

<style scoped>

</style>