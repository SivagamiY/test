const { Given, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let apiResponse;

Given(
  "a GET request to the API endpoint for scenario {int} with URL {string}",
  async function (scenarioNumber, url) {
    const modifiedUrl = `${url}/${scenarioNumber}`;
    apiResponse = await supertest(modifiedUrl).get("/");
  }
);

Then(
  "the {string} value in the response headers is verified",
  function (headerName) {
    const dateHeaderValue = apiResponse.headers[headerName.toLowerCase()];

    assert.ok(
      dateHeaderValue,
      `Response headers do not contain a "${headerName}" value.`
    );
  }
);
