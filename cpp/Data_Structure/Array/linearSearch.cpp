#include <iostream>
using namespace std;

int linearSearch(int n, int arr[], int key)
{
    for (int i = 0; i < n; i++)
    {
        if (key == arr[i])
        {
            cout << "Key found at arr[" << i << "]" << endl;
            return 0;
        }
    }

    cout << "Key not found in the given array." << endl;
    return 0;
}

int main()
{
    int n, key;
    cout << "Linear Search in an Array." << endl;
    cout << "Time complexity of this algorithm is O(n)." << endl;
    cout << "Enter the length of the Array: ";
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cout << "Enter arr[" << i << "]: ";
        cin >> arr[i];
    }

    cout << "Enter the key to search: ";
    cin >> key;

    linearSearch(n, arr, key);

    return 0;
}