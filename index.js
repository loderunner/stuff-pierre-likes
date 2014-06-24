'use strict';

var hideAnswer = function() {
    $('#answer-box').removeClass('in');
    $('#answer-box').addClass('out');
};

$(document).ready(function() {
    $('#submit').click(function(){
        $('#query').blur();

        var query = $('#query')[0].value;

        // Is it Lua?
        if (query.toLowerCase() === 'Lua') {
            // It's Lua! Pierre likes this.
            $('#answer-box').removeClass('out');
            $('#answer-box').addClass('in');
            $('#answer').text('Yes!');
        } else {
            // It isn't Lua. Pierre is sad.
            $('#answer-box').removeClass('out');
            $('#answer-box').addClass('in');
            $('#answer').text('No.');
        }
    });

    $('#query').focus(hideAnswer);
    $('#query').change(hideAnswer);
  });
