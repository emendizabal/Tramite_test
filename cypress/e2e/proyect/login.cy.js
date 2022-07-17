/// <reference types="cypress" />
describe('example to login', () => {
      
     it('can make a login', () => {
         cy.visit('http://localhost:4200/login')
      
       const email = 'adm123'
       const pass='feche123' 
       cy.get('input[name=username]').type( email)
 
       cy.get('input[name=password]').type( pass)
 
       cy.get('.btn').click()
        
     })
   
     
   })