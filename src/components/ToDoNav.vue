<template>
  <nav>
    <p class="item-left">{{ showTaskLeft() }}</p>
    <div class="sort-todo">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
    </div> 
    <button class="clear-complete">Clear Completed</button>
    </nav>
</template>

<script>
export default {
    props:{
        taskLeft:{
            type:[Array,Object],
        },
    },
    data(){
        return {

        }
    },
    methods:{
        showTaskLeft(){
            return this.taskLeft.length > 1 ? `${this.taskLeft.length} items left` :  `${this.taskLeft.length} item left`
        },
    }
}
</script>