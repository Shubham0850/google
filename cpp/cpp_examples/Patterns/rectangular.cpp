#include <iostream>
using namespace std;

int main()
{
    int row, col;

    cout << "Program to print rectanglular * pattern" << endl;

    cout << "Enter the no. of rows: ";
    cin >> row;

    cout << "Enter the no. of columns: ";
    cin >> col;

    for (int r = 0; r < row; r++)
    {
        for (int c = 0; c < col; c++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    return 0;
}