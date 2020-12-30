<template>
  <button @click="authenticate">Login</button>
  <button @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserAuth',
  methods: {
    ...mapActions(['authenticate', 'logout'])
  }
};
</script>

<style scoped>

</style>
