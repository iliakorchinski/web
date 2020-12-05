#include "Complex.h"
#include <iostream>
using namespace std;
Complex* VectorAdding(int n,Complex* vec1,Complex *vec2) {
	Complex* vec3 = new Complex[n];
	for (int i = 0; i < n; i++) {
		vec3[i].setReal(vec1[i].getReal() + vec2[i].getReal());
		vec3[i].setComp(vec1[i].getComp() + vec2[i].getComp());
	}
	return vec3;
}
int main() {
	int n = 3;
	Complex *vec1 = new Complex[n];
	Complex* vec2 = new Complex[n];
	Complex a(-2, 1);
	Complex b = a;
	Complex c(1, 1);
	vec1[0] = a; vec1[1] = b; vec1[2] = c;
	vec2[0] = a; vec2[1] = b; vec2[2] = c;
	cout << (a+c).getReal()<<" + "<< (a+c).getComp()<<'i'<<endl;
	Complex* Vec3 = VectorAdding(n, vec1, vec2);
	cout << "Coordinates of result vector are: \n( ";
	for (int i = 0; i < n; i++) {
		cout << Vec3[i].getReal() << " + " << Vec3[i].getComp() << "i; ";
	}
	cout << ")\n";
	delete[]vec1;
	delete[]vec2;
	delete[]Vec3;
}