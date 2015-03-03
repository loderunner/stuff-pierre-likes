'use strict';

var hideAnswer = function() {
    $('#answer-box').removeClass('in');
    $('#answer-box').addClass('out');
};

var pierreProcessor = function(w) {
    var wl = w.toLowerCase();

    // Is it Lua?
    if(w === 'Lua') {
        // It's Lua! Pierre likes this.
        return 'Yes!';
    }

    // Lua is not LUA...
    else if(wl === 'lua') {
        return 'n00b! <a href="http://lua.2524044.n2.nabble.com/SAS-to-LUA-conversion-td6508727.html">It\'s "Lua"</a>.';
    }

    else if(wl === 'fsonrpc') {
        return 'Yes! But not FSON.';
    }

    else if(wl === 'environment variables') {
        return 'Yes!';
    }
    
    else if(wl === 'valgrind') {
        return 'It Does Rubbish!';
    }

    else
    {
        return 'No.';
    }
};

var query = function()
{
    $('#query').blur();

    var query = $('#query')[0].value;

    var answer = pierreProcessor(query);

    $('#answer-box').removeClass('out');
    $('#answer-box').addClass('in');
    $('#answer').html(answer);
}

$(document).ready(function() {
    $('#submit').click(query);
    $('#query').keypress(function(e) {
        if (e.which == 13) {
            query();
        }
    });

    $('#query').focus(hideAnswer);
    $('#query').change(hideAnswer);
  });
