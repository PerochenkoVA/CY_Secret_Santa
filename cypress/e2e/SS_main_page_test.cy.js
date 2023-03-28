describe('Secret Santa main page test', () => {
  beforeEach(() => {
      cy.visit('https://santa-secret.ru/')
  })

  it('has three secondary buttons', () => {
    cy.get('.btn-secondary').should('have.length', 3)
})
})