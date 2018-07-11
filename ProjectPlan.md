Current Conditions Surf App

This app will scrape data from each of the most prominent surf forecasting websites, and show the user the rating / current conditions of the surf spot they are interested in, displayed over a MapBox Webmap.

Features

There will be two main features. The first feature will be a webpage that allows the user to select from a list of geographic areas (NE, Mid-Atlantic, SE, Florida) and then see all of the spots within the selected region that have a feed for the current conditions aggregator. 

The second feature will be a map that the user can interact with, without the assistance of a geographic filter that allows them to move through the map to select the spots that they are most interested in.

Functionality

Should the app continuously scrape the sites using each of the forecasting websites apis and pull the most current conditions on page load?
Pull the current conditions, put them into a db, then load from the db the current conditions to the web map
Create an embedded web map that filters based upon the locations that have been selected for the current conditions app, to filter by geographic region (NE, Mid-Atlantic, SE, Florida) 
The map interface should have a pin for each of the surf spots, upon clicking the surf spot, you will get three rows, Surfline, MSW and Swell Info current conditions with each of their rating systems implemented. (Surfline - Poor, Fair, Good, Epic | MSW - Star rating 0 - 5 | Swell Info - Poor, Fair, Good)
A platinum feature would be a link to the surf cam closest to each respective spot, with a screenshot of the current condition on page load.

Steps for Creation

Are there any resources on GitHub that would allow me to interact with each forecasting website’s API. If they exist, how can I use them to load data into the current conditions app
How can I load each websites rating system into a pin that is displayed on each surf spot location. Can I load their respective styling?
How to create a dropdown filter that allows the user to see each geographic region and all of the spots that fall within them.
How do I create a scraper that will pull info, and load it into the page. If this isn’t feasible, how will i obtain current conditions info
Will I need to use MongoDB, if I do, how will I pull info from the forecasting websites, load it into a db, then load the db info into the current conditions app for each of the surf spot locations.


Flow-Chart Links:

Front-End: Front-End

Back-End: Back End


Wire-frame Links:

*[Homepage](https://wireframe.cc/UchlPh)
*[My Favorite Spots Page](https://wireframe.cc/NC5d9u)
*[Regional Filter Page](https://wireframe.cc/gggi8s)
*[Current Conditions at Favorite Spot](https://wireframe.cc/puO9VS)

