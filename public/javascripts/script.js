$(document)
    .ready(function () {

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item.toggle');

        // click anchor toggle body unresolved class
        $('a.item.scale').bind('click', function (e) {
            //e.preventDefault();
            if ( e.target.href === '#' || e.target.href === 'null' || e.target.href === 'undefined'  ) return;
            $('body').addClass('unresolved');
        });

    });