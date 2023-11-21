# BBC Software Engineer in Test Take Home Test

This project comprises JavaScript-based Cucumber step definitions designed for automated API testing with the Supertest library. The included scenarios comprehensively validate different aspects of API responses.

### Prerequisites

Before running the test cases, make sure you have the following installed:

* Node.js
* npm

## Installation

##### Install the project dependencies:

```bash
npm install
npm install --save-dev supertest cucumber
```
## Running the Tests
##### To execute all the test scenarios, use the following command:

```bash
npm test
```
This will run all the test scenarios defined in the project.

## Variables 

| Variable Name    | Usage                                                                                           |
|-------------------|-------------------------------------------------------------------------------------------------|
| **scenario1**            |                                                                                                 |
| `response`        | Stores the API response object obtained from making a GET request. Used for response validation.|
| `startTime`       | Records the start time before making a GET request for calculating response time.              |
| **scenario2**            |                                                                                                 |
| `responseData`    | Stores the body of the API response obtained from making a GET request in scenarios 2 and 4.   |
| `channel`         | Represents the channel information extracted from the API response in scenario 2.              |
| `elements`        | Represents the array of elements extracted from the API response in various scenarios.        |
| `item`            | Represents an individual element from the array of elements in various scenarios.              |
| **scenario3**            |                                                                                                 |
| `response`        | Stores the API response object obtained from making a GET request in scenario 3.              |
| **scenario4**            |                                                                                                 |
| `apiResponse`     | Stores the API response object obtained from making a GET request in scenario 4.              |
| `data`            | Represents an array of schedule elements extracted from the API response in scenario 4.       |
| **scenario5**            |                                                                                                 |
| `apiResponse`     | Stores the API response object obtained from making a GET request in scenario 5.              |
| `schedule`        | Represents the schedule information extracted from the API response in scenario 5.           |
| **scenario6**            |                                                                                                 |
| `apiResponse`     | Stores the API response object obtained from making a GET request in scenario 6.              |
| `dateHeaderValue` | Represents the value of a specified header extracted from the response in scenario 6.         |
| **scenario7**            |                                                                                                 |
| `response`        | Stores the API response object obtained from making a GET request in scenario 7.              |
| `errorObject`     | Represents the error object extracted from the API response in scenario 7.                   |
