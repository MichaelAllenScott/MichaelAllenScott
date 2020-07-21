function openResumePDF() {
    window.open('./assets/Michael-Scott-Resume.pdf');
}

$(window).bind("load", function() {
    setTimeout(function() 
    {
        $(".main-body").show();
        $(".loading").hide();
    }, 1000);
});