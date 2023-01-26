<template>
    <div class="text-center modal-body relative p-4 items-center mb-20">
        <h1 class="text-3xl font-bold mb-10">Tizmiga kirish</h1>
        <div class="w-full space-y-4">
            <div>
                <input
                    type="text"
                    class="w-1/5 md:w-1/6 pr-0 border-r-0 bg-gray-200 rounded-l-lg rounded-r-0 focus:border focus:ring-0
                            focus:border-primary focus:border-r-0"
                    value="+998"
                >
                <input
                    type="number"
                    class="w-4/5 md:w-6/7 rounded-r-lg focus:border focus:ring-0 focus:border-l-0 focus:border-primary"
                >
            </div>
            <div class="space-y-1">
                <input
                    type="text"
                    placeholder="parolingizni kiriting"
                    class="w-full border border-gray-200 bg-gray-200 rounded-lg placeholder:text-gray-500
                                focus:ring-0 focus:border-primary"
                >
                <div class="text-end items-center">
                    <span class="text-primary items-center cursor-pointer hover:text-red-600 duration-500">
                        parolni unutdingizmi?
                    </span>
                </div>
            </div>
            <div>
                <button
                    class="w-full bg-primary text-white py-2 rounded-lg hover:bg-white hover:text-primary
                                border hover:border-primary duration-500"
                >
                    Kirish
                </button>
            </div>
            <div class="flex justify-between">
                <img src="../components/icons/line.svg" alt="" class="w-2/5">
                <span class="text-gray-400">YOKI</span>
                <img src="../components/icons/line.svg" alt="" class="w-2/5">
            </div>
            <div class="flex justify-center cursor-pointer border hover:border-primary space-x-3 w-full py-2
             bg-gray-200 rounded-lg duration-500"
            >
                <img src="../components/icons/google.svg" alt="">
                <h1>Google accaunt orqali kirish</h1>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ModalForm"
}
</script>

<style scoped>

</style>