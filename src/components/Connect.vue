<script setup lang="ts">
import { useChainId, useConnect } from '@wagmi/vue'
import { useModalStore } from '../store/useModal';
const chainId = useChainId()
const { connect, connectors, error, status } = useConnect()

const modalStore = useModalStore();
</script>

<template>
  <h2>Connect</h2>
  <button class="text-red-500" @click="modalStore.openModal">Open Modal</button>

  <button v-for="connector in connectors" :key="connector.id" type="button" @click="connect({ connector, chainId })">
    {{ connector.name }}
  </button>

  <div>
    {{ status }}
    {{ error?.message }}
  </div>
</template>
