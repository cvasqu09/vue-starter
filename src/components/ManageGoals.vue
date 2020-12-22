<template>
  <h2>Manage Goals</h2>
  <input type="text" :value="enteredGoal"/>
  <button @click="setGoal">Set Goal</button>
  <error-alert v-if="inputIsInvalid">
    <h2>Input error</h2>
    <button @click="resetError">Okay</button>
  </error-alert>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert";

export default {
  name: "ManageGoals",
  components: {
    ErrorAlert
  },
  data() {
    return {
      enteredGoal: '',
      inputIsInvalid: false
    }
  },
  methods: {
    setGoal() {
      if (this.enteredGoal === '') {
        this.inputIsInvalid = true
      }
    },
    resetError() {
      this.inputIsInvalid = false
    }
  },
}
</script>

<style scoped>

</style>
