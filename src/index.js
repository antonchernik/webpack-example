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
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/progressbar';


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
import 'blueimp-file-upload/js/jquery.fileupload-jquery-ui';


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
import 'jquery-ui-bootstrap/jquery.ui.theme.css';
import 'jquery-ui-bootstrap/jquery.ui.theme.font-awesome.css';

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