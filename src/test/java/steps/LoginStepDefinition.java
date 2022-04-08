package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase{
	LoginPage loginPage;

	
	@Before
	public void beforeRun() {
		initDriver();
		loginPage= PageFactory.initElements(driver, LoginPage.class);
	}
	
	
	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() throws Throwable {
	driver.get("https://www.techfios.com/billing/?ng=admin/");	
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		loginPage.enterUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
	loginPage.enterPassword(password);
	}

	@When("^User clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
	Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}

	@When("^User enters \"([^\"]*)\" from database$")
	public void user_enters_from_database(String arg1) throws Throwable {
		
	}

}
