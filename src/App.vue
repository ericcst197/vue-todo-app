<template>
  <div class="wrapper" :class="{darkmode: inDarkmode}">
    <Background :darkmode="inDarkmode" />
    <section id="container">
      <Header @toggle-darkmode="toggleDarkmode" />
      <main>
        <new-todo></new-todo>
        <todo-list :tasks="tasks"></todo-list>
        <todo-nav :display-desktop="displayDesktop" :task-left="tasks"></todo-nav>
        <div class="shadow-layout"></div>
      </main>
      <todo-sort v-if="displayMobile()" class="mobile"></todo-sort>
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
    'Attribution': TheAttribution,
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
        },
      ],
      windowWidth: window.screen.width,
    }
  },provide(){
    return{
      toggleUrgent: this.toggleUrgent,
      toggleComplete: this.toggleComplete,
      deleteTask: this.deleteTask,
      darkMode: this.inDarkmode,
      addNewTask: this.addNewTask,
      selectedBtn: this.selectedBtn,
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
      this.tasks.unshift(newTask)
      // console.table(this.tasks)
    },
    toggleComplete(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isCompleted = !identifiedTask.isCompleted
      console.table(this.tasks)
    },
    toggleUrgent(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isUrgent = !identifiedTask.isUrgent
      console.table(this.tasks)
    },
    deleteTask(taskID){
      this.tasks = this.tasks.filter(task => task.id != taskID)
      console.table(this.tasks)
    },
    displayDesktop(media = this.windowWidth){
        return this.tasks.length > 0 && media >= 600
    },
    displayMobile(media = this.windowWidth){
        return this.tasks.length > 0 && media < 600
    },
    myEventHandler(e) {
       let width =  e.target.screen.width
       this.windowWidth = width
    }
   
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
}
</script>

<style>

</style>
