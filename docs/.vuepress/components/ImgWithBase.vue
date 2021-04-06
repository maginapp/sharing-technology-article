<template>
  <img :src="$withBase(src)" :alt="alt || ''" :height="height" :width="width" :style="style">
</template>

<script>
export default {
  props: [
    'src',
    'alt',
    'height',
    'width',
    'style'
  ]
}
</script>>
