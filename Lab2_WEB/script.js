class Student{
	constructor(name, producer, strength, count){
		this.name = name;
		this.producer = producer;
		this.strength = strength;
		this.count = count;

		var isAvailable = function(){
			if(count > 0)
				return true;
			else
				return false;
		}

		this.sellStudent = function () {
			if(isAvailable())
			{
				this.count--;
				return true;
			}
			else
				return true;
		}
	}

	getCount(){
		return this.count;
	}
}

function inputArray(arr){
    arr.push(new Student("Алексей", "Афанасьев", "4", "7"));
    arr.push(new Student("Вадим", "Ильин", "5", "6"));
    arr.push(new Student("Егор", "Ванькевич" ,"6", "5"));
    arr.push(new Student("Артур", "Манукян", "32", "8"));
    arr.push(new Student("Джаник", "Соловей", "19", "10"));
}


function addTh(tr, id, text){
	var th = document.createElement("th");
	th.setAttribute("id", id);
	th.appendChild(document.createTextNode(text));
	tr.appendChild(th);
}

function addTd(tr, clas, text){
	var td = document.createElement("td");
	td.setAttribute("class", clas);
	td.appendChild(document.createTextNode(text));
	tr.appendChild(td);
}

function printHead(table){
	var tr;
	tr = document.createElement("tr");
	tr.setAttribute("id", "trHead");
	addTh(tr, "thName", "Имя");
	addTh(tr, "thProducer", "Фамилия");
	addTh(tr, "thStrength", "Возраст");
	addTh(tr, "thCount", "Средний бал");
	table.appendChild(tr);
}

function printString(table, item){
	var tr;
	tr = document.createElement("tr");
	tr.setAttribute("class", "tr");
	addTd(tr, "tdName", item.name);
	addTd(tr, "tdProducer", item.producer);
	addTd(tr, "tdStrength", item.strength);
	addTd(tr, "tdCount", item.count);
	table.appendChild(tr);
}

function printTable(){
	var table = document.createElement("table");
	table.setAttribute("id","tb");
	printHead(table);
	for(var i = 0; i<arr.length; i++)
		printString(table,arr[i]);
	document.getElementById("main").appendChild(table);
}

function printAverage(){
	var p = document.createElement("p");
	var aver = 0;
	var arrCount = document.getElementsByClassName("tdCount");
	for(var i = 0; i<arrCount.length; i++)
		aver+=parseInt(arrCount[i].textContent);
	aver/=arrCount.length;
	p.appendChild(document.createTextNode("Средний балл: " + aver));
	document.getElementById("main").appendChild(p);
}

function check(Student) {
    console.log(Student.getCount());
    console.log(Student.sellStudent());
    console.log(Student.getCount());
}

var arr = [];

inputArray(arr);
printTable();
printAverage();
check(arr[0]);
