Feature: Validating id field and type field 

 Through this feature verifying the response of the "id" field and "type" field

  Scenario: Verify "id" field is never null or empty for all items
    Given a GET request to 'https://testapi.io/api/RMSTest/ibltest'
    Then the "id" field is never null or empty for all items

  Scenario: Verify "type" in "episode" for every item is always "episode"
    Given an another GET request to 'https://testapi.io/api/RMSTest/ibltest'
    Then the "type" in "episode" is always "episode" for every item