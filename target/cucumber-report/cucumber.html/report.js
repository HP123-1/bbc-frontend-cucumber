$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 12,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "It needs to be eight characters or more."
      ],
      "line": 13,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "It needs to be eight characters or more."
      ],
      "line": 14,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "It needs to be eight characters or more."
      ],
      "line": 15,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12677249600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 289002000,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 246991200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "loginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 3013684100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "loginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 193153500,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 124657900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It needs to be eight characters or more.",
      "offset": 32
    }
  ],
  "location": "loginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 73356100,
  "status": "passed"
});
formatter.after({
  "duration": 1665832700,
  "status": "passed"
});
formatter.before({
  "duration": 9874277200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 152903400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "loginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 2263852200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "loginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 197804700,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 121190300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It needs to be eight characters or more.",
      "offset": 32
    }
  ],
  "location": "loginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 105003500,
  "status": "passed"
});
formatter.after({
  "duration": 2006511900,
  "status": "passed"
});
formatter.before({
  "duration": 9698717200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 351044300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "loginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 2328265900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "loginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 225663700,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 160051100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It needs to be eight characters or more.",
      "offset": 32
    }
  ],
  "location": "loginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 72449400,
  "status": "passed"
});
formatter.after({
  "duration": 1556006800,
  "status": "passed"
});
formatter.uri("sports.feature");
formatter.feature({
  "line": 1,
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10207997800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports;use-the-search-option-to-find-all-articles-related-to-‘sports’.-output-the-first-heading-and-the-last-heading-returned-on-the-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on search option \"sports\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sports",
      "offset": 26
    }
  ],
  "location": "MyStepsearch.iClickOnSearchOption(String)"
});
formatter.result({
  "duration": 257764800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsearch.iShouldNavigateToPageSuccessfully()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.after({
  "duration": 1752619100,
  "status": "passed"
});
});