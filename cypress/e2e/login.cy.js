/// <reference types="cypress" />
const perfil = require ('../fixtures/perfil.json')

context('Funcionalidade Login', ()=>{

    beforeEach(()=>{
        cy.visit('my-account')
    })
    afterEach(()=>{
        cy.screenshot()
    })

    it('Deve fazeer login com sucesso', () =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    })

    //utilizando o arquivo de dados 
    it('Deve fazer o login com sucesso - usando o arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        
    });

    it('Deve fazer o login com sucesso - usando o fixture', () => {
        cy.fixture('perfil').then(dados=>{
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()

        })
        
    });

    it('deve exibir uma mensagem de erro ao inserir o usuario inválido',()=>{
        
        cy.get('#username').type('aluno_ebac@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','o usuário aluno_ebac@teste não está cadastrado neste site')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')

    })
})