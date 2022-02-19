package uk.co.bbc.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bbc.utility.Utility;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='qa-match-block']//ul/li")
    List<WebElement> teamList;

    public void printTheTeamList() {
        if (teamList.size() > 0) {
            for (WebElement team : teamList) {
                System.out.println(team.getText());
                log.info("Printing all teams name : " + team.getText());
            }
        } else {
            System.out.println("There is No Match Today");
        }
    }
}
