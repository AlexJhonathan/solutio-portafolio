  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import LayoutDefault from './layouts/index.vue'

  const route = useRoute()

  // Si la ruta tiene meta.layout === 'empty', no usa layout
  const layoutComponent = computed(() => {
    return route.meta.layout === 'empty' ? 'div' : LayoutDefault
  })
  </script>

  <template>
    <component :is="layoutComponent">
      <router-view />
    </component>
  </template>