<template>
  <base-container title="Vuex" v-if="isAuthed">
    <the-counter></the-counter>
    <button @click="increment({amount: 20})">Add 20</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter';
import { mapActions, mapGetters } from 'vuex';
import UserAuth from '@/components/UserAuth';

export default {
  components: {
    UserAuth,
    TheCounter,
    BaseContainer,
  },
  computed: {
    ...mapGetters(['isAuthed'])
  },
  methods: {
    ...mapActions('counter', ['increment'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
