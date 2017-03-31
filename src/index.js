'use strict';
import jquery from 'jquery';
import 'bootstrap';

import 'jasny-bootstrap/js/transition';
import 'jasny-bootstrap/js/offcanvas';
import 'jasny-bootstrap/js/inputmask';
import 'jasny-bootstrap/js/fileinput';
import 'jasny-bootstrap/js/wizard';
import 'html5shiv';
import '../main.less';


console.log('Test message');


import 'blueimp-file-upload/css/jquery.fileupload.css';
import 'blueimp-file-upload/css/jquery.fileupload-ui.css';

import 'jquery-ui';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/data';
import 'jquery-ui/ui/escape-selector';
import 'jquery-ui/ui/effect';
import 'jquery-ui/ui/disable-selection';
import 'jquery-ui/ui/focusable';
import 'jquery-ui/ui/form';
import 'jquery-ui/ui/keycode';
import 'jquery-ui/ui/labels';
import 'jquery-ui/ui/plugin';
import 'jquery-ui/ui/position';
import 'jquery-ui/ui/safe-active-element';
import 'jquery-ui/ui/safe-blur';
import 'jquery-ui/ui/scroll-parent';
import 'jquery-ui/ui/tabbable';
import 'jquery-ui/ui/effects/effect-blind';
import 'jquery-ui/ui/effects/effect-bounce';
import 'jquery-ui/ui/effects/effect-clip';
import 'jquery-ui/ui/effects/effect-drop';
import 'jquery-ui/ui/effects/effect-explode';
import 'jquery-ui/ui/effects/effect-fade';
import 'jquery-ui/ui/effects/effect-fold';
import 'jquery-ui/ui/effects/effect-highlight';
import 'jquery-ui/ui/effects/effect-puff';
import 'jquery-ui/ui/effects/effect-pulsate';
import 'jquery-ui/ui/effects/effect-scale';
import 'jquery-ui/ui/effects/effect-shake';
import 'jquery-ui/ui/effects/effect-size';
import 'jquery-ui/ui/effects/effect-slide';
import 'jquery-ui/ui/effects/effect-transfer';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/progressbar';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/accordion';
import 'jquery-ui/ui/widgets/autocomplete';
import 'jquery-ui/ui/widgets/checkboxradio';
import 'jquery-ui/ui/widgets/controlgroup';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';
import 'jquery-ui/ui/widgets/menu';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui/ui/widgets/resizable';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui/ui/widgets/selectmenu';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/spinner';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/tooltip';

import 'blueimp-file-upload/node_modules/blueimp-tmpl/js/tmpl';
import 'blueimp-load-image';
import 'blueimp-file-upload/node_modules/blueimp-canvas-to-blob/js/canvas-to-blob';
import 'blueimp-file-upload/js/jquery.iframe-transport';
import 'blueimp-file-upload/js/jquery.fileupload';
import 'blueimp-file-upload/js/jquery.fileupload-process';
import 'blueimp-file-upload/js/jquery.fileupload-image';
import 'blueimp-file-upload/js/jquery.fileupload-audio';
import 'blueimp-file-upload/js/jquery.fileupload-video';
import 'blueimp-file-upload/js/jquery.fileupload-validate';
import 'blueimp-file-upload/js/jquery.fileupload-ui';



import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/accordion.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/button.css';
import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-ui/themes/base/dialog.css';
import 'jquery-ui/themes/base/menu.css';
import 'jquery-ui/themes/base/progressbar.css';
import 'jquery-ui/themes/base/resizable.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/themes/base/slider.css';
import 'jquery-ui/themes/base/spinner.css';
import 'jquery-ui/themes/base/tabs.css';
import 'jquery-ui/themes/base/tooltip.css';


$( document ).ready(function() {
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/'
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );
    $('#fileupload').fileupload('option', {
        url: '//jquery-file-upload.appspot.com/',
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        maxFileSize: 999000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
    });
});