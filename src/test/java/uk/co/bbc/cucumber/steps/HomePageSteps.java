package uk.co.bbc.cucumber.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.bbc.pages.HomePage;

public class HomePageSteps {

    @Given("^User is on BBC football page$")
    public void userIsOnBBCFootballPage() {

    }

    @When("^Today's date is selected$")
    public void todaySDateIsSelected() {
    }

    @Then("^I can see the list of matches$")
    public void iCanSeeTheListOfMatches() {
        new HomePage().printTheTeamList();
    }

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }
}
