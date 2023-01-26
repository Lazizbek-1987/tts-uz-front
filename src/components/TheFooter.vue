<template>
    <div class="bg-[#170F49] px-8 lg:px-20 py-10 space-y-4">

        <div class="flex justify-between pb-20 border-b-2 border-b-gray-700">

            <div class="space-y-8 w-1/2 md:w-1/4">
                <div class="space-y-3">
                    <h1 class="text-white font-bold text-2xl">TTS<span class="text-[#51CCF3]">.uz</span></h1>
                    <p class="text-white">Ovoz va Ovoz atrofidagi loyihalar ustida ish olib boramiz</p>
                </div>

                <div class="flex space-x-3">
                    <div
                        class="p-2 bg-[#2c1f80] rounded-full cursor-pointer hover:-translate-y-1 hover:scale-125 duration-500">
                        <img src="../components/icons/telegram.svg" alt="">
                    </div>
                    <div
                        class="p-2 bg-[#2c1f80] rounded-full cursor-pointer hover:-translate-y-1 hover:scale-125 duration-500">
                        <img src="../components/icons/instagram.svg" alt="">
                    </div>
                    <div
                        class="p-2 bg-[#2c1f80] rounded-full cursor-pointer hover:-translate-y-1 hover:scale-125 duration-500">
                        <img src="../components/icons/facebook.svg" alt="">
                    </div>
                    <div
                        class="p-2 bg-[#2c1f80] rounded-full cursor-pointer hover:-translate-y-1 hover:scale-125 duration-500">
                        <img src="../components/icons/linkedin.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="hidden md:block">
                <div class="space-y-4">
                    <h1 class="text-lg text-white">Foydali havolalar</h1>
                    <ul class="space-y-1">
                        <li class="text-gray-500 cursor-pointer hover:text-primary duration-500">Features</li>
                        <li class="text-gray-500 cursor-pointer hover:text-primary duration-500">Pravicy and Policy</li>
                        <li class="text-gray-500 cursor-pointer hover:text-primary duration-500">Case studies</li>
                        <li class="text-gray-500 cursor-pointer hover:text-primary duration-500">Reviews</li>
                        <li class="text-gray-500 cursor-pointer hover:text-primary duration-500">Updates</li>
                    </ul>
                </div>
            </div>

            <div class="hidden md:block">
                <div class="space-y-4">
                    <h1 class="text-lg text-white">Contacts us</h1>
                    <ul class="space-y-1 items-center">
                        <li class="flex space-x-1 items-center text-gray-500 cursor-pointer hover:text-primary duration-500">
                            <img src="../components/icons/email.svg" alt="" class="my-auto"><span>contact@tts.uz</span>
                        </li>
                        <li class="flex space-x-1 items-center text-gray-500 cursor-pointer hover:text-primary duration-500">
                            <img src="../components/icons/phone.svg" alt=""
                                 class="my-auto"><span>+998(99) 033 73 67</span>
                        </li>
                        <li class="flex space-x-1 items-center text-gray-500 cursor-pointer hover:text-primary duration-500">
                            <img src="../components/icons/phone.svg" alt="" class="my-auto">
                            <span> 794 Mcallister St San Francisco, 94102</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="block md:hidden">
                <div class="flex space-x-1 items-center text-gray-500 cursor-pointer hover:text-primary duration-500">
                    <img src="../components/icons/email.svg" alt="" class="my-auto"><span>contact@tts.uz</span>
                </div>
            </div>

            <div class="hidden lg:block">
                <div class="space-y-4">
                    <h1 class="text-lg text-white">Facebook</h1>
                    <img src="public/img/asaxiy.png" alt="" class="my-auto">
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center space-x-2">
            <div class="items-center">
                <h1 class="text-white text-[10px] md:text-[17px]">All Rights are Reserved © 2022 TTS.uz</h1>
            </div>
            <div class="items-center">
                <div class="flex justify-start items-center space-x-1 md:space-x-4">
                    <h1 class="text-gray-500 text-[10px] md:text-[17px]">Created by</h1>
                    <img class="hidden md:block" src="../components/icons/quantic.svg" alt="">
                    <img class="block md:hidden" src="../components/icons/quantic_mobile_width.svg" alt="">
                </div>
                <div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style scoped>

</style>