<template>
  <form @submit.prevent="submitTask">
    <input type="text" name="input-to-do" id="input-to-do" placeholder="Create a new todo..." v-model="enteredTask">
    <button>Add</button>
  </form> 
</template>

<script>
export default {
  data(){
    return {
      enteredTask : '',
    }
  },
  methods:{
    submitTask(){
      this.$emit('submit-task', this.enteredTask)
      this.enteredTask = ''
    }
  }
}
</script>