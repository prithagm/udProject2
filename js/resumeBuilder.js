

var bio = {
    "name" : "Pritha Guha Majumdar",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "416-930-4944",
        "email" : "prithaguhamajumdar@gmail.com",
        "github":"prithagm",
        "twitter": "pgm",
        "location" : "Toronto"
    },
    "welcomeMessage" : "Welcome to my resume!",
    "skills" : ["Web Development","SQL","MS Excel","VBA","IT Security","Photography"],
    "bioPic" : "images/fry.jpg"
};


var education = {
	"schools" : [
		{
			"name" : "York University",
			"location" : "Toronto",
			"degree" : "Undergrad",
			"major": ["IT","Management"],
			"date" : "2015",
			"url" : "http://www.yorku.ca/index.html"
		},
		{
			"name" : "T College",
			"location" : "Toronto",
			"degree" : "IT",
			"major": ["Management"],
			"date" : "2010",
			"url" : "http://www.tcollege.ca"
		}
	], 

	"onlineCourses" : [
		{
			"title" : "Front-End NanoDegree",
			"school": "Udacity",
			"date" : "2015",
			"url": "https://www.udacity.com"

		}
	]
};

var work = {
"jobs": [
		{
			"employer" : "CIBC",
			"title" : "Technical Analyst Co-op",
			"location": "Toronto",
			"date" : "May 2014 - August 2014",
			"description" : "At this positon I worked on automating reports, implementing SQL queries and testing."
		},
		{
			"employer" : "TD",
			"title" : "IT Security Analyst Co-op",
			"location": "Toronto",
			"date" : "September 2013 - April 2014 ",
			"description" : "I worked on monitoring databases and performed IT Security tasks."
		} 
	]
};

var project = {
	"assignment" : [
		{
			"title" : "Online Portfolio",
			"date" : "2014",
			"description" : "In this project I built an online portfolio using HTML, CSS and twitter Bootstrap",
			"images" : ["images/p1.png","images/P12.png" ]
		},
		{
			"title" : "Gym Management Website",
			"date" : "2014",
			"description" : "This website was built using JSP, Java, and MySQL. CSS and Bootstrap were used for styling",
			"images" : ["images/p2.png"]
		}
	]
};



//function to display bio 
function displayBio() {
	//display name and role 
	var myName = HTMLheaderName.replace("%data%", bio.name);
	var myRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").append(myName);
	$("#header").append(myRole);

	//display contacts
	//$("#topContacts").append(HTMLcontactGeneric);

	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var myLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#header").append(mobile);
	$("#header").append(email);
	$("#header").append(github);
	$("#header").append(twitter);
	$("#header").append(myLocation);

	//display biopic 
	var myPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(myPicture);
			
	//display all skills 
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		var mySkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header").append(mySkills);
	}	
}

displayBio();

//function to display work information
function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var workDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		$(".work-entry:last").append(workLocation);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(workDate);
		$(".work-entry:last").append(workDescription);

	}
}

displayWork();

function displayProjects(){
	$("#projects").append(HTMLprojectStart);
	for(eachProject in project.assignment){

		var myProjectTitle = HTMLprojectTitle.replace("%data%", project.assignment[eachProject].title);
		var myProjectDate = HTMLprojectDates.replace("%data%", project.assignment[eachProject].date);
		var myProjectDescription = HTMLprojectDescription.replace("%data%", project.assignment[eachProject].description);

		$(".project-entry:last").append(myProjectTitle);
		$(".project-entry:last").append(myProjectDate);
		$(".project-entry:last").append(myProjectDescription);
		
		for(image in project.assignment[eachProject].images){
			var myProjectImages = HTMLprojectImage.replace("%data%", project.assignment[eachProject].images[image]);
			$(".project-entry:last").append(myProjectImages);
		}
	}
}

displayProjects();

function displayUniversityEducation(){
	$("#education").append(HTMLschoolStart);
	for(eachSchool in education.schools){
		var schoolTitle = HTMLschoolName.replace("%data%", education.schools[eachSchool].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[eachSchool].degree); 
		var schoolDate = HTMLschoolDegree.replace("%data%",education.schools[eachSchool].date); 
		var schoolLocation = HTMLschoolDegree.replace("%data%",education.schools[eachSchool].location); 

		$(".education-entry:last").append(schoolTitle);
		$(".education-entry:last").append(schoolDegree);
		$(".education-entry:last").append(schoolDate);
		$(".education-entry:last").append(schoolLocation);

		for (eachMajor in education.schools[eachSchool].major) {
			var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[eachSchool].major[eachMajor]);
			$(".education-entry:last").append(schoolMajor);

		}
	}
}

displayUniversityEducation();

function displayOnlineEducation(){
		for(eachOnlineCourse in education.onlineCourses){
			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eachOnlineCourse].title);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eachOnlineCourse].school);
			var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[eachOnlineCourse].date);
			var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[eachOnlineCourse].url);

			$(".education-entry:last").append(onlineTitle);
			$(".education-entry:last").append(onlineSchool);
			$(".education-entry:last").append(onlineDates);
			$(".education-entry:last").append(onlineURL);
		}
}

displayOnlineEducation();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
