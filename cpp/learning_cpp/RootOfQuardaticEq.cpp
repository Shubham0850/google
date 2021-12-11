#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int a, b, c;
    float r1, r2;

    cout << "Program to find the root of quardatic equation" << endl;
    cout << "Enter a: ";
    cin >> a;
    cout << "ENter b: ";
    cin >> b;
    cout << "ENter c: ";
    cin >> c;

    r1 = (-b + sqrt(b * b - 4 * a * c)) / (2 * a);
    r2 = (-b - sqrt(b * b - 4 * a * c)) / (2 * a);

    cout << "First root is : " << r1 << endl;
    cout << "Second root is : " << r2 << endl;

    return 0;
}