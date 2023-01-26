<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
    <div class="w-full min-h-screen overflow-hidden font-fontPrimary">
        <div class="overflow-hidden px-8 lg:px-20">
            <TheHeader />
            <RouterView />
        </div>
        <TheFooter />
    </div>

</template>

<style scoped>
</style>
