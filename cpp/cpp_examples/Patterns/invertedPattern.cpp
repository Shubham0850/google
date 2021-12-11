#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Program to print Inverted Pattern" << endl;

    cout << "Enter the length of pattern: ";
    cin >> n;

    for (int r = n; r > 0; r--)
    {
        int temp = 1;
        for (int c = r; c > 0; c--)
        {
            cout << temp++ << " ";
        }
        cout << endl;
    }

    return 0;
}