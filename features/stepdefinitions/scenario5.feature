Feature: Validating the "transmission_start" and "transmission_end" date

  Through this feature verifying the "transmission_start" and "transmission_end" date

  Scenario: Verify "transmission_start" date is before "transmission_end" date
    Given a new GET request for this url "https://testapi.io/api/RMSTest/ibltest"
    Then the "transmission_start" date is before the "transmission_end" date
