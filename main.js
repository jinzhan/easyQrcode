(function () {
    let  createQrCode = ($el, url) => {
        $($el).empty().qrcode({
            text: url,
            width: 200,
            height: 200
        });
    };


    let bindTxt = ($txt, $el, url) => {
        $($txt).on('keyup', function(){
            let val = $(this).val().trim() || url; 
            console.log({val});
            createQrCode($el, val);
        });
    };

    chrome.tabs.getSelected(null, function (tab) {
        let url = 'baiduboxapp://v1/easybrowse/open?url=' + encodeURIComponent(tab.url);
        createQrCode('#baiduapp-qrcode .qrcode', url);
        createQrCode('#normal-qrcode .qrcode', tab.url);
        createQrCode('#preview-qrcode .qrcode', 'http://baijiahao.baidu.com/hitpreview');
        bindTxt('#normal-qrcode .custom-qrcode-url', '#normal-qrcode .qrcode', tab.url);
    });
})();