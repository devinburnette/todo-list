function checkItem(event) {
  var item = $('#item').val();
  if ($('ul').length > 0) {
    var already_there = $('ul').text().includes(item);
    if (already_there === true && item !== '') {
      $('#duplicate').dialog({
        height: 50,
        width: 500
      });
      return false;
    }
  }
  return true;
}

$('form').on('submit', function(event) {
  if (checkItem(event) === true) {
    var item = $('#item').val();
    if (item !== '') {
      $('#list').append('<li><a href="" onClick="event.preventDefault();cleanUp($(this).parent());"><div class="fa fa-check"></div></a>' + item + '</li>');
    } else {
      $('#empty').dialog({
        height: 50,
        width: 400
      });
    }
    event.preventDefault();
  } else {
    event.preventDefault();
  }
});

function removeItem(obj) {
  obj.slideUp(500, function() {
    obj.remove();
  });
}

function cleanUp(obj) {
  var items = $('ul li');
  if (items.length === 1) {
    $('#congrats').dialog({
      height: 50,
      width: 500
    });
  }
  removeItem(obj);
}
