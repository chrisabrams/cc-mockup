jQuery('video, object').maximage('maxcover');

$('#contribute').on('click', function(e) {
  e.preventDefault();

  $('#contribute-container').toggleClass('down');
});

$('#submit').on('click', function(e) {
  e.preventDefault();
});
