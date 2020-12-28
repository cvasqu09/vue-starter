<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button>Load Submitted Experiences</base-button>
      </div>
      <ul v-if="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>Loading...</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false
    };
  },
  methods: {
    loadExperiences() {
      fetch(process.env['VUE_APP_FIREBASE_ENDPOINT']).then((res) => {
        if (res.ok) {
          return res.json();
        }
        this.isLoading = false;
      }).then((res) => {
        const results = [];

        for(let id in res) {
          results.push({
            id: id,
            name: res[id].name,
            rating: res[id].rating,
          })
        }

        this.results = results;
      }).finally(() => this.isLoading = false);
    }
  },
  mounted() {
    this.loadExperiences()
  },
  components: {
    SurveyResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
