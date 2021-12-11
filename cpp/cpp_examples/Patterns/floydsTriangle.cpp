#include <iostream>
using namespace std;

int main()
{
    int num = 1, n;

    cout << "Program to print floyd's triangle." << endl;

    cout << "Enter the length of the Triangle: ";
    cin >> n;

    for (int r = 0; r < n; r++)
    {
        for (int c = 0; c <= r; c++)
        {
            cout << num++ << " ";
        }
        cout << endl;
    }
    return 0;
}
