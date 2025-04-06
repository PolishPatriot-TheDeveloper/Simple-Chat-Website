// script.js
document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const messageText = userInput.value.trim();

    if (messageText === "") return;

    // Display user message
    displayMessage(messageText, "user");

    // Clear input field
    userInput.value = "";

    // Simulate bot response
    setTimeout(() => {
        const botResponse = "You said: " + messageText;
        displayMessage(botResponse, "bot");
    }, 1000);
}

function displayMessage(text, sender) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
