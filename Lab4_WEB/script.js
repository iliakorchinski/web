class Student{
	constructor(name, producer, strength, count, id){
		this.name = name;
		this.producer = producer;
		this.strength = strength;
		this.count = count;
		this.id = id;

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

function generateID(){
	return `f${(~~(Math.random()*1e8)).toString(16)}`;
}

function addTh(tr, id, text){
	var th = $("<th>", {id: id});
	th.text(text);
	tr.append(th);
}

function addTd(tr, clas, text){
	var td = $("<td>", {class: clas});
	td.text(text);
	tr.append(td);
}

function newInputText(id){
	var input = $("<input>", {type: "text", id: id});
	return input;
}

function newInputButton(text, fn, id){
	var input = $("<input>", {type: "button", id: id, value: text, onclick: fn});
	return input;
}

function appendLine(div, text, id){
	div.append(text);
	div.append(newInputText(id));
	div.append($("<br>"));
}

function addElement(){
	var name, producer, strength, count;
	name = $("#inputName")[0].value;
	producer = $("#inputProducer")[0].value;
	strength = $("#inputStrength")[0].value;
	count = $("#inputCount")[0].value;
	arr.push(new Student(name, producer, strength, count, generateID()));
	printString($("#tb"), arr[arr.length - 1]);
	printAverage();
}

function deleteTr(element){
	var tr = $(element).closest("tr")[0];
	var id = tr.id.slice("tr".length);
	var index = arr.findIndex(x => x.id == id);
	arr.splice(index, 1);
   $("#tr"+id).remove();
   printAverage();
}

function printFields(){
	var div = $("#fields");
		appendLine(div, "Имя: ", "inputName");
		appendLine(div, "Фамилия: ", "inputProducer");
		appendLine(div, "Возраст: ", "inputStrength");
		appendLine(div, "Балл: ", "inputCount");
		div.append(newInputButton("Добавить", "addElement()", "addElemButton"));
}

function printString(table, item){
	var tr;
	tr = $("<tr>", {class: "tr", id: "tr" + item.id});
	addTd(tr, "tdName", item.name);
	addTd(tr, "tdProducer", item.producer);
	addTd(tr, "tdStrength", item.strength);
	addTd(tr, "tdCount", item.count);
	var td = $("<td>", {class: "tdDelete"});
	td.append(newInputButton("Удалить", "deleteTr(this)", "deleteButton"));
	tr.append(td);
	table.append(tr);
}

function printHead(table){
	var tr;
	tr = $("<tr>", {id: "trHead"});
	addTh(tr, "thName", "Имя");
	addTh(tr, "thProducer", "Фамилия");
	addTh(tr, "thStrength", "Возраст");
	addTh(tr, "thCount", "Балл");
	table.append(tr);
}

function printTable(){
	var table = $("<table>", {id: "tb"});
	printHead(table);
	for(var i = 0; i<arr.length; i++)
		printString(table, arr[i]);
	$("#main").append(table);
}

function printAverage(){
	var div = $("#average");
	var aver = 0;
	var arrCount = $(".tdCount");
	for(var i = 0; i<arrCount.length; i++)
		aver+=parseInt(arrCount[i].textContent);
	aver/=arrCount.length;
	div.text("Средний балл: " + aver);
}

function inputArray(){
	$.ajax({url: "http://localhost:3000", async: false, success: function(data){
		for(var i=0;i<data.length;i++)
			arr.push(new Student(data[i].name,data[i].producer,data[i].strength,data[i].count,generateID()));
	}});
}

var arr = [];

inputArray();
printTable();
printAverage();
printFields();