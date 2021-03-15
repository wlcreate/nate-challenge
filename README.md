# nate Challenge

<p align=center>We're currently under construction!</p>

<p align=center>
  <img src="https://media.giphy.com/media/5t20H3tq99Y1DYFuEX/giphy.gif" alt="Three workers are doing various construction tasks for the room" width=40% />
</p>

## Tech Stack
* Frontend: React
* Backend: Node/Express
* Testing: Jest

## Getting Started
1. Clone down this repo to your local machine with `git clone`
2. Open up two tabs in your terminal 
3. For each tab `cd` into the directory
4. Have one tab `cd backend` and the other `cd frontend`
5. `npm install` in both to get all dependencies
6. In the tab for the backend, start the server with `npm start`
7. In the tab for the frontend, run the app with `npm start`

## Testing
### Backend: Tested the function that actually transforms the text into the output desired. 

<img width="1326" alt="Screen Shot 2021-03-15 at 7 15 35 PM" src="https://user-images.githubusercontent.com/62153993/111233155-d6deb000-85c2-11eb-9387-fd9bb81d990f.png">

In the respective terminal tab:
* run tests with `npm test`
* to see the test coverage report `open coverage/lcov-report/index.html`

Since this is a large part of the functionality of the app, I wanted to test the effectiveness of the parseText function I wrote. To approach this requirement I did test-driven development so I wouldn't have to develop the app by making real network requests or running the whole app every time. As a result, this approach saved me time in development, helped me focus on this particular function of the app, and helped me keep track of all the edge cases (i.e. punctuation or numbers) I would think of.

### Frontend: Tested the user’s history of urls being displayed to the DOM

<img width="1326" alt="Screen Shot 2021-03-15 at 7 27 53 PM" src="https://user-images.githubusercontent.com/62153993/111234267-8a946f80-85c4-11eb-87d5-862fc93abd38.png">

In the respective terminal tab:
* run tests with `CI=true npm test -- --coverage`
* to see the test coverage report `open coverage/lcov-report/index.html`

Once I decided to make the user’s history be a separate component from App.js, I wanted to make sure that by prop drilling I would still have the same behavior as if I didn’t separate it. Specifically, I am sending from App.js to the UserHistory component the array of urls, which is updated each time the user receives a successful response from the backend. Therefore, with this test on the UserHistory component, I am able to confirm that it is dynamically being updated based on the props sent down to it.
