@api
Feature: Test account menu links

Scenario: Make sure block works 
  Given I am not logged in
  And I am on "/"
  Then I should see the "Objekt der Woche" heading in the "blockviewfrontpage" 
                               

