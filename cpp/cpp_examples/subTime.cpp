#include <iostream>
using namespace std;

struct TIME
{
    int hour;
    int min;
    int sec;
};

void calcTimeDiff(struct TIME, struct TIME, struct TIME *);

int main()
{
    struct TIME t1, t2, difference;

    cout << "This is the program to find the difference between two time period.(hour min sec)" << endl;

    cout << "Enter first time period" << endl;
    cin >> t1.hour >> t1.min >> t1.sec;

    cout << "Enter second time period" << endl;
    cin >> t2.hour >> t2.min >> t2.sec;


    
    return 0;
}

void calcTimeDiff(struct TIME t1, struct TIME t2, struct TIME *difference)
{
    
}