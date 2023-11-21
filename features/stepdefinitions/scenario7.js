const { Given, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let response;

Given("a GET request to {string} for scenario 7", async function (url) {
  response = await supertest(url).get("");
  //console.log("API Response Body:", response.body);
});

Then(
  "the HTTP status code of the response is {int}",
  function (expectedStatusCode) {
    assert.ok(response, "No API response received.");

    if (response && response.status !== undefined) {
      assert.strictEqual(
        response.status,
        expectedStatusCode,
        `Expected HTTP status code ${expectedStatusCode}, but found ${response.status}.`
      );
    } else {
      assert.fail('The response object does not have a "status" property.');
    }
  }
);

Then(
  "the error object has the properties {string} and {string}",
  function (property1, property2) {
    assert.ok(response, "No API response received.");

    const errorObject = response.body && response.body.error;

    assert.ok(errorObject, "No error object found in the response.");

    assert.ok(
      errorObject.hasOwnProperty(property1),
      `Error object does not have property "${property1}".`
    );
    assert.ok(
      errorObject.hasOwnProperty(property2),
      `Error object does not have property "${property2}".`
    );
  }
);
