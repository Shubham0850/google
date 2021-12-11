#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print Rhombus Pattern." << endl;

    cout << "Enter the length of rhombus: ";
    cin >> n;

    for (int r = 1; r <= n; r++)
    {
        for (int c1 = 0; c1 < (n-r); c1++)
        {
            cout << "  ";
        }
        for (int c2 = 0; c2 < n; c2++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}