<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resources</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
  import AddResource from '@/components/learning-resources/AddResource';
  import StoredResources from '@/components/learning-resources/StoredResources';

  export default {
  name: 'TheResources',
  components: { StoredResources, AddResource },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addNewResource: this.addResource,
      deleteResource: this.deleteResource,
    }
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: title,
        title,
        description,
        link
      }

      this.storedResources.push(newResource);
      this.setSelectedTab('stored-resources')
    },
    deleteResource(id) {
      const resIndex = this.storedResources.findIndex(resource => resource.id === id);
      this.storedResources.splice(resIndex, 1);
    }
  }
};
</script>

<style scoped>

</style>
