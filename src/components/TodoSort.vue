<template>
    <div class="sort-todo">
        <label for="all" :class="allSelected()">All</label>
        <input @change="inputSelected" type="radio" name="sortTodo" id="all" value="all" v-model="radioInput">
        <label for="active" :class="activeSelected()">Active</label>
        <input @change="inputSelected" type="radio" name="sortTodo" id="active" value="active" v-model="radioInput">
        <label for="completed" :class="completedSelected()">Completed</label>
        <input @change="inputSelected" type="radio" name="sortTodo" id="completed" value="completed" v-model="radioInput">
    </div> 
</template>

<script>
export default {
    data(){
        return{
            radioInput: 'all',
        }
    },
    methods:{
        allSelected(){
            console.log(this.radioInput)
            return this.radioInput=== 'all' ? 'active': null
        },
        activeSelected(){
            return this.radioInput=== 'active' ? 'active': null
        },
        completedSelected(){
            return this.radioInput=== 'completed' ? 'active': null
        }
    }
}
</script>