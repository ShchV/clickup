Cypress.Commands.add('sentRequest', (endpoint, method, body) => {
    cy.request({
        url: endpoint,
        method: method,
        headers: {
            'Authorization': 'pk_188589815_GQV5SCZNP7R59F6UCVRNH72RVMV6N4YA',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })
})

Cypress.Commands.add('invalidtoket', (endpoint, method, body) => {
    cy.request({
        url: endpoint,
        method: method,
        headers: {
            'Authorization': 'pk_1815_GQV5SCZNP7R59F6UCVRNH72RVMV6N4YA',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })
})

Cypress.Commands.add('GetGoalList', () => {
  cy.sentRequest('https://api.clickup.com/api/v2/team/90151114888/goal', 'GET', null, {})
})

Cypress.Commands.add('CreateGoal', () => {
  cy.sentRequest('https://api.clickup.com/api/v2/team/90151114888/goal', 'POST', {
    "multiple_owners": true,
    "owners": [
      188589815
    ],
    'name': 'Test1 goal',
    'due_date': '20260101',
    'description': 'Test description',
    'color': 'blue',
  }, {})
})

Cypress.Commands.add('GetCreatedGoal', () => {
  cy.get('@goalid').then((id) => {
    cy.sentRequest('https://api.clickup.com/api/v2/goal/' + id, 'GET', null, {})
  })
})

Cypress.Commands.add('UpdateGoal', () => {
  cy.get('@goalid').then((id) => {
    cy.sentRequest('https://api.clickup.com/api/v2/goal/' + id, 'PUT', {
      "multiple_owners": true,
      "owners": [
        188589815
      ],
      'name': 'Tes1 goal',
      'due_date': '20260101',
      'description': 'Test description',
      'color': 'blue',
    }, {})
  })
})

Cypress.Commands.add('DeleteGoal', () => {
  cy.get('@goalid').then((id) => {
    cy.sentRequest('https://api.clickup.com/api/v2/goal/' + id, 'DELETE', null, {})
  })
})

Cypress.Commands.add('CreateList', () => {
    cy.sentRequest('https://api.clickup.com/api/v2/folder/90156625817/list', 'POST', {
        'name': "name",
    }, {})
})

Cypress.Commands.add('GetList', () => {
    cy.get('@listid').then((id) => {
        cy.invalidtoket('https://api.clickup.com/api/v2/list/' + id, 'GET', null, {})
    })
})

Cypress.Commands.add('DeleteList', () => {
    cy.get('@listid').then((id) => {
        cy.sentRequest('https://api.clickup.com/api/v2/list/' + id, 'DELETE', null, {})
    })
})