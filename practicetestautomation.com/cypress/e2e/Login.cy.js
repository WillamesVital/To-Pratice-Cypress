describe('Test Login', () => {

  beforeEach(function () {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  });

  it('Test case 1: Positive LogIn test', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()

    cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/')
    cy.get('.post-title').should('be.visible')
  })

  it('Test case 2: Negative username test', () => {
    cy.get('#username').type('incorrectUser')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    
    cy.messageError()
  
  });

  it('Test case 3: Negative password test', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('incorrectPassword')
    cy.get('#submit').click()
    cy.messageError()
  });
})