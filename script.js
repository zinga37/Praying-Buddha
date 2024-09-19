// 问佛功能
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function addTypingIndicator() {
    const typingElement = document.createElement('p');
    typingElement.id = 'typing-indicator';
    typingElement.textContent = '佛祖正在思考...';
    typingElement.style.color = '#888';
    typingElement.style.fontStyle = 'italic';
    chatHistory.appendChild(typingElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function removeTypingIndicator() {
    const typingElement = document.getElementById('typing-indicator');
    if (typingElement) {
        typingElement.remove();
    }
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage('求问者', message);
        userInput.value = '';
        
        // 添加"正在思考"指示器
        addTypingIndicator();
        
        // 模拟佛祖响应时间
        setTimeout(() => {
            removeTypingIndicator();
            addMessage('佛祖', '阿弥陀佛，善哉善哉。');
        }, 2000); // 2秒后回复，您可以根据需要调整这个时间
    }
}

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});