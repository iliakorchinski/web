#include <iostream>
#include <conio.h>
#include <string.h>
class Word {
char word[20];
int npages;
int pages[10];
public:
Word();
char );
int getnpages(;
int );
void show(;
};
using namespace std;
Word::Word() {
cout « "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ " « endl;
cout « "Input word :"; cin » word;
cout « "Input number of pages:"; cin » npages;
cout « "Input your pages pages:";
for (int i = 0; i < npages; i++)
cin » pages[i];
}
void Word::show() {
cout « "Word :" « word « endl;
cout « "Number of pages:" « npages « endl;
cout « "Numbers of pages:" « npages « endl;
for (int i = 0; i < npages; i++)
{
cout « pages[i] « " ";
}
cout « "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ " « endl;
}
char *Word::getword() { return word; }
int Word::getnpages() { return npages; }
int *Word::getpages() { return pages;}
void MoreN(Word spis[], int n)
{
int number;
cout « "Input N of pages : "; cin » number;
int a = 1;
for (int i = 0; i < n; i++)
if (spis[i].getnpages() > number)
{
cout « spis[i].getword() « " ";
a = 0;
}
cout « endl;
if (a) {
cout « "Such words don't exist" « endl;
}
}
void Alfabet(Word spis[], int n)
{
for (int i = 0; i < n - 1; i++)
{
for (int j = i + 1; j < n; j++)
{
if (strcmp(spis[i].getword(), spis[j].getword()) > 0)
{
Word spis1 = spis[i];
spis[i]= spis[j];
spis[j] = spis1;
}
}
}
cout « "In alfabetic order:" « endl;
for (int i = 0; i < n; i++)
cout « spis[i].getword() « endl;
cout « endl;
}
void FindWord(Word spis[], int n)
{
char word1[20];
cout « "Input your word : "; cin » word1;
int a = 1;
for (int i = 0; i < n; i++)
{
if (strcmp(word1, spis[i].getword()) == 0)
{
for(int j=0;j< spis[i].getnpages();j++)
cout « *spis[i].getpages()+j « " ";
cout « endl;
a = 0;
}
}
if (a) {
cout « "Such words don't exist" « endl;
}
}
int main() {
Word* spis;
int n;
cout « "Enter number of Words : "; cin » n;
spis = new Word[n];
MoreN(spis, n);
Alfabet(spis, n);
FindWord(spis, n);
delete[] spis;
cout « "Press any key!";
while (!_kbhit());
return 0;
}