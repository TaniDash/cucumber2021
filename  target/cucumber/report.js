$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankCash"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User should land on the Techfios homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User inserts the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User inserts the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the \"signin\" button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be on the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the \"bankCash\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the \"newAccount\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "newAccount",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "accountTitle",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "newAccount",
        "checking",
        "My initial checking",
        "1500",
        "85963214",
        "TaniaD",
        "916 258 8569",
        "Nothing",
        "https://www.chase.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3203807100,
  "status": "passed"
});
formatter.before({
  "duration": 4849000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BankCash"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User should land on the Techfios homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User inserts the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User inserts the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the \"signin\" button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be on the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the \"bankCash\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the \"newAccount\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"checking\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"My initial checking\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"1500\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"85963214\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"TaniaD\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"916 258 8569\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"https://www.chase.com/\" in accounts page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankCashStepDefinition.user_should_land_on_the_Techfios_homepage()"
});
formatter.result({
  "duration": 1818666000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 30
    }
  ],
  "location": "BankCashStepDefinition.user_inserts_the_username_as(String)"
});
formatter.result({
  "duration": 3197928600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 30
    }
  ],
  "location": "BankCashStepDefinition.user_inserts_the_password_as(String)"
});
formatter.result({
  "duration": 3125989000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 20
    }
  ],
  "location": "BankCashStepDefinition.user_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 4374532500,
  "status": "passed"
});
formatter.match({
  "location": "BankCashStepDefinition.user_should_be_on_the_Dashboard_page()"
});
formatter.result({
  "duration": 194790100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 20
    }
  ],
  "location": "BankCashStepDefinition.user_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 2092471300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 20
    }
  ],
  "location": "BankCashStepDefinition.user_clicks_on_the_button(String)"
});
formatter.result({
  "duration": 2728521000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking",
      "offset": 29
    }
  ],
  "location": "BankCashStepDefinition.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 132432900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My initial checking",
      "offset": 28
    }
  ],
  "location": "BankCashStepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 128014900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 31
    }
  ],
  "location": "BankCashStepDefinition.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 130340500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "85963214",
      "offset": 30
    }
  ],
  "location": "BankCashStepDefinition.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 125929200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaniaD",
      "offset": 30
    }
  ],
  "location": "BankCashStepDefinition.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 118748600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "916 258 8569",
      "offset": 22
    }
  ],
  "location": "BankCashStepDefinition.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 126543500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com/",
      "offset": 35
    }
  ],
  "location": "BankCashStepDefinition.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 162463700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "BankCashStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 747060100,
  "status": "passed"
});
formatter.match({
  "location": "BankCashStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 305479800,
  "status": "passed"
});
});