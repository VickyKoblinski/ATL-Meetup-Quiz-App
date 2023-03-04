// src/mocks/handlers.js
import { rest } from 'msw'
import quizResults from './quiz.json'

// Define the mock API route
const apiUrl = 'https://quizapi.io/api/v1/questions';
const apiKey = 'MOCK_KEY';
const category = 'DevOps';

const mockApiHandler = rest.get(apiUrl, (req, res, ctx) => {
  // Check that the API key and category are present in the request query parameters
  const apiKeyQueryParam = req.url.searchParams.get('apiKey');
  const categoryQueryParam = req.url.searchParams.get('category');

  if (apiKeyQueryParam === apiKey && categoryQueryParam === category) {
    // Return a mock response with some sample data
    return res(
      ctx.status(200),
      ctx.json(quizResults),
    );
  } else {
    // Return an error response if the API key or category is incorrect
    return res(
      ctx.status(401),
      ctx.json({ error: 'Unauthorized' }),
    );
  }
});

export const handlers = [
  mockApiHandler
]