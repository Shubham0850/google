#include <iostream>
using namespace std;

int main()
{
    int n, rev = 0;

    cout << "Program to Reverse a number" << endl;
    cout << "Enter the Number: ";
    cin >> n;

    while (n != 0)
    {
        int lastDigit = n % 10;
        rev = rev * 10 + lastDigit;

        n /= 10;
    }
    cout << "Reversed number is: " << rev << endl;

    return 0;
}