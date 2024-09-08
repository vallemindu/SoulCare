document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const endButton = document.getElementById('end-button');

    sendButton.addEventListener('click', sendMessage);
    endButton.addEventListener('click', endChat);
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const message = input.value.trim();
        if (message === '') return;

        addMessageToChat(message, 'user');
        input.value = '';

        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        addMessageToChat(data.response, 'bot');
    }

    function addMessageToChat(message, type) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function endChat() {
        addMessageToChat('Chat ended.', 'bot');
        document.getElementById('input-container').style.display = 'none';
        window.location.href = '/feedback'; 
    }
});
