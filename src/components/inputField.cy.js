import InputField from './inputField.vue'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { useTodoListStore } from "../store/useTodoListStore";

beforeEach(() => {
  // creates a fresh pinia and make it active so it's automatically picked
  // up by any useStore() call without having to pass it to it:
  // `useStore(pinia)`

  setActivePinia(createPinia())
  const store = useTodoListStore()
  cy.mount(InputField)
})

describe('<InputField />', () => {


  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.focused()


  })

  it('accept input', () => {
    const task = "Clear The Dustbin Task"

    cy.get('input[type="text"]')
      .type(task)
      .should('have.value', task)
  })

 

})