<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { useModalStore } from "../../store/useModal";
import { useChainId, useConnect } from '@wagmi/vue';
const modalStore = useModalStore();
const { connectors, connect, } = useConnect();
const chainId = useChainId();
</script>

<template>
    <TransitionRoot appear :show="modalStore.isOpen" as="template">
        <Dialog as="div" @close="modalStore.closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h2" class="text-lg font-medium leading-6 text-gray-900">
                                Connect Wallet
                            </DialogTitle>
                            <div class="mt-2">
                                <p className="text-purple-600 mb-8 text-sm leading-relaxed">
                                    Start by connecting with one of the wallets below.
                                    <br />
                                    Be sure to store your private keys or seed phrase
                                    <br />
                                    securely. Never share them with anyone.
                                </p>
                                <div class="grid grid-cols-3 gap-6">
                                    <button v-for="connector in connectors" :key="connector.id" type="button"
                                        class="flex flex-col items-center justify-center"
                                        @click="connect({ connector, chainId })">
                                        <div
                                            class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mb-2">
                                            <img class="w-8 h-8" :src="connector.icon" alt="Connector icon" />
                                        </div>
                                        <span class="text-sm font-medium text-center">{{ connector.name }}</span>
                                    </button>
                                </div>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
