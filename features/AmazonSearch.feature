Feature: Amazon Search

  Background:
    Given I am on the "Amazon Home Page"

    Scenario: Check Search Button
      When I navigate to the "Search bar"
      And I type "headphones"
      And I click the "Search button"
      Then I should be redirected to "Available headphones"
