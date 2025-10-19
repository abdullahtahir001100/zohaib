function showView(viewId) {
    const views = document.querySelectorAll('.view-container');
    
    views.forEach(view => {
        view.style.display = 'none';
    });
    
    const activeView = document.getElementById(viewId);
    if (activeView) {
        activeView.style.display = 'block';
    }
}

function setupPasswordToggle(inputId, toggleId) {
    const passwordInput = document.getElementById(inputId);
    const passwordToggle = document.getElementById(toggleId);
    
    if (passwordInput && passwordToggle) {
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            if (type === 'text') {
                passwordToggle.classList.remove('fa-eye');
                passwordToggle.classList.add('fa-eye-slash');
            } else {
                passwordToggle.classList.remove('fa-eye-slash');
                passwordToggle.classList.add('fa-eye');
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    showView('loginView');
    
    setupPasswordToggle('loginPasswordInput', 'loginPasswordToggle');
    setupPasswordToggle('registerPasswordInput', 'registerPasswordToggle');
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(`${form.className} submitted!`);
            
            const message = `Submitted form: ${form.className.replace('-form', '')}. (In a real application, data would be sent to a server.)`;
            
            const modalBox = document.querySelector('.modal-box');
            
            // Simple custom modal/message box replacement for alert()
            const messageBox = document.createElement('div');
            messageBox.style.padding = '20px';
            messageBox.style.backgroundColor = '#f8d7da';
            messageBox.style.color = '#721c24';
            messageBox.style.border = '1px solid #f5c6cb';
            messageBox.style.borderRadius = '5px';
            messageBox.style.marginTop = '20px';
            messageBox.style.fontSize = '14px';
            messageBox.textContent = message;
            
            const existingMessage = modalBox.querySelector('.temp-message');
            if(existingMessage) {
                modalBox.removeChild(existingMessage);
            }
            messageBox.classList.add('temp-message');
            modalBox.appendChild(messageBox);
            
            setTimeout(() => {
                if(modalBox.contains(messageBox)) {
                    modalBox.removeChild(messageBox);
                }
            }, 3000);
        });
    });
});
 