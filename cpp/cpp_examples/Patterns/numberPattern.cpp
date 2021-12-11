#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print number pattern." << endl;

    cout << "Enter the lenght of pattern: ";
    cin >> n;

    for (int r = 1; r <= n; r++)
    {
        for (int c1 = 1; c1 <= (n - r); c1++)
        {
            cout << " ";
        }
        for (int c2 = 1; c2 <= r; c2++)
        {
            cout << c2 << " ";
        }
        cout << endl;
    }
    return 0;
}