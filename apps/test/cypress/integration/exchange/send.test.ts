describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0x3c5abAFB2bad7998A5BfFB21191De2E20AF1F9D5',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0x3c5abAFB2bad7998A5BfFB21191De2E20AF1F9D5',
    )
  })
})
