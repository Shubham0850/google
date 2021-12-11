#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print Butterfly Pattern." << endl;

    cout << "Entetr the length of Pattern: ";
    cin >> n;

    for (int r = 1; r <= n; r++)
    {
        for (int c = 1; c <= 2 * n; c++)
        {
            if (c <= r || (r + c) > (2 * n))
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }

     for (int r = n; r > 0; r--)
    {
        for (int c = 2*n; c > 0; c--)
        {
              if (c <= r || (r + c) > (2 * n))
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
   
    return 0;
}