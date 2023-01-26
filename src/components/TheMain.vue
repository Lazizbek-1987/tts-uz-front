<template>
    <div class="mt-6 lg:mt-0">
        <div class="space-y-10 lg:flex block lg:justify-between items-center">
            <div class="space-y-8 items-center">
                <div class="flex lg:block font-bold font-[#170F49] text-gray-900 text-5xl lg:text-7xl">
                    <h1>Matnni ovozga o'girish</h1>
                </div>
                <p class="lg:w-[517px] w-full text-xl">21-oktabr, O'zbek tiliga davlat tili maqomi berilganligining 31
                    yillik
                    munosabati bilan o'zbekcha
                    matnni nutqga o'girish texnologiyasini ishlab chiqdik</p>
                <div class="columns-1 space-y-4 sm:space-y-0 sm:columns-2">
                    <div class="space-y-4 sm:space-y-0">
                        <div class="flex space-x-3 items-center">
                            <img src="../components/icons/voice.svg" alt="">
                            <span class="cursor-pointer hover:text-primary duration-500">Tabiiy ovozda</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                            <img src="../components/icons/ai.svg" alt="">
                            <span class="cursor-pointer hover:text-primary duration-500">To'liq sun'iy intelekt asosida</span>
                        </div>
                    </div>

                    <div class="space-y-4 sm:space-y-0">
                        <div class="flex space-x-3 items-center">
                            <img src="../components/icons/fastspeed.svg" alt="">
                            <span class="cursor-pointer hover:text-primary duration-500">Yuqori tezlik</span>
                        </div>
                        <div class="flex space-x-3 items-center">
                            <img src="../components/icons/speak.svg" alt="">
                            <span class="cursor-pointer hover:text-primary duration-500">2ta ovozda tinglash imkoniyati</span>
                        </div>
                    </div>

                </div>

            </div>
            <div class="lg:w-[600px] h-auto object-cover w-full">
                <img src="public/img/robot.png" alt="">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "TheMain"
}
</script>

<style scoped>

</style>