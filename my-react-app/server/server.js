const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const app = express();
const port = 5000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

const chatGptAPI = google.generativeAI('v1');

// Google Authentication setup
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your-service-account-key.json', // Path to your service account key
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

app.post('/api/fetch-quiz', async (req, res) => {
  try {
    const client = await auth.getClient();
    const gptClient = google.generativeAI({
      version: 'v1',
      auth: client,
    });

    const response = await gptClient.chat.completions.create({
      model: 'text-bison', // Replace with the correct model name
      prompt: 'Generate 10 quiz questions about Indian festivals.',
    });

    // Process response to fit the frontend format
    const questions = response.data.choices.map((choice, index) => ({
      content: choice.text,
    }));

    res.json(questions);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ message: 'Error fetching quiz data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
