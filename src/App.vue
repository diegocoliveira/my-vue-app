<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="mockup-code">
    <pre data-prefix="$"><code>yarn add -D daisyui</code></pre>
    <pre
      data-prefix=">"
      class="text-warning"
    ><code>installing...</code></pre>
    <pre
      data-prefix=">"
      class="text-success"
    ><code>Done!</code></pre>
  </div>
  <HelloWorld msg=" Tailwind com daisyUI está funcionando!" />

  <footer class="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by ZLPeT Ltd</p>
    </aside>
  </footer>
</template>
