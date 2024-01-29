const { createApp } = Vue;
createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: [],
            todoItem: '',
            todoDeleted: null,
            richiesta: '',
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
        },
        deleteTodo(index) {
            if (confirm("sei sicuro di volerlo eliminare?")) {
                const data = {
                    todoDeleted: index,
                }

                axios.post(this.apiUrl, data, {
                    headers: { 'Content-type': 'multipart/form-data' }
                }).then((response) => {
                    this.todoDeleted = null;
                    this.todoList = response.data;
                })

            }
        },

    }
}).mount("#app")