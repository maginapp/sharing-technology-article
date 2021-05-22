<template>
  <div>
    <blockquote v-if="title || author || link || plat">
      <p v-if="title">文章：{{ title }}</p>
      <p v-if="author">作者：{{ author }}</p>
      <p v-if="link">链接：{{ link }}</p>
      <p v-if="plat">来源：{{ plat }}</p>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: [
    'link',
    'author',
    'title',
    'plat'
  ]
}
</script>>
