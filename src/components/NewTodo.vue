<template>
  <invalid-alert v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
     <template #default>
            <p>Please enter a title for the task to do.</p>
      </template>
      <template #actions>
          <button @click="confirmError">Okay</button>
      </template>
  </invalid-alert>
  <form @submit.prevent="submitTask">
    <input type="text" name="input-to-do" id="input-to-do" placeholder="Create a new todo..." v-model.trim="enteredTask">
    <button>Add</button>
  </form> 
</template>

<script>
export default {
  inject:['addNewTask'],
  data(){
    return {
      enteredTask : '',
      inputIsInvalid: false,
    }
  },
  methods:{
    submitTask(){
      // this.$emit('submit-task', this.enteredTask)
      if(this.enteredTask === '') {
        this.inputIsInvalid = true
        return
      }

      this.addNewTask(this.enteredTask)
      this.enteredTask = ''
    },   
    confirmError(){
      this.inputIsInvalid = false
    }
  }
}
</script>