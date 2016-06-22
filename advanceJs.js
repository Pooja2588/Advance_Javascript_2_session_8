function vehicle(make,model,year)
{
this.make=make;
this.model=model;
this.year=year;
}

var alto=new vehicle("maruti","lxi",2009);
var eon=new vehicle("hundai","vxi",2006);

alert("the car alto is  maker "+ alto.make +"of model "+ alto.model + "which launch in year "+alto.year);
alert("the car eon is  maker "+ eon.make +"of model "+ eon.model + "which launch in year "+eon.year);

var a;
var b;

function add(a,b)
{
	var c=a+b;
	alert("Addition of "+a+ ""+ b+ " is: "+c); 
}

function subtract(a,b)
{
	var c=a-b;
	alert("subtraction of "+a+ ""+ b+ " is: "+c); 
}

function multiply(a,b)
{
	var c=a*b;
	alert("Multilication of "+a+ ""+ b+ " is: "+c); 
}

function division(a,b)
{
	var c=a\b;
	alert("Division of "+a+ ""+ b+ " is: "+c); 
}
/*problem statement 3*/
function getDetails()
{
	
}


/*problem statement 4*/
function person(name,age)
{
	this.name=name;
	this.age=age;
}

var student=Object.create(person);
student.age=