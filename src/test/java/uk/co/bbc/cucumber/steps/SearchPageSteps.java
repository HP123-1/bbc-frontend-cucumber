package uk.co.bbc.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.bbc.pages.HomePage;
import uk.co.bbc.pages.SearchPage;

/**
 * Created by Jay Vaghani
 */
public class SearchPageSteps {

    @When("^I search the \"([^\"]*)\"$")
    public void iSearchThe(String text)  {
        new SearchPage().searchTheArticle(text);
    }

    @Then("^I should see the first and last article$")
    public void iShouldSeeTheFirstAndLastArticle() {
        new SearchPage().printFirstAndSecondArticle();

    }
}
