#include <iostream>
using namespace std;

int main()
{
    int x = 20;
    int *p = &x;

    cout << "Program to understand pointers" << endl;
    cout << x << endl;
    cout << &x << endl;
    cout << p << endl;
    cout << &p << endl;
    cout << *p << endl;

    return 0;
}