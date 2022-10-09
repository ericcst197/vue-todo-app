<template>
    <nav>
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
            return this.taskLeft.length > 1 ? 
            `${this.taskLeft.length} items left` :  
            `${this.taskLeft.length} item left`
        },
    }
}
</script>