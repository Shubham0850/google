#include <iostream>
using namespace std;

int main()
{
    int n, sum;
    cout << "Google Interview problem." << endl;
    cout << "Enter the size of the array: " ;
    cin >> n;
    int arr[n];

    for(int i=0; i < n; i++)
    {
        cout << "Enter element a[" << i << "]: ";
        cin >> arr[i];
    }

    cout << "Enter the sum: ";
    cin >> sum;

    for(int i=0; i<n; i++)
    {
        for(int j=(i+1); j<n; j++)
        {
            int add = arr[i] + arr[j];
            
            if(add == sum){
                cout << "sum found";
            }
            else{
                cout << "sum not found";
            }
        }
    }

    return 0;
}