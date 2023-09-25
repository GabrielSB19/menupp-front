describe("HomeScreen", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/#/");

    cy.get(".q-field--outlined > .q-field__inner > .q-field__control").type(
      "test@gmail.com"
    );
    cy.get(".q-field--filled > .q-field__inner > .q-field__control").type(
      "123456789"
    );
    cy.get(".q-btn").click();
    cy.contains("Iniciando sesión...");
  });

  it("frontpage can be opened", () => {
    cy.get(".container").should("exist");
    cy.contains("Welcome, Upload and Download the pictures you want");
    cy.get(".file-input");
    cy.get("#q-app > :nth-child(3)");
  });

  it("image can be uploaded", () => {
    const fileName =
      "C:/Users/semillero/Desktop/Projects/menupp-f/cypress/fixtures/Test1.png";

    cy.get('input[type="file"]').selectFile(fileName);

    cy.get(".image-card")
      .should("exist")
      .then(($imageCard) => {
        if ($imageCard.length > 0) {
          cy.get(".image-card").children().should("have.length.gt", 0);
        } else {
          cy.get(".image-card").children().should("have.length", 0);
        }
      });
  });
  it("image can be pick", () => {
    cy.wait(1000);
    cy.get(":nth-child(1) > .card-image").click();
    cy.get(".modal-dialog").should("exist");

    cy.get(".modal-dialog").should("be.visible");

    cy.get(".q-card__actions > .q-btn").click();
    cy.get(".modal-dialog").should("not.exist");
  });

  it("image can be Download", () => {
    cy.on("fail", (err, runnable) => {
      console.log(err.message);
      return false;
    });
    cy.get(":nth-child(1) > .card-image").click();
    cy.get(".modal-dialog").should("exist");
    cy.get(".modal-dialog").should("be.visible");

    cy.get("a > .q-btn").click();
    cy.reload();
    cy.get(".modal-dialog").should("not.exist");
  });

  it("image can be deleted", () => {
    cy.get(":nth-child(1) > .card-image").click();
    cy.get(".modal-dialog").should("exist");
    cy.get(".image-card")
      .should("exist")
      .then(($imageCard) => {
        let imgs = $imageCard.length;
        cy.get(".bg-red").click();
        if (imgs > 1) {
          cy.get(".image-card")
            .children()
            .should("have.length", imgs - 1);
        } else {
          cy.get(".image-card").should("not.exist");
        }
      });
  });
});
