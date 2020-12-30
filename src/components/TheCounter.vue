<template>
  <h3>{{ count }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheCounter',
  computed: {
    ...mapGetters('counter', ['count'])
  },
};
</script>

<style scoped>

</style>
