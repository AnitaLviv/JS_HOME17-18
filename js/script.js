$(function () {

	

	var $input = $('.searchInput');
	var $button = $('.searchButton');
	var $content = $('.content');

	function appendResultToPage(page, image) {
			$content.append('<div class="first"><a href="'+ page +'" target="_blank"><img src="' + image + '"></a></div>');
	};
	
	function cantFoundResult() {
			$content.append('<div class="first"><p>This image not found</p></div>');
	}

	function deleteResultRequestFromHtml() {
		
		$('.first').remove();
	}

function getDataSearchRequest() {

		deleteResultRequestFromHtml();
		
	$.ajax({
		url: 'https://pixabay.com/api/?key=3044055-26f05a0ce42eac2412c64079c&q=' + encodeURIComponent($input.val()),
		dataType: 'jsonp',

		success:	function (data) {

			if ( $input.val() === '') {
				 return false;
				} else 

			if ( parseInt(data.totalHits) > 0 ) 
				$.each( data.hits, function(URL, hit) {

					appendResultToPage ( hit.pageURL, hit.previewURL );

				});
			
			else {
				 cantFoundResult ();
				}
		}
	});
};

	$input.keydown(function(event) {
		if ( event.keyCode == 13) {
			getDataSearchRequest();
		}
	});

$button.on('click', getDataSearchRequest ); 


	
 var Human = function (info){
 		this.name = info.name;
 		this.age = info.age;
 		this.sex = info.sex;
 		this.height = info.height;
 		this.weight = info.weight;
 };


 function Worker(info) {
 	Human.apply(this, [info]);
 	this.job = info.job; 
 	this.salary = info.salary;

}; 

function Student (info) {
	Human.apply(this, [info]),
	this.study = info.study;
	this.scholarships = info.scholarships;
	
};

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.toWork = function () {
	
	console.log(this.name + ' is working');
}


Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.toWatch = function () {
	console.log (this.name + ' is watching TVShow');
}


var Brendon = {
	name: 'Brendon',
	age: 33,
	sex: 'male',
	height: 199,
	weight: 83,
	job: ' artist',
	salary: 10000,
	study: 'California University',
	scholarships: 1000

};

var Dilan = {
	name: 'Dilan',
	age: 26,
	sex: 'male',
	height: 186,
	weight: 79,
	job: 'singer',
	salary: 1200,
	study: 'Paris academy',
	scholarships: 2000

};

var Brenda = {
	name: 'Brenda',
	age: 26,
	sex: 'female', 
	height: 175,
	weight: 59,
	job: 'dancer', 
	salary: 11000,
	study: 'Paris University',
	scholarships: 500
};

var Oliver = {
	name: 'Oliver',
	age: 37,
	sex: 'male',
	height: 182,
	weight: 75,
	job: 'teacher',
	salary: 0,
	study: 'Dubai Academy',
	scholarships: ' 100 '
}

var newWorker = new Worker (Brendon);
var newStudent = new Student (Dilan);
var newPerson = new Student(Brenda);
var Aria = new Worker (Oliver);

console.log(newWorker);
console.log(newStudent);
console.log(newPerson);
console.log(Aria);
newWorker.toWork();
newStudent.toWatch();

});
