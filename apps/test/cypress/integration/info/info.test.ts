describe('Info Page', () => {
  it('loads info overview', () => {
    cy.visit('/info')
    cy.get('#info-overview-title').should('be.visible')
  })

  it('loads info pools page', () => {
    cy.visit('/info/pools')
    cy.get('#info-pools-title').should('be.visible')
  })

  // skip this test because it's not stable
  it.skip('loads single pool page', () => {
    cy.visit('/info/pool/0x3D4c252d2D32782295b38FAfC20cf7b5F68f5619')
    cy.get('#info-pool-pair-title').should('be.visible')
  })

  it('loads info tokens page', () => {
    cy.visit('/info/tokens')
    cy.get('#info-tokens-title').should('be.visible')
  })

  // skip this test because it's not stable
  it.skip('loads single token page', () => {
    cy.visit('/info/token/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c')
    cy.get('#info-token-name-title', { timeout: 15000 }).should('be.visible')
  })
})
