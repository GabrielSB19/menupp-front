describe("RegisterScreen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/#/signup");
  });

  it("frontpage can be opened", () => {
    cy.get(".contained-register > :nth-child(1)").contains("Sign up Screen");
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").contains(
      "Email"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control");
    cy.get(".q-field__messages > div").contains("Password");
    cy.get(".q-btn");
    cy.get(".p-login").contains("Ya tengo una cuenta");
  });

  it("go to the login page", () => {
    cy.get(".p-login").click();
  });

  it("user can't do register with wrong email", () => {
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type(
      "123456789"
    );
    cy.get(".q-btn").click();
    cy.contains("Ha ocurrido un error en tu registro.");
  });

  it("user can't do register with wrong password", () => {
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test@gmail.com"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type("12");
    cy.get(".q-btn").click();
    cy.contains("Ha ocurrido un error en tu registro.");
  });

  it("user can do register", () => {
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test@gmail.com"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type(
      "123456789"
    );
    cy.get(".q-btn").click();
    cy.contains("Se ha registrado correctamente.");
  });
});

/*

  it("user can do login", () => {
    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test@gmail.com"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type(
      "123456789"
    );
    cy.get(".q-btn").click();
    cy.contains("Ha ocurrido un error en tu registro.");
  });
*/
