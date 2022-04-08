@BankCash @smoke
Feature: Techfios bank and cash New Account Functionality

  Scenario Outline: User should be able to login with valid credentials and open a new account
    Given User should land on the Techfios homepage
    When User inserts the username as "<username>"
    When User inserts the password as "<password>"
    When User clicks on the "signin" button
    Then User should be on the Dashboard page
    When User clicks on the "bankCash" button
    And User clicks on the "newAccount" button
    And User enters accountTitle as "<accountTitle>" in accounts page
    And User enters description as "<description>" in accounts page
    And User enters initialBalance as "<initialBalance>" in accounts page
    And User enters accountNumber as "<accountNumber>" in accounts page
    And User enters contactPerson as "<contactPerson>" in accounts page
    And User enters Phone as "<Phone>" in accounts page
    And User enters internetBankingURL as "<internetBankingURL>" in accounts page
    And User clicks on "submit"
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | newAccount | accountTitle | description         | initialBalance | accountNumber | contactPerson | Phone        | accountTitle | internetBankingURL     |
      | demo@techfios.com | abc123   | newAccount | checking     | My initial checking |           1500 |      85963214 | TaniaD        | 916 258 8569 | Nothing      | https://www.chase.com/ |
