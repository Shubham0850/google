#include <iostream>
using namespace std;

int main()
{
    int n, sum;

    cout << "Program to find the sum of first N natural no." << endl;
    cout << "ENter the value of n: ";
    cin >> n;

    sum = n * (n + 1) / 2;

    cout << "Sum of first "<< n << " natural no. : " << sum << endl;
    return 0;
}