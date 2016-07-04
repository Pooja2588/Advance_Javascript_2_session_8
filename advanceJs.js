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

var vehicle1=function(maker,name,model,year,color)
{
	this.maker=maker;
	this.name=name;
	this.model=model;
	this.color=color;
}
var detail=[];
function getDetails()
{
	var maker=document.getElementById('maker').value;
	var name=document.getElementById('name').value;
	var model=document.getElementById('model').value;
	var year=document.getElementById('year').value;
	var car=new vehicle1(maker,name,model,color);
	detail.push(car);
	console.log(car);
}


/*problem statement 4*/
function person(name,age)
{
	this.name=name;
	this.age=age;
}

var student=Object.create(person);
Person.prototype.nationality = "Indian"; 
