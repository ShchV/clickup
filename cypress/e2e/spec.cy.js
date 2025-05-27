describe('Test goals on clickup', () => {
  it('CRUD operations on goals', () => {
    cy.GetGoalList().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('goals');
    })

    cy.CreateGoal().then((responseObject) => {
      cy.wrap(responseObject.body.goal.id).as('goalid');
    })

    cy.GetCreatedGoal().then((response) => {
      expect(response.status).to.eq(200);
    })

    cy.UpdateGoal().then((response) => {
      expect(response.status).to.eq(200);
    })

    cy.DeleteGoal().then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Get goal with invalid token ', () => {
    cy.fixture('example.json').then((content) => {
      cy.CreateList(content).then((responseObject) => {
        cy.wrap(responseObject.body.id).as('listid');
      })
    })

    cy.GetList().then((response) => {
      expect(response.status).to.eq(401);
    })

    cy.DeleteList().then((response) => {
      expect(response.status).to.eq(200);
    })
  })
})




