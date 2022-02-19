Feature: List of Teams
  As a business user, I would like to make a record of all teams which are playing today

  Background: User is on BBC football page

  @Smoke
  Scenario: Output all team names with a match today
    Given User is on BBC football page
    When Today's date is selected
    Then I can see the list of matches

