const { Given, Then } = require("cucumber");
const supertest = require("supertest");
const assert = require("assert");

let responseData;

Given("a GET request to {string}", async function (url) {
  const apiResponse = await supertest(url).get("");
  responseData = apiResponse.body;
  //console.log("API Response Body:", apiResponse.body);
});

Then('the "id" field is never null or empty for all items', function () {
  const channel = responseData.schedule.channel;
  const elements = responseData.schedule.elements;

  // Verify "id" field in Channel
  if (!channel.id || channel.id.trim() === "") {
    throw new Error('Channel "id" is null or empty');
  }

  // Verify "id" field in Elements
  for (const item of elements) {
    if (item.id && item.id.trim() !== "") {
      // "id" is present and not empty
    } else if (
      item.episode &&
      item.episode.id &&
      item.episode.id.trim() !== ""
    ) {
      // "id" in episode is present and not empty
    } else if (
      item.versions &&
      item.versions.length > 0 &&
      item.versions[0].id &&
      item.versions[0].id.trim() !== ""
    ) {
      // "id" in versions is present and not empty
    } else {
      throw new Error(
        `Could not find "id" field for an item: ${JSON.stringify(item)}`
      );
    }
  }
});

Given("an another GET request to {string}", async function (url) {
  const apiResponse = await supertest(url).get("");
  responseData = apiResponse.body;
  //console.log("API Response Body:", apiResponse.body);
});

Then('the "type" in "episode" is always "episode" for every item', function () {
  //console.log("API Response:", responseData);

  if (
    !responseData ||
    //!responseData.body ||
    !responseData.schedule ||
    !responseData.schedule.elements
  ) {
    console.error("Invalid response structure:", responseData);
    throw new Error("Invalid response structure");
  }

  const data = responseData.schedule.elements;

  for (const item of data) {
    assert.strictEqual(
      item.episode.type,
      "episode",
      `Field "type" in "episode" is not "episode" for an item: ${JSON.stringify(
        item
      )}`
    );
  }
});
