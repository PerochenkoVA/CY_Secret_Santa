//const invalidEmailData = require("../fixtures/InvalidEmail.json")
describe('Secret Santa third test of registration page', () => {
beforeEach(() => {
cy.visit('/register')
})
it.only('valid user data', () => {
cy.enterUserName('ABC')
//cy.get(':nth-child(3) > .frm')
//.click()
//.type()
cy.enterUserEmail('Galina123@gmail.com')
cy.get('.btn-main').click()
cy.request('/api/register?redirect=%2F')
cy.get('[class="picture-notice__title txt-h3--semi txt"]').should('have.text','Письмо отправлено!')
})
it('invalid user email', () => {
cy.get(':nth-child(4) > .frm')
.click()
.type('plaintextaddress')
cy.get(':nth-child(3) > .frm')
.click()
.type('Abc')
cy.get('.frm-wrapper__top__error').should('be.visible')
})
it('invalid user name', () => {
cy.get(':nth-child(4) > .frm')
.click()
.type('TestUser1@mail.com')
cy.get(':nth-child(3) > .frm')
.click()
.type(' ')
cy.get(':nth-child(4) > .frm')
.click()
cy.get('.frm-wrapper__top__error').should('be.visible')
})
})

