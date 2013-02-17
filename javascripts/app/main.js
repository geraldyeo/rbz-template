/**
 *      _/_/_/    _/_/    _/_/_/    _/_/_/_/        _/_/_/  _/_/_/    _/_/_/_/  _/_/_/    _/_/_/_/
 *   _/        _/    _/  _/    _/  _/            _/        _/    _/  _/        _/    _/  _/
 *  _/        _/    _/  _/    _/  _/_/_/        _/        _/_/_/    _/_/_/    _/    _/  _/_/_/
 * _/        _/    _/  _/    _/  _/            _/        _/    _/  _/        _/    _/  _/
 *  _/_/_/    _/_/    _/_/_/    _/_/_/_/        _/_/_/  _/    _/  _/_/_/_/  _/_/_/    _/_/_/_/
 *
 * @author: geraldyeo
 * Date: 17/2/13
 */

requirejs.config({
                     baseUrl:"javascripts",

                     paths:{
                         // Core
                         jquery      :"libs/foundation/jquery",
                         underscore  :"libs/backbone/underscore",
                         backbone    :"libs/backbone/backbone",

                         // Plugins
                         text        :"libs/require/text",

                         // Folders
                         "foundation":"libs/foundation"
                     },

                     shim:{
                         "backbone"                                     :{ deps:["underscore", "jquery"], exports:'Backbone' },
                         "underscore"                                   :{ exports:'_' },
                         "foundation/jquery.cookie"                     :{ deps:["jquery"] },
                         "foundation/jquery.event.move"                 :{ deps:["jquery"] },
                         "foundation/jquery.event.swipe"                :{ deps:["jquery"] },
                         "foundation/jquery.foundation.accordion"       :{ deps:["jquery"] },
                         "foundation/jquery.foundation.alerts"          :{ deps:["jquery"] },
                         "foundation/jquery.foundation.buttons"         :{ deps:["jquery"] },
                         "foundation/jquery.foundation.clearing"        :{ deps:["jquery"] },
                         "foundation/jquery.foundation.forms"           :{ deps:["jquery"] },
                         "foundation/jquery.foundation.joyride"         :{ deps:["jquery"] },
                         "foundation/jquery.foundation.magellan"        :{ deps:["jquery"] },
                         "foundation/jquery.foundation.mediaQueryToggle":{ deps:["jquery"] },
                         "foundation/jquery.foundation.navigation"      :{ deps:["jquery"] },
                         "foundation/jquery.foundation.orbit"           :{ deps:["jquery"] },
                         "foundation/jquery.foundation.reveal"          :{ deps:["jquery"] },
                         "foundation/jquery.foundation.tabs"            :{ deps:["jquery"] },
                         "foundation/jquery.foundation.tooltips"        :{ deps:["jquery"] },
                         "foundation/jquery.foundation.topbar"          :{ deps:["jquery"] },
                         "foundation/jquery.offcanvas"                  :{ deps:["jquery"] },
                         "foundation/jquery.placeholder"                :{ deps:["jquery"] }
                     }
                 });

requirejs(
    [
        "jquery",
        'underscore',
        'backbone',
        "app/bootstrap",
        "libs/foundation/jquery.cookie",
        "libs/foundation/jquery.event.move",
        "libs/foundation/jquery.event.swipe",
        "libs/foundation/jquery.foundation.accordion",
        "libs/foundation/jquery.foundation.alerts",
        "libs/foundation/jquery.foundation.buttons",
        "libs/foundation/jquery.foundation.clearing",
        "libs/foundation/jquery.foundation.forms",
        "libs/foundation/jquery.foundation.joyride",
        "libs/foundation/jquery.foundation.magellan",
        "libs/foundation/jquery.foundation.mediaQueryToggle",
        "libs/foundation/jquery.foundation.navigation",
        "libs/foundation/jquery.foundation.orbit",
        "libs/foundation/jquery.foundation.reveal",
        "libs/foundation/jquery.foundation.tabs",
        "libs/foundation/jquery.foundation.tooltips",
        "libs/foundation/jquery.foundation.topbar",
        "libs/foundation/jquery.offcanvas",
        "libs/foundation/jquery.placeholder"
    ],

    function ($, _, Backbone, bootstrap) {
        (function ($, window, undefined) {
            var $doc = $(document),
                Modernizr = window.Modernizr;

            $(document).ready(function () {
                $.fn.foundationAlerts ? $doc.foundationAlerts() : null;
                $.fn.foundationButtons ? $doc.foundationButtons() : null;
                $.fn.foundationAccordion ? $doc.foundationAccordion() : null;
                $.fn.foundationNavigation ? $doc.foundationNavigation() : null;
                $.fn.foundationTopBar ? $doc.foundationTopBar() : null;
                $.fn.foundationCustomForms ? $doc.foundationCustomForms() : null;
                $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
                $.fn.foundationTabs ? $doc.foundationTabs({callback:$.foundation.customForms.appendCustomMarkup}) : null;
                $.fn.foundationTooltips ? $doc.foundationTooltips() : null;
                $.fn.foundationMagellan ? $doc.foundationMagellan() : null;
                $.fn.foundationClearing ? $doc.foundationClearing() : null;
                $.fn.placeholder ? $('input, textarea').placeholder() : null;

                // initialize app
                bootstrap(window);
            });

            // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
            // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
            // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
            // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
            // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

            // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
            if (Modernizr.touch && !window.location.hash) {
                $(window).load(function () {
                    setTimeout(function () {
                        // At load, if user hasn't scrolled more than 20px or so...
                        if ($(window).scrollTop() < 20) {
                            window.scrollTo(0, 1);
                        }
                    }, 0);
                });
            }
        })($, window);
    }
);