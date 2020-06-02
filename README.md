# Express Server & REST API

#### A quick project opener using Express, SuperAgent and Handlebars to consume and display a RESTful API provided by The New York Times.

Obtain an api key from https://developer.nytimes.com.
I chose to use the Books section of this API available here https://developer.nytimes.com/books_api.json and the relevant console for querying different parameters and checking the JSON structure.

## Features

1. Simple <code>Express</code> local server set up with 404 error middleware.
2. Use of <code>SuperAgent</code> lightweight Ajax api - http://visionmedia.github.io/superagent/
3. <code>Handlebars</code> template-engine - https://www.npmjs.com/package/handlebars
4. <code>Consolidate</code> to ensure handlebars template engine works uniformly with Express - https://www.npmjs.com/package/consolidate.
5. Demonstrates an Ajax response displaying The New York Times' Top 20 Best Selling Hardback Fiction Books as a basic html list ready for styling.
6. Add your api_key to the <code>keys/credentials.template.js</code> supplied and rename to <code>credentials.js</code>.

## Installation

Run <code>npm install</code> to get dependencies.

Run <code>npm start</code> to get Express running on port 3000...
