document.addEventListener('DOMContentLoaded', () => {
  const btnAbrir = document.getElementById('btn-abrir-qrcode');
  const btnFechar = document.getElementById('btn-fechar-qrcode');
  const modal = document.getElementById('modal-qrcode');
  const overlay = modal ? modal.querySelector('.modal-overlay') : null;

  if (btnAbrir && btnFechar && modal && overlay) {
    function abrirModal() {
      modal.classList.add('ativo');
      modal.setAttribute('aria-hidden', 'false');
      btnAbrir.setAttribute('aria-expanded', 'true');
      btnFechar.focus();
    }

    function fecharModal() {
      modal.classList.remove('ativo');
      modal.setAttribute('aria-hidden', 'true');
      btnAbrir.setAttribute('aria-expanded', 'false');
      btnAbrir.focus();
    }

    btnAbrir.addEventListener('click', abrirModal);
    btnFechar.addEventListener('click', fecharModal);
    overlay.addEventListener('click', fecharModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('ativo')) {
        fecharModal();
      }
    });
  }
});