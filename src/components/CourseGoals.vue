<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :goal="goal" testValue="my test value"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CourseGoals",
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue']
    }
  },
}
</script>

<style scoped>

</style>
