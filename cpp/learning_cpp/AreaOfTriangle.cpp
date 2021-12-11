#include <iostream>
using namespace std;

int main()
{
    float a, b, h;

    cout << "Program to find the area of a triangle" << endl;
    cout << "Enter base of triangle: " ;
    cin >> b;
    cout << "Enter height of triangle: ";
    cin >> h;

    a = (b * h) / 2;

    cout << "Area of triangle is " << a << endl;

    return 0;
}