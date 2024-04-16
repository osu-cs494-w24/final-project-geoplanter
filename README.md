# Geoplanter

Search for edible plants at a location in the US and learn important information about them.

## The Interface

Starting at the homescreen users are given the option to input their location or view the map.

- Viewing the map will bring them to an area where they can see their locations hardiness
- Inputing a location into the search bar results in the user being brought to page listing the edible plants in the entered location

From the list of plants, users can then select one of them to get more information about it.

## How does it work?

When the user enters a location we use a database and 2 APIs to get the list of plants:

1. The location entered is used to fetch the zip code from [zipcodebase.com](zipcodebase.com)
2. The zipcode is then used to get the hardiness level [phzmapi](phzmapi.org)
3. The hardiness level finally used to fetch a list of edible plants there from [perenual](perenual.com)
