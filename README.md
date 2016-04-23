# creditsense

creditsense is a credit history and scoring application designed purely for fun and experimentation.

## Installation

In it's current state the installation guide is specific to Mac OSX:

`git checkout https://github.com/mgldev/creditsense creditsense`

Within the repository root:

`npm install` 

`bower install`

In order to run the application you'll need `grunt` and `compass` available:

`npm install -g grunt`

`sudo gem install compass`

To run the project:

`grunt serve` 

The grunt task should automatically launch a browser and point it at the now running local webserver.

## Background

There are agencies known as CRAs - Credit Reference Agencies.

There are several CRAs in the UK, namely:

- Experian
- Equifax
- CallCredit

Each CRA holds a *credit file* for you, containing information such as:

- Accounts (Bank accounts, telephone contracts, credit cards and loans)
- Address history (and Electoral Roll data)
- CCJ and bankruptcy information
- History of searches against your credit file

In addition to your *credit file / history*, CRAs often offer a *"Credit Score*:

- Assesses your credit file for positive and negative events / data
- Provides a numeric 'score' value to provide an indication as to how 'credit worthy' you may be to potential lenders

creditsense allows a user to define their own credit history and credit scoring engine:

- Users can populate their own 'credit history' - Accounts, addresses, CCJs, searches
- Users can define their own Credit Scoring rules

Using these features it is possible to play around with various different scenarios and see
how certain changes and events can affect your credit score.  Each CRA or credit score provider
will have their own distinct set of rules as to what they regard as positive or negative events
against a credit file - this application puts the assessment engine for analysing a credit file
in the users hands.

I decided to develop creditsense for the following reasons:

- A project to play with and gain experience with AngularJS
- To demonstrate the underlying principles of how credit scoring engines work 

This project is not intended to be a tool which people can rely on for an assessment of their credit.  It exists
only to provide an understanding of how a rules based engine can be executed against an underlying credit file 
in order to generate an assessment.
