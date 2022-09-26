function openResumePDF() {
    window.open('./assets/Michael_Scott_CV_NP_L.pdf');
}

window.onload = () => {
    setTimeout(function() 
    {
        document.getElementById("main-body").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }, 1000);
}