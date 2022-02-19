package uk.co.bbc.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.bbc.pages.LoginPage;

public class LoginPageSteps {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new LoginPage().clickOnsign();
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
       new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String message)  {
        Assert.assertEquals("Error message not display",message,new LoginPage().getErrorMessage());

    }
}
