<template>
  <div class="wrapper" :class="{darkmode: inDarkmode}">
    <Background :darkmode="inDarkmode" />
    <section id="container">
      <Header @toggle-darkmode="toggleDarkmode" />
      <main>
        <new-todo @submit-task="addNewTask"></new-todo>
        <todo-list 
          :tasks="tasks" 
          :displayCategories="displayCategories">
        </todo-list>
        <todo-nav v-if="displayCategories()" :task-left="tasks"></todo-nav>
        <div class="shadow-layout"></div>
      </main>
      <div v-if="displayCategories()" class="sort-todo mobile">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div> 
    </section>
    <Attribution />
 </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheBackground from "./components/TheBackground.vue";
import TheAttribution from "./components/TheAttribution.vue";

export default {
  components:{
    'Header': TheHeader,
    'Background':  TheBackground,
    'Attribution': TheAttribution
  },
  data(){
    return {
      inDarkmode: false,
      tasks: [
        {
          id: '1234',
          title : 'Complete the todo project sdfshfsd gfdsg fds gfdsg dss',
          isCompleted : false,
          isUrgent: false,
        }
      ]
    }
  },provide(){
    return{
      toggleUrgent: this.toggleUrgent,
      toggleComplete: this.toggleComplete,
      deleteTask: this.deleteTask ,
    }
  },
  methods:{
    toggleDarkmode(boolean){
      this.inDarkmode = boolean
    },
    addNewTask(task){
      const newTask = {
        id : new Date().getTime() + '',
        title: task,
        isCompleted : false,
        isUrgent: false,
      }
      this.tasks.push(newTask)
      // console.table(this.tasks)
    },
    toggleComplete(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isCompleted = !identifiedTask.isCompleted
      // console.table(this.tasks)
    },
    toggleUrgent(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isUrgent = !identifiedTask.isUrgent
      // console.table(this.tasks)
    },
    deleteTask(taskID){
      this.tasks = this.tasks.filter(task => task.id != taskID)
      // console.table(this.tasks)
    },
    displayCategories(){
        return this.tasks.length > 0
    }
    
  }
}
</script>

<style>

</style>
