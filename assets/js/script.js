$(function(){
  var openTab = [];
  // On tab openning, close any other open one
  $('.collapse').on('show.bs.collapse',function(){
    let id = $(this).attr('id');
    if (openTab.length !== 0){ $('#' + openTab[0]).collapse('hide'); }
    openTab.push(id);
  })
  // On last tab closing, empty the openTab array
  $('.collapse').on('hide.bs.collapse',function(){
    let id = $(this).attr('id');
    if (openTab.length !== 0 && openTab[0] === id){ openTab.pop(); }
  })
  // Open link on click on pictures
  $('#TP_GrainesPhotoAccueil, #TP_GrainesPhotoPanier').click(function(){
    window.open('https://pierremonvoisin.github.io/TP-ECommerce/');
  })
});
