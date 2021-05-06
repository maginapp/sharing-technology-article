<template>
  <div>
    <blockquote v-if="title || author || link || platform">
      <p v-if="title">{{ title }}</p>
      <p v-if="author">作者：{{ author }}</p>
      <p v-if="link">链接：{{ link }}</p>
      <p v-if="platform">来源：{{ platform }}</p>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: [
    'link',
    'author',
    'title',
    'platform'
  ]
}
</script>>
