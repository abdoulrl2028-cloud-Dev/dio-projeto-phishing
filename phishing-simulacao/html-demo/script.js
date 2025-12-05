/**
 * Script para a página de login educacional
 * Simula o comportamento de um formulário real
 */

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validação básica
            if (!username || !password) {
                showMessage('Por favor, preencha todos os campos!', 'error');
                return;
            }
            
            // Simular envio
            showMessage('Processando login...', 'info');
            
            // Simular delay de processamento
            setTimeout(function() {
                showMessage(
                    '⚠️ NOTA EDUCACIONAL: Credenciais capturadas para fins de demonstração.\n' +
                    'Usuário: ' + username + '\n' +
                    'Senha: ' + '•'.repeat(password.length),
                    'warning'
                );
                
                // Limpar formulário
                loginForm.reset();
            }, 1500);
        });
    }
});

/**
 * Exibir mensagem ao usuário
 */
function showMessage(message, type = 'info') {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message message-' + type;
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Remover mensagem após 5 segundos
    setTimeout(function() {
        messageDiv.remove();
    }, 5000);
}

// Adicionar estilos para mensagens
if (!document.getElementById('messageStyles')) {
    const style = document.createElement('style');
    style.id = 'messageStyles';
    style.innerHTML = `
        .message {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 4px;
            font-size: 14px;
            z-index: 9999;
            animation: slideDown 0.3s ease-in-out;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        .message-info {
            background-color: #d1ecf1;
            border: 1px solid #bee5eb;
            color: #0c5460;
        }
        
        .message-error {
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
        }
        
        .message-warning {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
        }
    `;
    document.head.appendChild(style);
}
