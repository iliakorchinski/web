#include "Worker.h";
#include <iostream>;
using namespace std;
Worker::Worker() {
	name = "Default Worker";
	age = 18;
	salary = 100;
	seniority = 0;
}
Worker::Worker(int a, int b, int c, string d) {
	name = d;
	age = a;
	salary = b;
	seniority = c;
}
int Worker::getAge() {
	return age;
}
string Worker::getName() {
	return name;
}
int Worker::getSalary() {
	return salary;
}
int Worker::getSeniority() {
	return seniority;
}
void Worker::SetAge(int age) {
	this->age = age;
}
void Worker::SetSalary(int salary) {
	this->salary = salary;
}
void Worker::SetSeniority(int senior) {
	this->seniority = senior;
}
void Worker::SetName(string name) {
	this->name = name;
}
void Manager::SetnumberOfSubordinates(int a) {
	numberOfSubordinates = a;
}
void administrator::SetnumberOfSubordinates(int a) {
	numberOfSubordinates = a;
}
int Manager::getnumberOfSubordinates() {
	return numberOfSubordinates;
}
int administrator::getnumberOfSubordinates() {
	return numberOfSubordinates;
}
ostream& operator<<(ostream& mystream, const Worker& ob) {
	mystream << "Age is: "; mystream << ob.age; mystream << endl;
	mystream << "Name is: "; mystream << ob.name; mystream << endl;
	mystream << "Salary is: "; mystream << ob.salary; mystream << endl;
	mystream << "Seniority is: "; mystream << ob.seniority; mystream << endl;
	return mystream;
}
istream& operator>>(istream& mystream, Worker& ob) {
	cout << "Enter age : \n";
	int ag;
	mystream >> ag;
	ob.SetAge(ag);
	cout << "Enter name: \n";
	string name;
	mystream >> name;
	ob.SetName(name);
	cout << "Enter salary: \n";
	int salary;
	mystream >> salary;
	ob.SetSalary(salary);
	cout << "Enter seniority: \n";
	int seniority;
	mystream >> seniority;
	ob.SetSeniority(seniority);
	return mystream;
}