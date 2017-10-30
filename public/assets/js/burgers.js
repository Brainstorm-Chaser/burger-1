// Wait to attach handlers until DOM loaded
$(function() {
  $('.change-devoured').on('click', function(event) {
    var id = $(this).data('id');
      console.log('id: ', id);
    var newDevour = $(this).data('newdevour');
      console.log('newDevour: ', newDevour);

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevourState
    }).then(
      function() {
        console.log('changed sleep to', newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $('#bur').val().trim(),
      devoured: $('[name=devoured]:checked').val().trim()
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newCat
    }).then(
      function() {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
