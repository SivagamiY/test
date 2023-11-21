const { Given, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let apiResponse;

Given("a valid GET request to {string}", async function (url) {
  apiResponse = await supertest(url).get("/");
});

Then(
  "only one episode in the list has {string} field in {string} as true",
  function (fieldName, parentField) {
    const data = apiResponse.body.schedule.elements;

    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid response structure");
    }

    let countLiveTrue = 0;

    for (const item of data) {
      if (item[parentField] && item[parentField][fieldName] === true) {
        countLiveTrue++;
      }
    }

    assert.strictEqual(
      countLiveTrue,
      1,
      `Expected only one item to have "${fieldName}" field in "${parentField}" as true, but found ${countLiveTrue}.`
    );
  }
);
