function openResumePDF() {
    window.open('./assets/Michael-Scott-Resume.pdf');
}

window.onload = () => {
    setTimeout(function() 
    {
        document.getElementById("main-body").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }, 1000);
}