const { createApp } = Vue;
createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: [],
            todoItem: '',
        }
    },
    mounted() {
        this.readTodoList();
    },
    methods: {
        readTodoList() {
            axios.get(this.apiUrl).then((response) => {
                console.log(response.data)
                this.todoList = response.data;
            })
        },
        addToDo() {
            this.todoList.push(this.todoItem)
            this.todoItem = ''
        }
    }
}).mount("#app")