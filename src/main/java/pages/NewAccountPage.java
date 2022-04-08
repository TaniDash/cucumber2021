package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage {
	WebDriver driver;

	public NewAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//h5[text()='Manage Accounts']")
	WebElement MANAGE_ACCOUNT_ELEMENT;

	public String verifyAccountSuccessful() {
		Assert.assertEquals(MANAGE_ACCOUNT_ELEMENT.getText(), "Manage Accounts");
		return (MANAGE_ACCOUNT_ELEMENT.getText());

	}

}
