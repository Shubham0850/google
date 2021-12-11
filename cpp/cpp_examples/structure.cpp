#include <iostream>
using namespace std;

struct student
{
    char name[50];
    int roll;
    float marks;
} s[5];

int main()
{

    cout << "This program is to store the information of 5 student usign structure and array." << endl;
    cout << "Enter the student details" << endl;

    // Store student details
    for (int i = 0; i < 5; i++)
    {
        s[i].roll = i + 1;
        cout << "Details for Roll no. " << s[i].roll << endl;

        cout << "Name: ";
        cin >> s[i].name;

        cout << "Marks: ";
        cin >> s[i].marks;

        cout << endl;
    }

    // Display students details
    for (int i = 0; i < 5; i++)
    {
        cout << "Details of student: " << i + 1 << endl;

        cout << "Name: " << s[i].name << endl;
        cout << "Roll No: " << s[i].roll << endl;
        cout << "Marks: " << s[i].marks << endl;
    }

    return 0;
}