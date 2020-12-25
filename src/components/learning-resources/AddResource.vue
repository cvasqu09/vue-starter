<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="inputTitle"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" rows="3" v-model="inputDescription"/>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" v-model="inputLink"/>
      </div>
      <base-button type="submit">Save</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  name: 'AddResource',
  inject: ['addNewResource'],
  data() {
    return {
      inputTitle: '',
      inputDescription: '',
      inputLink: ''
    };
  },
  methods: {
    submitData() {
      this.addNewResource(this.inputTitle, this.inputDescription, this.inputLink);
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
