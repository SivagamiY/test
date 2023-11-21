Feature: HTTP status code and the response time

  Through this feature verifying HTTP status code response is 200 and the response time of the request is below 1000 milliseconds

  Scenario: Verify HTTP status code and the response time
    When a GET request is made to 'https://testapi.io/api/RMSTest/ibltest'
    Then the HTTP status code of the response should be 200
    And the response time of the request should be below 1000 milliseconds
