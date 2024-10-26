async function getChatbotResponseFromAPI(userInput) {
    const apiKey = "AIzaSyCWjw3ghl0sWGzxQXviJ_jBRi-dPRyvUmw";  // New API Key
    const apiUrl = `https://api.example.com/chatbot?key=${apiKey}&message=${encodeURIComponent(userInput)}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.reply || "Sorry, I couldn't understand your request.";
    } catch (error) {
        console.error('Error fetching chatbot API response:', error);
        return "Sorry, there was an error connecting to the server.";
    }
}
