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
            const data = {
                todoItem: this.todoItem
            }
            axios.post(this.apiUrl, data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then((response) => {
                this.todoItem = '';
                this.todoList = response.data;
            })
        }
    }
}).mount("#app")