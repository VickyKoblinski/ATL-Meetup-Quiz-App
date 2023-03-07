# ATL-Meetup-Quiz-App
Building a Quiz App ::March 2023

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Project: Build a Quiz App with React

Build a quiz application using React that allows users to answer multiple-choice questions and displays their score at the end of the quiz.

## Outline

### App.js

Starting component that mounts the `QuestionList`.

### QuestionList.js

Displays `Question` components and houses the metadata for the list of questions.

### Question.js

Displays a single `Question`.

### https://quizapi.io/api/v1/questions

URL to fetch questions. Currently is being mocked by Mock Service Worker.

# Tasks


### Task 1
Within the `QuestionList` component, fetch the data from `https://quizapi.io/api/v1/questions`. Handle loading states and error states.

### Task 2
Create a store using Context API or Redux to keep track of the questions, the answers, the user chosen answer, and the score.

### Task 3
Fill out the `Question.js` component: Display the question in the UI, along with the multiple-choice answers.

#### Task 3.1
Add functionality for answering questions: One participant can implement the functionality for users to select an answer and move on to the next question.

### Task 4
Add styling: Another participant can add some styling to the application to make it look more appealing.

### Task 5 (everyone)
Test and debug: Finally, all participants can work together to test the application and fix any bugs that they find.
