Feature: Validating the "title" field in "episode"
  
  Through this feature verifying the "title" field in "episode"

  Scenario: Verify "title" field in "episode" is never null or empty for any schedule item
    When a GET request is made to this url 'https://testapi.io/api/RMSTest/ibltest'
    Then the "title" field in "episode" is never null or empty for any schedule item
