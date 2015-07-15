

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
			"name" : "College",
			"location" : "Mississauga, Ontario",
			"degree" : "Undergrad",
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
			"location": "Scarborough, ON",
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

	$("#header").append(myName, myRole);

	//display contacts
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var myLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#header").append(mobile, email, github, twitter, myLocation);
	$("#lets-connect").append(mobile, email, github, twitter, myLocation);

	
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

		$(".work-entry:last").append(workLocation, formattedEmployerTitle, workDate, workDescription);
	}
}

//function to display projects 
function displayProjects(){
	$("#projects").append(HTMLprojectStart);
	for(eachProject in project.assignment){

		var myProjectTitle = HTMLprojectTitle.replace("%data%", project.assignment[eachProject].title);
		var myProjectDate = HTMLprojectDates.replace("%data%", project.assignment[eachProject].date);
		var myProjectDescription = HTMLprojectDescription.replace("%data%", project.assignment[eachProject].description);

		$(".project-entry:last").append(myProjectTitle, myProjectDate, myProjectDescription);
	
		for(image in project.assignment[eachProject].images){
			var myProjectImages = HTMLprojectImage.replace("%data%", project.assignment[eachProject].images[image]);
			$(".project-entry:last").append(myProjectImages);
		}
	}
}

//function to display Uni education 
function displayUniversityEducation(){
	$("#education").append(HTMLschoolStart);
	for(eachSchool in education.schools){
		var schoolTitle = HTMLschoolName.replace("%data%", education.schools[eachSchool].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[eachSchool].degree); 
		var schoolDate = HTMLschoolDegree.replace("%data%",education.schools[eachSchool].date); 
		var schoolLocation = HTMLschoolDegree.replace("%data%",education.schools[eachSchool].location); 

		$(".education-entry:last").append(schoolTitle, schoolDegree, schoolDate, schoolLocation);

		for (eachMajor in education.schools[eachSchool].major) {
			var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[eachSchool].major[eachMajor]);
			$(".education-entry:last").append(schoolMajor);

		}
	}
}

//function to display online courses 
function displayOnlineEducation(){	
		$("#education").append(HTMLonlineClasses);
		for(eachOnlineCourse in education.onlineCourses){
			var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eachOnlineCourse].title);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eachOnlineCourse].school);
			var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[eachOnlineCourse].date);
			var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[eachOnlineCourse].url);
			
			$(".education-entry:last").append(onlineTitle, onlineDates, onlineSchool, onlineURL);
		}
}

//All function calls
displayBio();
displayWork();
displayProjects();
displayUniversityEducation();
displayOnlineEducation();

//User clicks on screen is recorded 
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

//Google maps 
$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);
