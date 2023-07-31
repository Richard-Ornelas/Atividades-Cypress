/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade endereço - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario,dados.senha)

        })
        
    });


    it('Deve fazer o cadastro do faturaento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Richard', 'Nícolas', 'Ebac', 'Brasil', 'Rua babaçu', '23560', 'Brasília', 'Distrito Federal', '71928-000', '61996321576', 'richardnicolas@gmail.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        
    });

    it('Deve fazer o cadastro do faturaento com sucesso - usando arquivos de dados', () => {
        cy.fixture('endereco').then(dados=>{
            enderecoPage.editarEnderecoFaturamento(
                dados[1].nome,
                dados[1].sobrenome,
                dados[1].empresa,
                dados[1].pais,
                dados[1].endereco,
                dados[1].numero,
                dados[1].cidade,
                dados[1].estado,
                dados[1].cep,
                dados[1].telefone,
                dados[1].email
                )
        })
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        
    });

    
});