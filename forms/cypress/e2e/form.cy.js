describe("preencher formulário", () => {
  it("passes", () => {
    cy.task("log", "Dado que a página inicial está carregada");

    cy.visit("/formulario");
    cy.get("h4").should(
      "have.text",
      "Mentoria de Automação - Formulário de teste"
    );

    cy.task("log", "Quando preencho o formulário");

    cy.get("#id_campo_nome").type("Test Name");
    cy.get("#id_campo_sobrenome").type("Test Sobrenome");
    cy.get("#id_campo_email").type("test@test.com");
    cy.get("#id_campo_descricao").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );

    cy.get("#id_Linkedin").click();

    cy.get("#id_campo_linguagemProgramacaoSimples").select("javascript");
    cy.get("#mui-component-select-linguagemProgramacao").click();
    cy.get(".MuiList-root > li").eq(1).click();

    cy.get('[data-testid="id_campo_multiplaSelecao"]').type(
      "python{downarrow}{enter}javascript{downarrow}{enter}"
    );
    cy.get('[class="MuiChip-label"]').should("be.visible", "PTTHON,JAVASCRIPT");

    cy.get("#id_checkbox_cypress").check().should("be.checked");
    cy.get("#id_checkbox_selenium").check().should("be.checked");

    cy.get('[data-testid="testId_file"]')
      .selectFile(
        "C:/Users/willa/Dev/Automation-Tests/To-Practice-Cypress/To-Pratice-Cypress/forms/Cypress - Um guia abrangente para iniciantes.png"
      )
      .should(
        "have.value",
        "C:\\fakepath\\Cypress - Um guia abrangente para iniciantes.png"
      );

    cy.get('[data-testid="btn_confirm"]').click();

    cy.get('[role="alert"]').should(
      "be.visible",
      "Dados enviados com sucesso. Clique no botão RESETAR para reiniciar o formulário."
    );
  });
});
