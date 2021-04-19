<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/" class="dis-block">
        Take me home.
      </RouterLink>
      <RouterLink to="/blog" class="dis-block">
        Take me blog.
      </RouterLink>
      <RouterLink to="/sharing" class="dis-block">
        Take me sharing.
      </RouterLink>
      <RouterLink to="/interview" class="dis-block">
        Take me interview.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style scoped>
.dis-block {
  display: block;
}
</style>