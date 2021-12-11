#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print 0-1 pattern." << endl;

    cout << "Enter the lenght of pattern: ";
    cin >> n;

    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c <= r; c++)
        {
            if ((r + c) % 2 == 0)
                cout << "1 ";
            else
                cout << "0 ";
        }
        cout << endl;
    }
    return 0;
}