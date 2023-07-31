/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade pré-cadastro', () => {
    

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré-cadastro com sucesso', () => {
        let primeiroNome = faker.name.firstName()
        let email = faker.internet.email(primeiroNome)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('senha@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()  
        
    });

    it('Deve completar o cadastro usando Comando customizado', () => {
        let email2 = faker.internet.email()
        cy.cadastro(email2,'senha@123', 'Fabio', 'Moura')
        
    });
});