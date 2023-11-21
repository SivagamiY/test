const { Given, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let response;

Given("a GET request is made to this url {string}", async function (url) {
  response = await supertest(url).get("");
  //console.log("API Response Body:", response.body);
});

Then(
  "the {string} field in {string} is never null or empty for any schedule item",
  function (fieldName, parentField) {}
);
