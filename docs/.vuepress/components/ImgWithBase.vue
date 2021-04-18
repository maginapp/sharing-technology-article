<template>
  <img :src="$withBase(src)" :alt="alt || ''" :height="height" :width="width" :style="styleData">
</template>

<script>
export default {
  props: [
    'src',
    'alt',
    'height',
    'width',
    'styleData'
  ]
}
</script>>
