#include <iostream>
using namespace std;

int main()
{
    int num, r;
    cout << "Program to print the last digit of a number."<< endl;
    cout << "Enter a number: " ;
    cin >> num;

    while(num > 0)
    {   
        r = num % 10;
        num /= 10;
        cout << r << endl;
    }

    return 0;
}