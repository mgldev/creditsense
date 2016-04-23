# creditsense

creditsense is a credit history and scoring application designed purely for fun and experimentation.

## Background

There are agencies known as CRAs - Credit Reference Agencies.

There are several CRAs in the UK, namely:

- Experian
- Equifax
- CallCredit

Each CRA holds a *credit file* for you, containing information such as:

- Accounts (Bank accounts, telephone contracts, credit cards and loans)
- Address history (and Electoral Roll data)
- CCJ and bankrupcy information
- History of searches against your credit file

In addition to your *credit file / history*, CRAs often offer a *"Credit Score*:

- Assesses your credit file for positive and negative events / data
- Provides a numeric 'score' value to provide an indication as to how 'credit worthy' you may be to potential lenders

I decided to develop creditsense for the following reasons:

- A project to play with and gain experience with AngularJS
- To demonstrate the underlying principles of how credit scoring engines work 

This project is not intended to be a tool which people can rely on for an assessment of their credit.  It exists
only to provide an understanding of how a rules based engine can be executed against an underlying credit file 
in order to generate an assessment.