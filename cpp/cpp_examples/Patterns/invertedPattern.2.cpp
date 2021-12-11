#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print Inverted Pattern (Second approch)." << endl;

    cout << "Enter the length of pattern: ";
    cin >> n;

    for (int r = 0; r < n; r++)
    {
        for (int c = 1; c <= n - r; c++)
        {
            cout << c << " ";
        }
        cout << endl;
    }

    return 0;
}