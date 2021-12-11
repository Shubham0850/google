#include <iostream>
using namespace std;

int main()
{
    int n1, n2;

    cout << "Program to find max no." << endl;
    cout << "Enter first no.: ";
    cin >> n1;
    cout << "Enter second no.: ";
    cin >> n2;

    if (n1 > n2)
    {
        cout << n1 << " is max no." << endl;
    }
    else
    {
        cout << n2 << " is max no." << endl;
    }

    return 0;
}