/// <reference types="cypress" />

export {};

describe('<Home />', () => {
  context('Visit home', () => {
    it('should visit home page', () => {
      cy.visit('/');
    });
  });
});
