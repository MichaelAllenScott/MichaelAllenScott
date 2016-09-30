
function loadPage(page)
{
	$( "#pageTitle" ).add(".mainBody").add(".bodyText").add("#copyright").add("#copyrightText").fadeIn("slow");
}

function pageChange(nextPage)
{
  	$( "#pageTitle" ).add(".mainBody").add(".bodyText").add("#copyright").add("#copyrightText").fadeOut( "slow", newPage(nextPage) );
	
}


function newPage(nextPage)
{
	if(nextPage == "index") document.location.href = "index.html";
	if(nextPage == "contact") document.location.href = "contact.html";
	if(nextPage == "experience") document.location.href = "EE.html";
	if(nextPage == "skills") document.location.href = "skills.html";
	if(nextPage == "achievements") document.location.href = "achievements.html";
	if(nextPage == "projects") document.location.href = "projects.html";
}