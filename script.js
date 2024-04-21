document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addOutgoingMessage(userInput);
        document.getElementById('user-input').value = '';
        setTimeout(function() {
            replyToUser(userInput);
        }, 1000);
    }
}

function addIncomingMessage(message) {
    var chatContainer = document.getElementById('chat-container');
    var newMessage = document.createElement('div');
    newMessage.className = 'chat-message incoming';
    newMessage.innerHTML = '<span class="message">' + message + '</span>';
    chatContainer.appendChild(newMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addOutgoingMessage(message) {
    var chatContainer = document.getElementById('chat-container');
    var newMessage = document.createElement('div');
    newMessage.className = 'chat-message outgoing';
    newMessage.innerHTML = '<span class="message">' + message + '</span>';
    chatContainer.appendChild(newMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function replyToUser(question) {
    // Đây là nơi bạn có thể viết mã để trả lời câu hỏi của người dùng.
    // Ví dụ đơn giản: trả lời mỗi câu hỏi của người dùng với một câu lời cố định.
    var reply = "Cảm ơn bạn đã đặt câu hỏi. Tôi là một chatbot đơn giản!";
    addIncomingMessage(reply);
}
