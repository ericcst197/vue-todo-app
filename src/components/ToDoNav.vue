<template>
    <nav v-if="displayNav()">
        <p class="item-left">{{ showTaskLeft() }}</p>
        <todo-sort v-if="displayDesktop()"></todo-sort>
        <button class="clear-complete">Clear Completed</button>
    </nav>
</template>

<script>
export default {
    props:{
        taskLeft:{
            type:[Array,Object],
        },
        displayDesktop:{ 
            type: Function 
        }
    },
    methods:{
        showTaskLeft(){
            let taskLeft = this.taskLeft.filter(task=> task.isCompleted === false).length
            return taskLeft > 1 ? 
            `${taskLeft} items left` :  
            `${taskLeft} item left`
        },
        displayNav(){
            return this.taskLeft.length > 0
        }
    }
}
</script>