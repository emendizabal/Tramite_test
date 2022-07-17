/// <reference types="cypress" />
 
describe('example to create a new board', () => {
    beforeEach(() => {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhZG0xMjMiLCJpYXQiOjE2NTgwMTcxMzl9.xNOHOpXKoN4wDTr8MtB9zoB_bzaCpHDRevGvOq5WCZo");

       })
  
  
    it('can edit persona', () => {
        
        cy.visit('http://localhost:4200/instituciones')
        cy.get('.btn').click()
        cy.wait(1000)
            cy.get('input[name=nombre]').type('NUR')
            cy.get('#id_tipo_institucion').select(0).invoke('val')
     cy.contains('REGISTRAR').click()
     cy.wait(1000)
     cy.get('.close').click()
     
     })
 

     

    })
  
  
