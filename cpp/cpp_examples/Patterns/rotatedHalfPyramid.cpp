#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print 180deg rotated half pyramid." << endl;

    cout << "Enter the length of pyramid: ";
    cin >> n;

    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c < n; c++)
        {
            if ((r + c) >= (n - 1))
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}