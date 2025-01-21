<script setup>
import DefaultTheme from 'vitepress/theme'
import mermaid from 'mermaid'
const { Layout } = DefaultTheme
mermaid.initialize({ startOnLoad: false })
await mermaid.run()
</script>

<template>
  <Layout />
</template>