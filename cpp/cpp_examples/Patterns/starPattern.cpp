#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print star pattern." << endl;

    cout << "Enter the length of pattern: ";
    cin >> n;

    // Loop for upper triangle
    for (int r = 1; r <= n; r++)
    {
        // Loop for Specing
        for (int c1 = 1; c1 <= (n - r); c1++)
        {
            cout << "  ";
        }
        // Loop for stats
        for (int c2 = 1; c2 <= (2 * r - 1); c2++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    // loop for second triangle
    for (int r = 1; r <= n; r++)
    {
        // for spaces
        for (int c1 = 1; c1 < r; c1++)
        {
            cout << "  ";
        }
        // for stars
        for (int c2 = (2*n-(2*r-1)); c2 > 0; c2--)
        {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}