#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print Inverted Half Pyramid." << endl;

    cout << "Enter the length of pyramid: ";
    cin >> n;

    for (int r = n; r > 0; r--)
    {
        for (int c = r; c > 0; c--) 
        {
            cout << "* ";
        }
        cout << endl;
    }

    return 0;
}