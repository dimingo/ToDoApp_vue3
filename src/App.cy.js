import App from './App.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from './store/useTodoListStore'

beforeEach(() => {

  setActivePinia(createPinia())
  
  cy.mount(App)
})


describe('<App />', () => {
  context('Form Submission', () => {
    it.only('Adds a new todo on submit', () => {
      const task = "Clear The Dustbin Task"
      cy.get('input[type="text"]')
      .type(task)
      .should('have.value', task)
      cy.get('button[type="submit"]')
      .click()
      .should('have.value', '')
      cy.get('div')
      .should('contain', task)
  
      

    })
  })
 

 
})