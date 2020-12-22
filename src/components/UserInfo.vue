<template>
  <BaseCard>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template v-slot:content>
      <p>{{ infoText }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import BaseBadge from "@/components/BaseBadge";
export default {
  components: {BaseCard, BaseBadge},
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

</style>
