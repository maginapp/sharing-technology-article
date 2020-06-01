<template>
  <img :src="$withBase(src)" :alt="alt || ''" :height="height" :width="width">
</template>

<script>
export default {
  props: [
    'src',
    'alt',
    'height',
    'width'
  ]
}
</script>>
