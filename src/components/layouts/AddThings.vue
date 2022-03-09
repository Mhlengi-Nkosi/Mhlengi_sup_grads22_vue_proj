<template>
  <base-card>
    <h2>Add to List</h2>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" ref="nameInput" />
      </div>
      <div class="form-control">
        <label for="title">Keywords</label>
        <input id="keywords" name="keywords" type="text" ref="keywordsInput" />
      </div>
      <base-button type="submit">Add Thing</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["addThing"],
  methods: {
    submitData() {
      const enteredName = this.$refs.nameInput.value;
      const enteredKeywords = this.$refs.keywordsInput.value;

      this.addThing(enteredName, enteredKeywords);
    },
  },
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