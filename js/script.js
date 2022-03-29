$(document).on('click', '.js-pass-tog', function () {
  $icon = $(this).find('ion-icon');
  $input = $(this).parent().find('input');

  if ($input.attr('type') == 'password') {
    $input.attr('type', 'text');
    $icon.attr('name', 'eye-off-outline');
  } else {
    $input.attr('type', 'password');
    $icon.attr('name', 'eye-outline');
  }
});

$(document).on('click', '.js-tog-af-form', function () {
  $opened = $('.af-form:not(.af-form-hidden)');
  $closed = $('.af-form.af-form-hidden');

  $opened.addClass('af-form-hide');

  setTimeout(function () {
    $opened.removeClass('af-form-hide').addClass('af-form-hidden');
    $closed.removeClass('af-form-hidden');
  }, 200);
});
