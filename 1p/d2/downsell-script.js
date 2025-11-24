// Função para aceitar a oferta
function acceptOffer() {
    // Aqui você pode redirecionar para a página de checkout ou processar a aceitação
    alert('Oferta aceita! Redirecionando para o checkout...');
    // window.location.href = 'checkout.html'; // Descomente para redirecionar
}

// Função para recusar a oferta
function declineOffer() {
    // Aqui você pode redirecionar para a próxima página ou processar a recusa
    if (confirm('Tem certeza de que deseja recusar este desconto especial?')) {
        alert('Oferta recusada. Redirecionando...');
        // window.location.href = 'proxima-pagina.html'; // Descomente para redirecionar
    }
}

// Prevenir fechamento acidental da página
window.addEventListener('beforeunload', function (e) {
    // Mensagem de aviso ao tentar sair da página
    e.preventDefault();
    e.returnValue = '';
    return '';
});
