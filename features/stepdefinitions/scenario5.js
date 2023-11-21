const { Given, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let apiResponse;

Given("a new GET request for this url {string}", async function (url) {
  apiResponse = await supertest(url).get("/");
});

Then(
  "the {string} date is before the {string} date",
  function (startDateField, endDateField) {
    const schedule = apiResponse.body.schedule;

    if (!schedule) {
      throw new Error("Invalid response structure: schedule is missing.");
    }

    if (Array.isArray(schedule)) {
      for (const item of schedule) {
        if (!item.elements || !Array.isArray(item.elements)) {
          throw new Error(
            "Invalid data structure: elements is missing or not an array."
          );
        }

        for (const element of item.elements) {
          compareDates(element, startDateField, endDateField);
        }
      }
    } else if (schedule.elements && Array.isArray(schedule.elements)) {
      for (const element of schedule.elements) {
        compareDates(element, startDateField, endDateField);
      }
    } else {
      throw new Error(
        "Invalid data structure: elements is missing or not an array."
      );
    }
  }
);

function compareDates(item, startDateField, endDateField) {
  const startDate = new Date(item[startDateField]);
  const endDate = new Date(item[endDateField]);

  assert.ok(
    startDate < endDate,
    `Expected "${startDateField}" date to be before "${endDateField}" date, but found ${startDate} and ${endDate}.`
  );
}
