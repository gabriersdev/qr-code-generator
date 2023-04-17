"use strict";

(() => {
  hljs.highlightAll();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();  
  });

  document.querySelectorAll('[data-recarrega-pagina]').forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })

  const controleFechamentoModal = () => {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
      const btnFecha = modal.querySelector('[data-modal-fecha]');
      btnFecha.addEventListener('click', () => {
        $('#' + modal.id).modal('hide');
      })
    })
  }

  controleFechamentoModal();

})();