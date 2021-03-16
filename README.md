# nate Challenge

The purpose of this app is to allow the user to input a url, send it to the server for processing, display the result of the number of word occurrences, and see their history.

To take into consideration large bodies of text, instead of each word and its number of occurrences being added/displayed directly onto the page I have added as a dependency [react-window](https://github.com/bvaughn/react-window), which creates a smaller “window” on the page for the user to browse through. The user will see the same result but instead of them having to scroll up and down on the page itself, are able to scroll through the window.

<p align=center>
  <img src="https://i.gyazo.com/4d10a2d44cf1c59fd3853e4b31049b5e.gif" alt="nate Challenge gif" width=70%/>
</p>

## Features
### Frontend
* allows users to input a url
* makes a POST request, sending the url to the backend
* displays the result/output (word and its number of occurrences)
* displays the user history (previous urls they input)

### Backend
* makes a GET request to the url sent by the user
* upon receiving the response, parses the content to go through all the words and keep track of how many times each word occurs
* sends the parsed content to the frontend as the response

## Tech Stack
* Frontend: React
* Backend: Node/Express
* Testing: Jest

I chose my tech stack because together they are great for developing dynamic single page applications. React is beneficial because of its performance (due to its virtual DOM), as well as the ability to separate concerns into individual components. Both of these points are particularly important when considering the case when a large amount of text/words need to be displayed; performance to handle the amount of elements that need to be added to the DOM and separating the `Result` and `UserHistory` components to handle the update. On the other hand, since the actual data fetching for the content from the user’s url happens on the backend, it makes sense to use Node/Express because of how it deals with asynchronous data loading through its use of callback functions. Furthermore, what I like about using Jest is how it shows errors when running tests. Rather than just showing the test as “failed”, it shows the difference between what it expected and the actual output, context with the line number, and even has an arrow to point where on the line the fail occurred.

## Getting Started
1. Clone down this repo to your local machine with `git clone`
2. Open up two tabs in your terminal 
3. For each tab `cd` into the directory
4. Have one tab `cd backend` and the other `cd frontend`
5. `npm install` in both to get all dependencies
6. In the tab for the backend, start the server with `npm start`
7. In the tab for the frontend, run the app with `npm start`

Sample input:
* https://norvig.com/big.txt
* https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt

## Testing
### Frontend: Tests the user’s history of urls being displayed to the DOM

<img width="1326" alt="Screen Shot of the test coverage report for UserHistory" src="https://user-images.githubusercontent.com/62153993/111234267-8a946f80-85c4-11eb-87d5-862fc93abd38.png">

In the respective terminal tab:
* run tests with `CI=true npm test -- --coverage`
* to see the test coverage report `open coverage/lcov-report/index.html`

Once I decided to make the user’s history into a separate component from `App.js`, I wanted to make sure that through prop drilling I would still have the same result as when it was all in one component. To be more specific, I am sending from `App.js` to the `UserHistory` component the array of urls, which is updated each time the user receives a successful response from the backend. Therefore, with this test on the `UserHistory` component, I am able to confirm that it is dynamically being updated based on the props sent down to it.

### Backend: Tests the function that actually transforms the text into the desired output

<img width="1326" alt="Screen Shot of the test coverage report for ParseText" src="https://user-images.githubusercontent.com/62153993/111233155-d6deb000-85c2-11eb-9387-fd9bb81d990f.png">

In the respective terminal tab:
* run tests with `npm test`
* to see the test coverage report `open coverage/lcov-report/index.html`

Since this is a large part of the functionality of the app, I wanted to test the effectiveness of the `parseText` function I wrote. To approach this requirement I did test-driven development so I wouldn't have to develop the app by making real network requests or running the whole app every time. As a result, this approach saved me time in development to focus on this specific function and helped me keep track of all the edge cases (i.e. punctuation, numbers, etc) I would think of.
