Feature: List of Teams
  As a business user, I would like to make a record of all teams which are playing today

  Background: User is on BBC football page


  Scenario: Output all team names with a match today
    Given User is on BBC football page
    When  User click on date
    Then User should be able to see list of all matches for that date

