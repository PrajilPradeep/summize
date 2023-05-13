# Summize

## Description

Summize is a web application that allows users to extract and summarize the main content of any web article. It uses React and Vite for the front-end and Article Extractor and Summarizer API for the back-end.

The motivation behind this project was to create a simple and fast way to get the gist of any online article without having to read through the whole text or deal with ads and distractions.

## Features

Summize has the following features:

- **URL input**: You can copy and paste any URL from your browser or type it manually in the input field.
- **Summary output**: You will get the extracted summary of the article in a clean and elegant format.
- **History list**: You can view the previously fetched articles from local storage.
- **Copy URL**: You can copy the previously used URL to go to the original page by clicking on the "Copy URL" button from the history list.

## Technologies

- React
- Vite
- Tailwind CSS
- Redux Toolkit Query
- React Hook Form

## Installation / How to setup

To run this project locally, you need to have Node.js and npm installed on your machine.

1. Clone this repository: `git clone https://github.com/PrajilPradeep/summize.git`
2. Navigate to the project folder: `cd summize`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open http://localhost:5173 in your browser

## Usage

To use Summize, you just need to paste an article link in the input field and click the submit button. The app will fetch the summary from the API and display it below. You can view the history of previous summaries by scrolling down the page. The summaries are stored in local storage, so you can access them even after closing the app.

![Summize_Demo](https://github.com/PrajilPradeep/summize/assets/93212835/e82cf445-c37a-428d-b9b4-6d6a9e71ff93)

## Live site

You can also try Summize online by visiting [here](https://dulcet-cannoli-474da0.netlify.app/)
