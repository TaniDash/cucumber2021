@TF @Regression
Feature: Techfios billling website login functionality validation

Background: 
Given User is on techfios login page


@TF_feature1
Scenario: User shpould be able to login with valid credentials
When User enters username as "demo@techfios.com" 
When User enters password as "abc123"
When User clicks on signin button
Then  User should land on dashboard page

@TF_feature2
Scenario: User shpould be able to login with valid credentials from Database
When User enters "username" from database
When User enters "password" from database
When User clicks on signin button
Then  User should land on dashboard page