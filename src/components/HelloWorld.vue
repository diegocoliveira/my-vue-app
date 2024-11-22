<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="bg-blue-500 text-white p-4">
    {{ msg }}
  </div>
  <div class="card">
    <button type="button" @click="count++"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      count is {{ count }}
    </button>
    <p class="mt-4 text-sm text-gray-300">
      Editar o arquivo
      <code
        class="bg-gray-900 text-green-400 px-2 py-1 rounded-md font-mono shadow-inner">components/HelloWorld.vue</code>
      para testar o HMR.
    </p>

  </div>
</template>
