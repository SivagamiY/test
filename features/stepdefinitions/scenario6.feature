Feature: Validating the "Date" value in the response headers

  Through this feature verifying the "Date" value in the response headers

  Scenario: Verify the "Date" value in the response headers
    Given a GET request to the API endpoint for scenario 6 with URL "https://testapi.io/api/RMSTest/ibltest"
    Then the "Date" value in the response headers is verified