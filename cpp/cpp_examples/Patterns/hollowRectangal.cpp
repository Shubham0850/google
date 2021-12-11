#include <iostream>
using namespace std;

int main()
{
    int row, col;

    cout << "Program to print hollow reactangle from *" << endl;

    cout << "Enter the no. of rows: ";
    cin >> row;

    cout << "Enter the no. of col: ";
    cin >> col;

    for (int r = 0; r < row; r++)
    {
        for (int c = 0; c < col; c++)
        {
            if (r == 0 || r == row - 1 || c == 0 || c == col - 1)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }

    return 0;
}