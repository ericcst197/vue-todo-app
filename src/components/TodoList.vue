<template>
     <ul>
          <todo-item v-for="task in tasks" :key="task.id"
            :id="task.id"
            :title="task.title"
            :is-completed="task.isCompleted"
            :is-urgent="task.isUrgent">
          </todo-item>
    </ul>
</template>

<script>
export default {
    props:{
        tasks:{
            type: Array
        }, 
        displayCategories:{
            type: Function
        }
    }
}
</script>