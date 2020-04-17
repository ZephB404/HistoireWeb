var project_number = 1;
var left_arrow = document.querySelector("button#left");
var right_arrow = document.querySelector("button#right");
var photo_projets = document.querySelector("#photo_projets")
var lien = document.querySelector("#lien_projets")

left_arrow.addEventListener("click", function(){
	if (project_number== 1){
		project_number = 5;
		console.log(project_number)
	} 
	else {
	project_number -= 1;
	console.log(project_number)
	}

	photo_projets.classList = "";
	photo_projets.classList.add("projet"+project_number);
	lien.innerHTML = "Se rendre au projet "+project_number

	
	if (project_number == 1){
		lien.setAttribute("href", "https://www.youtube.com");

	}
	else if (project_number == 2){
		lien.setAttribute("href", "https://unsplash.com/photos/zeH-ljawHtg");
	}
	else if (project_number == 3){
		lien.setAttribute("href", "https://css-tricks.com/css-content/");
	}
	else if (project_number == 4){
		lien.setAttribute("href", "https://stackoverflow.com/questions/30299693/js-remove-all-classes-from-element");
	}
	else if (project_number == 5){
		lien.setAttribute("href", "https://www.w3schools.com/js/js_if_else.asp");
	}
	else {
		lien.setAttribute("href", "#");
	}
})

right_arrow.addEventListener("click", function(){
	if (project_number == 5){
		project_number = 1;
		console.log(project_number)
	} 
	else {
	project_number += 1;
	console.log(project_number)
	}

	photo_projets.classList = "";
	photo_projets.classList.add("projet"+project_number);
	lien.innerHTML = "Se rendre au projet "+project_number

	if (project_number == 1){
		lien.setAttribute("href", "https://www.youtube.com");
	}
	else if (project_number == 2){
		lien.setAttribute("href", "https://unsplash.com/photos/zeH-ljawHtg");
	}
	else if (project_number == 3){
		lien.setAttribute("href", "https://css-tricks.com/css-content/");
	}
	else if (project_number == 4){
		lien.setAttribute("href", "https://stackoverflow.com/questions/30299693/js-remove-all-classes-from-element");
	}
	else if (project_number == 5){
		lien.setAttribute("href", "https://www.w3schools.com/js/js_if_else.asp");
	}
	else {
		lien.setAttribute("href", "#");
	}
})

