#include <iostream>
using namespace std;

int binarySearch(int n, int arr[], int key)
{
    int s = 0, e = n;

    while (s <= e)
    {
        int mid = s + e;
        if (arr[mid] == key)
        {
            cout << "Key found at arr[" << mid << "]" << endl;
            return 0;
        }
        else if (arr[mid] > key)
        {
            e = mid - 1;
        }
        else if (arr[mid] < key)
        {
            s = mid + 1;
        }
    }

    cout << "key not found." << endl;
    return 0;
}

int main()
{
    int n, key;
    cout << "Binary Search in an Array." << endl;
    cout << "Time Complexity of this algorithm is O(log n)." << endl;
    cout << "Array must be sorted" << endl;
    cout << "Enter the no. of element: ";
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cout << "Enter element arr[" << i << "]: ";
        cin >> arr[i];
    }

    cout << "Enter the key to search: ";
    cin >> key;

    binarySearch(n, arr, key);

    return 0;
}