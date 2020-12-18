#include "Students.h"
#include <iostream>
using namespace std;
int main()
{
	Students<char>* Spis = new Students<char>;
	Spis->Start = NULL;
	Spis->new_list("Ivan", 'a', Spis);
	Spis->new_list("Petr", 'p', Spis);
	Spis->new_list("Vasili", 'k', Spis);
	Spis->Show(Spis);
	Spis->del(Spis);
	delete Spis->Start;
	delete Spis;
}