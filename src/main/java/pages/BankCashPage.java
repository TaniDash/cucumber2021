package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankCashPage extends TestBase {

	WebDriver driver;

	public BankCashPage(WebDriver driver) {
		this.driver= driver;
	}
	
	@FindBy (how=How.XPATH, using="//a[contains(text(), 'New Account')]") WebElement NEW_ACCOUNT_ELEMENT;
	@FindBy (how=How.XPATH, using="//div[@class='ibox-title']") WebElement ADD_NEW_ACCOUNT_HEADER_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='account' and @type='text']") WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='description']") WebElement DESCRIPTION_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='contact_person' and @name='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@id='contact_phone']") WebElement PHONE_ELEMENT;
	@FindBy (how=How.XPATH, using="//input[@name='ib_url']") WebElement BANK_URL_ELEMENT;
	@FindBy (how=How.XPATH, using="//button[contains(text(), ' Submit')]") WebElement SUBMIT_BUTTON_ELEMENT;
	@FindBy (how=How.XPATH, using="//button[@class='btn btn-primary']") WebElement OK_ELEMENT;
	
	
	public void clickNewAccountMenu() {
		NEW_ACCOUNT_ELEMENT.click();
	}
	
	public void verifyNewAccountPage() {
		Assert.assertEquals(ADD_NEW_ACCOUNT_HEADER_ELEMENT.getText(), "Add New Account", "Wrong Page!!");
		System.out.println(ADD_NEW_ACCOUNT_HEADER_ELEMENT.getText());
	}
	
	String insertedTitle;
	public void insertAccountTitle(String title) {
		insertedTitle= title+getRandomNum(999);
		ACCOUNT_TITLE_ELEMENT.sendKeys(insertedTitle);
	}
	public void insertDescription(String des) {
		DESCRIPTION_ELEMENT.sendKeys(des);
	}
	
	public void insertInitialBalance(String balance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(balance+getRandomNum(99));
	}

	public void insertAccountNum(String acNum) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(acNum);
	}
	
	public void insertContactPerson(String person) {
		CONTACT_PERSON_ELEMENT.sendKeys(person);
	}
	
	public void insertPhone(String phone) {
		PHONE_ELEMENT.sendKeys(phone);
	}
	
	public void insertBankUrl(String url) {
		BANK_URL_ELEMENT.sendKeys(url);
	}
	
	public void clickSubmitButton() {
		SUBMIT_BUTTON_ELEMENT.click();
	}
	
		
}

	

