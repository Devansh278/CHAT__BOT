API_KEY = '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';

// Function to send user message and receive bot response
async function sendMessage(userMessage) {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      'prompt': userMessage,
      'max_tokens': 50
    })
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    const botResponse = data.choices[0].text.trim();
    return botResponse;
  } catch (error) {
    console.error(error);
    return 'Oops! Something went wrong.';
  }
}

// Example usage
const userMessage = 'Hello, chatbot!';
sendMessage(userMessage)
  .then(botResponse => {
    console.log('Bot:', botResponse);
    // Do something with the bot response
  })
  .catch(error => {
    console.error(error);
  });
  