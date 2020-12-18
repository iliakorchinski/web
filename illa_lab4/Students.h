#pragma once
#include <iostream>
using namespace std;
template <typename Type>
struct Students {
	string name;
	Type password;
	Students* Next, * Start;
	void new_list(string name,Type x, Students*& MyList) {
		try {
			Students* ex = new Students;
			ex->name = name;
			ex->password = x;
			ex->Next = MyList->Start;
			MyList->Start = ex;
		}
		catch (bad_alloc & ba) {
			cerr << "bad_alloc caught: " << ba.what() << '\n';
		}
	};
	void Show(Students* MyList) {
		try {
			if (MyList->Start == NULL)
				throw "Steck is empty!!\n";
			Students* ex = MyList->Start;
			while (ex != NULL)
			{
				cout << ex->name << " "<<ex->password<<endl;
				ex = ex->Next;
			}
		}
		catch (const char* exception)
		{
			cerr << "Error: " << exception << '\n';
		}
	};
	void del(Students* MyList) {
		try {
			if (MyList->Start == NULL)
				throw "Steck is empty!!\n";
			while (MyList->Start != NULL)
			{
				Students* ex = MyList->Start->Next;
				delete MyList->Start;
				MyList->Start = ex;
			}
		}
		catch (const char* exception)
		{
			cerr << "Error: " << exception << '\n';
		}
	};
};