<template>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
         id="modal" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true"
         role="dialog">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white
                bg-clip-padding rounded-md outline-none text-current">
                <div
                    class="modal-header flex items-center justify-start p-4 rounded-t-md">
                    <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50
                        focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75"
                        data-bs-dismiss="modal" aria-label="Close"
                    >
                    </button>
                </div>

                <ModalForm />
            </div>
        </div>
    </div>
</template>

<script>
import ModalForm from "./ModalForm.vue";
export default {
    name: "TheModal",
    components: {ModalForm},
}
</script>

<style scoped>

</style>