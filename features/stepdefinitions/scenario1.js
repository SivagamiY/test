const { When, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let response;
let startTime;

When("a GET request is made to {string}", async function (url) {
  startTime = new Date();
  this.response = await supertest(url).get("");
});

Then(
  "the HTTP status code of the response should be {int}",
  function (statusCode) {
    assert.equal(this.response.status, statusCode);
  }
);

Then(
  "the response time of the request should be below {int} milliseconds",
  function (maxResponseTime) {
    if (!this.response) {
      throw new Error(
        "Response object not found. Make sure the request step is executed."
      );
    }

    const responseTime = new Date() - startTime;

    console.log("Response Time:", responseTime);

    assert.ok(
      responseTime < maxResponseTime,
      `Response time exceeded ${maxResponseTime} milliseconds`
    );
  }
);
