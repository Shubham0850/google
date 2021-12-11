#include <iostream>
using namespace std;

int main()
{
    float r, area;
    
    cout << "Program to find the area of a Circle" << endl;
    cout << "ENter the radius of the circle: " ;
    cin >> r;

    area = (float)22/7*r*r;

    cout << "Area of the Circle is : " << area << endl;

    return 0;
}