import FilterButton from './filterButton.vue'

describe('<FilterButton />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(FilterButton)
  })
  it('supports an "initial" prop to set the name', () => {
    const onClick = cy.spy().as('filter')
    cy.mount(FilterButton, {
      props: {
        title: "Dimingo", onClick: "filter"
      }
    })
    cy.get('[data-cy= title]').should('have.text', 'Dimingo')
    
  })

})



