<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'Hello World'
  }
})

const count = ref(0)
</script>

<template>
  <div
    role="alert"
    class="alert alert-success"
  >
    <span>{{ msg }}</span>
  </div>
  <button
    class="btn btn-primary"
    @click="count++"
  >
    count is {{ count }}
  </button>

  <div class="card-body">
    <p class=" mt-4 text-sm text-gray-300">
      Editar o arquivo
      <code
        class="bg-gray-900 text-green-400 px-2 py-1 rounded-md font-mono shadow-inner"
      >components/HelloWorld.vue</code>
      para testar o HMR.
    </p>
  </div>
</template>
