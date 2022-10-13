<template>
     <main>
        <new-todo :add-new-task="addNewTask"></new-todo>
        <todo-list :tasks="tasks" :selected-sort="selectedSort"></todo-list>
        <todo-nav 
          :display-desktop="displayDesktop"
          :clear-complete="clearComplete" 
          :task-left="tasks">
        </todo-nav>
        <div class="shadow-layout"></div>
      </main>
      <todo-sort v-if="displayMobile()" class="mobile"></todo-sort>
</template>

<script>
export default {
  props:['windowWidth'],
  data(){
    return {
      tasks: [],
      selectedSort : 'all',
    }
  },
  provide(){
    return {
      toggleUrgent: this.toggleUrgent,
      toggleComplete: this.toggleComplete,
      deleteTask: this.deleteTask,
      selectedSort: this.activateSort,
    }
  },
  methods:{
    addNewTask(task){
      const newTask = {
        id : new Date().getTime() + '',
        title: task,
        isCompleted : false,
        isUrgent: false,
      }
      this.tasks.unshift(newTask)
    },
    toggleComplete(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isCompleted = !identifiedTask.isCompleted
    },
    toggleUrgent(taskID){
      const identifiedTask = this.tasks.find(task => task.id === taskID)
      identifiedTask.isUrgent = !identifiedTask.isUrgent
      this.sortUrgentTasks()
    },
    deleteTask(taskID){
      this.tasks = this.tasks.filter(task => task.id != taskID)
    },
    sortUrgentTasks(){
      const urgentTasks = this.tasks.filter(task => task.isUrgent )

      if(urgentTasks.length){
        this.tasks.sort((a, b) => Number(b.id) - Number(a.id))
                  .sort((a, b) => Number(b.isUrgent) - Number(a.isUrgent))
      } else this.tasks.sort((a, b) => Number(b.id) - Number(a.id))
    },
    activateSort(e){
      this.selectedSort = e.target.value
    },
    clearComplete(){
      this.tasks = this.tasks.filter(task => !task.isCompleted) 
    },
    displayDesktop(media = this.windowWidth){
      return this.tasks.length > 0 && media >= 600
    },
    displayMobile(media = this.windowWidth){
      return this.tasks.length > 0 && media < 600
    },
  }
}
</script>