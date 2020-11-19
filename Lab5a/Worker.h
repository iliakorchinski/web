#include <iostream>
using namespace std;
class Worker {
	string name;
	int salary;
	int age;
	int seniority;
public:
	void SetSalary(int salary);
	void SetName(string name);
	void SetAge(int age);
	void SetSeniority(int senior);
	int getSalary();
	int getAge();
	int getSeniority();
	string getName();
	Worker();
	Worker(int a, int b, int c, string d);
	friend ostream& operator<<(ostream& mystream, const Worker& ob);
	friend istream& operator>>(istream& mystream, Worker& ob);
};
class Manager :public Worker {

	int numberOfSubordinates;
public:
	Manager() :Worker(30, 1000, 10, "Dima") {
		numberOfSubordinates = 30;
	};
	Manager(int a, int b, int c, int g, string d) :Worker(a, b, c, d) {
		numberOfSubordinates = g;
	};
	void SetnumberOfSubordinates(int a);
	int getnumberOfSubordinates();
};
class Programmer :public Worker {

public:
	Programmer() :Worker(20, 500, 2, "Ivan") {};
	Programmer(int a, int b, int c, string d) :Worker(a, b, c, d) {};
};
class administrator :public Worker {
	int numberOfSubordinates;
public:
	administrator() :Worker(25, 800, 5, "Alex") {
		numberOfSubordinates = 10;
	};
	administrator(int a, int b, int c, int g, string d) :Worker(a, b, c, d) {
		numberOfSubordinates = g;
	};
	void SetnumberOfSubordinates(int a);
	int getnumberOfSubordinates();
};
