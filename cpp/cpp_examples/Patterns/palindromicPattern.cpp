#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print Palindromic Pattern." << endl;

    cout << "Enter the length of pattern: ";
    cin >> n;

    for (int r = 1; r <= n; r++)
    {
        // For spaces
        for (int c1 = 1; c1 <= (n - r); c1++)
        {
            cout << " ";
        }
        // For first triangle
        for (int c2 = 0; c2 < r; c2++)
        {
            cout << (r - c2);
        }
        // For second triangle
        for (int c3 = 1; c3 < r; c3++)
        {
            cout << (1+c3);
        }
        cout << endl;
    }
}