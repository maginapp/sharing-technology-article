---
hello: world
---

test 2

<script setup>
import { ref } from 'vue'

const countSS = ref(0)
</script>

## Markdown Content

The count is: {{ countSS }}

<button :class="$style.button" @click="countSS++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>