// Fechar banner de aviso
document.getElementById('closeWarning').addEventListener('click', function() {
    document.getElementById('warningBanner').classList.add('hidden');
});

// Função para aceitar a oferta
function handleAccept() {
    // Aqui você pode adicionar a lógica de redirecionamento ou processamento
    alert('Obrigado por aceitar a oferta! Redirecionando para o checkout...');
    // window.location.href = 'checkout.html'; // Descomente para redirecionar
    console.log('Usuário aceitou a oferta');
}

// Função para recusar a oferta
function handleDecline() {
    // Aqui você pode adicionar a lógica de redirecionamento para outra página
    if (confirm('Tem certeza de que deseja recusar esta oferta exclusiva?')) {
        alert('Oferta recusada. Redirecionando...');
        // window.location.href = 'exit.html'; // Descomente para redirecionar
        console.log('Usuário recusou a oferta');
    }
}

// Adicionar event listeners aos botões de aceitar
document.getElementById('acceptBtn1').addEventListener('click', handleAccept);
document.getElementById('acceptBtn2').addEventListener('click', handleAccept);

// Adicionar event listeners aos botões de recusar
document.getElementById('declineBtn1').addEventListener('click', handleDecline);
document.getElementById('declineBtn2').addEventListener('click', handleDecline);

// Prevenir fechamento acidental da página
window.addEventListener('beforeunload', function(e) {
    // Mostrar aviso ao tentar fechar a página
    e.preventDefault();
    e.returnValue = '';
    return '';
});

// Scroll suave para elementos (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log de tempo na página (para analytics)
let timeOnPage = 0;
setInterval(function() {
    timeOnPage++;
    console.log('Tempo na página:', timeOnPage, 'segundos');
}, 1000);
