$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');


        var bgCanvas = document.getElementById('#masthead');
        bgCanvas.patternizer({
            stripes : [
                {
                    color: '#ffffff',
                    rotation: 45,
                    opacity: 21,
                    mode: 'plaid',
                    width: 1,
                    gap: 185,
                    offset: 0
                }
            ],
            bg : '#000'
        });
});