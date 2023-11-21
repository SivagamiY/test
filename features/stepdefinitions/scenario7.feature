Feature: Validating the HTTP status code and error object property

  Through this feature verifying the HTTP status code and error object property

  Scenario: Verify the GET request to a specific date
    Given a GET request to "https://testapi.io/api/RMSTest/ibltest/2023-09-11" for scenario 7 
    Then the HTTP status code of the response is 404
    And the error object has the properties 'details' and 'http_response_code'
