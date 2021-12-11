#include <iostream>
using namespace std;

int main()
{
    char S[20];

    cout << "Enter your full name: ";
    cin.getline(S, 20);

    cout << "Hello, " << S << endl;

    return 0;
}