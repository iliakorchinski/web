#include "Complex.h"
#include <iostream>
Complex::Complex() {
	real = 0;
	comp = 0;
}
Complex::Complex(int r,int c) {
	real = r;
	comp = c;
}
Complex::Complex(const Complex& ob) {
	real = ob.real;
	comp = ob.comp;
}
Complex Complex::operator+(Complex ob) {
	Complex rab;
	rab.real = real + ob.real;
	rab.comp = comp + ob.comp;
	return rab;
}
Complex Complex::operator-(Complex ob) {
	Complex rab;
	rab.real = real - ob.real;
	rab.comp = comp - ob.comp;
	return rab;
}
Complex Complex::operator*(Complex ob) {
	Complex rab;
	rab.real = real * ob.real - comp * ob.comp;
	rab.comp = real * ob.comp + comp * ob.real;
	return rab;
}
Complex Complex::operator/(Complex ob) {
	Complex rab;
	rab.real = (real * ob.real + comp * ob.comp)/(ob.comp*ob.comp + ob.real*ob.real);
	rab.comp = (ob.real * comp - real * ob.comp) / (ob.comp * ob.comp + ob.real * ob.real);
	return rab;
}
Complex& Complex::operator=(const Complex &ob) {
	real = ob.real;
	comp = ob.comp;
	return *this;
}