/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const {
  resetDB,
} = require("../../__tests__/__mocks__/fakeData/db/utils/reset-db");
const { addBand } = require("../../lib/features/bands/queries");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    "db:reset": () => resetDB().then(() => null),
    addBand: (newBand) => addBand(newBand).then(() => null),
  });
};
