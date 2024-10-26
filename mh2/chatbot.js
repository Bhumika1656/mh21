document.getElementById('chat-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Display user input
    addMessage(userInput, 'user-message');

    // Call your Node.js server (which calls Llama 2)
    try {
        const response = await fetch('http://localhost:3000/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        });

        const data = await response.json();
        const botResponse = data.response;

        // Add bot's response to the chatbox
        addMessage(botResponse, 'bot-message');

    } catch (error) {
        addMessage("I'm sorry, something went wrong.", 'bot-message');
        console.error(error);
    }

    // Clear the input field
    document.getElementById('user-input').value = '';
});

// Function to append messages to the chatbox
function addMessage(message, className) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${className}`;
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}
