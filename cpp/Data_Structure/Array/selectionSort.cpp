#include <iostream>
using namespace std;

int selectionSort(int n, int arr[])
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i; j < n; j++)
        {
            if (arr[i] > arr[j])
            {
                int temp = arr[j];
                arr[i] = arr[j];
                arr[j] = arr[i];
            }
        }
    }

    return arr[n];
}

int main()
{
    int n;
    cout << "Selection Sort in an Array" << endl;
    cout << "Time complexity of this algorithm is O(n2)" << endl;
    cout << "Enter the lenght of the Array: ";
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cout << "Enter element arr[" << i << "]: ";
        cin >> arr[i];
    }
    arr[n] = selectionSort(n, arr);

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << endl;
    }

    return 0;
}