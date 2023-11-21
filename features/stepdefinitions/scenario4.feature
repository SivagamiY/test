Feature: Validating the live field in episode
  
  Through this feature verifying the "live" field in "episode"

  Scenario: Verify only one episode in the list has "live" field in "episode" as true
    Given a valid GET request to "https://testapi.io/api/RMSTest/ibltest"
    Then only one episode in the list has "live" field in "episode" as true
