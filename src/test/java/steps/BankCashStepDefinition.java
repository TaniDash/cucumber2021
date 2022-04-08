package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BankCashPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class BankCashStepDefinition extends TestBase {
	LoginPage loginPage;
	DashboardPage dashboardPage;
	BankCashPage bankCashPage;
	NewAccountPage newAccountPage;

	@Before
	public void beforeRun() {
	
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		bankCashPage = PageFactory.initElements(driver, BankCashPage.class);
		newAccountPage= PageFactory.initElements(driver, NewAccountPage.class);
	}

	@Given("^User should land on the Techfios homepage$")
	public void user_should_land_on_the_Techfios_homepage() throws Throwable {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User inserts the username as \"([^\"]*)\"$")
	public void user_inserts_the_username_as(String username) throws Throwable {
		loginPage.enterUserName(username);
	}

	@When("^User inserts the password as \"([^\"]*)\"$")
	public void user_inserts_the_password_as(String password) throws Throwable {
		loginPage.enterPassword(password);
	}

	@When("^User clicks on the \"([^\"]*)\" button$")
	public void user_clicks_on_the_button(String button) throws Throwable {
		switch (button) {
		case "signin":
			loginPage.clickSignInButton();
			break;
		case "bankCash":
			dashboardPage.clickBankCashMenu();
			break;
		case "newAccount":
			dashboardPage.clickNewAccountMenu();
			break;
		default:
			System.out.println("Didn't click!");
		}
	}

	@Then("^User should be on the Dashboard page$")
	public void user_should_be_on_the_Dashboard_page() throws Throwable {
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}

	@When("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle) throws Throwable {
		bankCashPage.insertAccountTitle(accountTitle);
	}

	@When("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) throws Throwable {
		bankCashPage.insertDescription(description);
	}

	@When("^User enters initialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialBalance) throws Throwable {
		bankCashPage.insertInitialBalance(initialBalance);
	}

	@When("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountNumber) throws Throwable {
		bankCashPage.insertAccountNum(accountNumber);
	}

	@When("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactPerson) throws Throwable {
		bankCashPage.insertContactPerson(contactPerson);
	}

	@When("^User enters Phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_Phone_as_in_accounts_page(String Phone) throws Throwable {
		bankCashPage.insertPhone(Phone);
	}

	@When("^User enters internetBankingURL as \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String internetBankingURL) throws Throwable {
		bankCashPage.insertBankUrl(internetBankingURL);
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String submit) throws Throwable {
		bankCashPage.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
		newAccountPage.verifyAccountSuccessful();
		takeScreenshot(driver);
	}

}