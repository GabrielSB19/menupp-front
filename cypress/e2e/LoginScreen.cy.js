describe("LoginScreen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/#/login");
  });
  it("frontpage can be opened", () => {
    cy.get(".contained-login > :nth-child(1)").contains("Login Screen");
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").contains(
      "Email"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control");
    cy.get(".q-field__messages > div").contains("Password");
    cy.get(".q-btn");
    cy.get(".p-signup").contains("¿No tienes cuenta? Regístrate");
  });

  it("go to the signup page", () => {
    cy.get(".p-signup").click();
  });

  it("user can't do login", () => {
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test123456@gmail.com"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type(
      "123456789"
    );
    cy.get(".q-btn").click();
    cy.contains("Ha ocurrido un error en tu registro.");
  });

  it("user can do login", () => {
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test@gmail.com"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type(
      "123456789"
    );
    cy.get(".q-btn").click();
    cy.contains("Iniciando sesión...");
  });
});
