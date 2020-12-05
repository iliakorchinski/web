class Complex {
	double real;
	double comp;
public:
	Complex();
	Complex(int r,int c);
	Complex(const Complex&ob);
	double getReal() { return real; }
	void setReal(double real) {
		this->real = real;
	}
	void setComp(double comp) {
		this->comp = comp;
	}
	double getComp() { return comp; }
	Complex operator+(Complex ob);
	Complex operator-(Complex ob);
	Complex operator*(Complex ob);
	Complex operator/(Complex ob);
	Complex& operator=(const Complex &ob);
};
