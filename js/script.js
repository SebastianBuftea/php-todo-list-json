const { createApp } = Vue;
createApp({
    data() {
        return {
            todoList: ['lavare', 'pulire', 'cucinare'],
            todoItem: '',
        }

    },
    methods: {
        addToDo() {
            this.todoList.push(this.todoItem)
            this.todoItem = ''
        }
    }
}).mount("#app")