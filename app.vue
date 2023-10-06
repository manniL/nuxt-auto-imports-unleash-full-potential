<script setup lang="ts">
const now = new Date()
const tomorrow = addDays(now, 1)
</script>
<template>
  <AppTest />
  <DefaultEntry />
  {{ PI }}
  {{ theAnswerToEverything() }}
  {{ tomorrow }}
</template>