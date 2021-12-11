#include <iostream>
using namespace std;

enum week
{
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun
};

int main()
{
    week w;
    w = sun;
    cout << w << endl;
    return 0;
}