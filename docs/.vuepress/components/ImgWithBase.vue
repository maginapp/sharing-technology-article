<template>
  <img :src="$withBase(src)" :alt="alt || ''">
</template>

<script>
export default {
  props: [
    'src',
    'alt'
  ]
}
</script>>
