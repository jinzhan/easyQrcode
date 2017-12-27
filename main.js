(function () {
    let  createQrCode = ($el, url) => {
        $($el).qrcode({
            text: url,
            width: 280,
            height: 280
        });
    };


    let bindTxt = ($txt, $el, url) => {
        $($txt).on('keyup', function(){
            let val = $(this).val().trim() || url; 
            console.log({val});
            $($el).empty().qrcode({
                text: val,
                width: 280,
                height: 280
            });
        });
    };

    chrome.tabs.getSelected(null, function (tab) {
        let url = 'baiduboxapp://v1/easybrowse/open?url=' + encodeURIComponent(tab.url);
        createQrCode('#baiduapp-qrcode .qrcode', url);
        createQrCode('#normal-qrcode .qrcode', tab.url);
        bindTxt('#normal-qrcode .custom-qrcode-url', '#normal-qrcode .qrcode', tab.url);
    });
})();