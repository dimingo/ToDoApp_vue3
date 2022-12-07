import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    // state
    state: () => ({
        todoList: [],
        id: 0,
    }),

    // getters
    // actions
    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false })
        },
        deleteTodo(itemID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemID;
            });
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo(itemID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemID
            })
        },


    },

})