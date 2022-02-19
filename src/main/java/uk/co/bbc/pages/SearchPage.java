package uk.co.bbc.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bbc.utility.Utility;

import java.util.List;

public class SearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchPage.class.getName());

    public SearchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "orb-search-button")
    WebElement searchButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-input']")
    WebElement inputField;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement inputButton;

    @CacheLookup
    @FindBy(xpath = "//ul[@role='list']//p/span")
    List<WebElement> articleList;

    public void searchTheArticle(String search) {
        clickOnElement(searchButton);
        sendTextToElement(inputField, search);
        log.info("Clicking on login link : " + searchButton.toString());
        clickOnElement(inputButton);
    }

    public void printFirstAndSecondArticle() {
        System.out.println(articleList.get(0).getText());
        System.out.println(articleList.get(articleList.size() - 1).getText());
        log.info("The first article is : " + articleList.get(0).getText());
        log.info("The Second article is : " + articleList.get(articleList.size() - 1).getText());
    }

}
