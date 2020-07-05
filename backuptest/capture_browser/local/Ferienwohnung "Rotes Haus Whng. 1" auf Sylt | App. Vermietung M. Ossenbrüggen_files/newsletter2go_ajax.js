function n2goAjaxFormSubmit() {
    jQuery.post(document.location.origin + Drupal.settings.basePath + 'n2go/subscribe',
        jQuery("#n2goForm").serialize(),
        function (data) {
            if (data.success) {
                jQuery("#n2goResponseArea").html(data.message);
            } else {
                jQuery("#n2goResponseArea").find('.message').text(data.message);
            }
        }
    );
}