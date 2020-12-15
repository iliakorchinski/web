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

		this.sellStudent = function(){
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

function newP(text){
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(text));
	return p;
}

function newInputText(id){
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("id", id);
	return input;
}

function newInputButton(text, fn, id){
	var input = document.createElement("input");
	input.setAttribute("type", "button");
	input.setAttribute("value", text);
	input.setAttribute("onclick", fn);
	input.setAttribute("id", id);
	return input;
}

function appendLine(div, text, id){
	div.appendChild(document.createTextNode(text));
	div.appendChild(newInputText(id));
	div.appendChild(document.createElement("br"));
}

function addElement(){
	var name, producer, strength, count;
	name = document.getElementById("inputName").value;
	surname = document.getElementById("inputProducer").value;
	age = document.getElementById("inputStrength").value;
	ball = document.getElementById("inputCount").value;
	arr.push(new Student(name, producer, strength, count));
	printString(document.getElementById("tb"), arr[arr.length - 1], (arr.length - 1));
	printAverage();
}

function deleteTr(element){
	var index = parseInt(element.id.slice("delete".length));
	arr.splice(index, 1);
   document.getElementById('tb').removeChild(document.getElementById('tr'+index));
   for(var i=index; i < arr.length; i++)
    {
        document.getElementById('delete'+(i+1)).setAttribute("id","delete"+i);
        document.getElementById('tr'+(i+1)).setAttribute("id","tr"+i);
    }
    printAverage();
}

function printFields(){
	var div = document.getElementById("fields");
	appendLine(div, "Имя: ", "inputName");
	appendLine(div, "Фамилия: ", "inputProducer");
	appendLine(div, "Возраст: ", "inputStrength");
	appendLine(div, "Средний бал: ", "inputCount");
	div.appendChild(newInputButton("Добавить", "addElement()", "addElemButton"));
}

function printString(table, item, index){
	var tr;
	tr = document.createElement("tr");
	tr.setAttribute("class", "tr");
	tr.setAttribute("id", "tr" + index)
	addTd(tr, "tdName", item.name);
	addTd(tr, "tdProducer", item.producer);
	addTd(tr, "tdStrength", item.strength);
	addTd(tr, "tdCount", item.count);
	var td = document.createElement("td");
	td.setAttribute("class", "tdDelete");
	td.appendChild(newInputButton("Удалить", "deleteTr(this)", "delete" + index));
	tr.appendChild(td);
	table.appendChild(tr);
}

function printHead(table){
	var tr;
	tr = document.createElement("tr");
	tr.setAttribute("id", "trHead");
	addTh(tr, "thName", "Имя");
	addTh(tr, "thProducer", "Фамилия");
	addTh(tr, "thStrength", "Возраст");
	addTh(tr, "thCount", "Средний балл");
	table.appendChild(tr);
}

function printTable(){
	var table = document.createElement("table");
	table.setAttribute("id","tb");
	printHead(table);
	for(var i = 0; i<arr.length; i++)
		printString(table, arr[i], i);
	document.getElementById("main").appendChild(table);
}

function printAverage(){
	var div = document.getElementById("average");
	while(div.firstChild){
		div.removeChild(div.firstChild);
	}
	var aver = 0;
	var arrBall = document.getElementsByClassName("tdCout");
	for(var i = 0; i<arrCount.length; i++)
		aver+=parseInt(arrCount[i].textContent);
	aver/=arrCount.length;
	div.appendChild(newP("Средний балл: " + aver));
}

function printAddButton(){
	var div = document.getElementById("fields");
		appendLine(div, "Название: ", "inputName");
		appendLine(div, "Фамилия: ", "inputProducer");
		appendLine(div, "Возраст: ", "inputStrength");
		appendLine(div, "Средний балл: ", "inputCount");
		div.appendChild(newInputButton("Добавить", "addElement()", "addElemButton"));
}

function inputArray(){
	var xhr = new XMLHttpRequest();
	var tmp = [];
	xhr.open('GET', 'http://localhost:3000', false);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			tmp = JSON.parse(xhr.responseText);
			for(var i=0;i<tmp.length;i++)
			    arr.push(new Student(tmp[i].name, tmp[i].producer, tmp[i].strength, tmp[i].count));
		}
	}
	xhr.send();
}

var arr = [];

inputArray();
printTable();
printAverage();
printAddButton();