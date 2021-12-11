#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print the half pyramid using numbers." << endl;

    cout << "Enter the length of Pyramid: ";
    cin >> n;

    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c <= r; c++)
        {
            cout << r + 1;
        }
        cout << endl;
    }
    return 0;
}