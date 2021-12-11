// Reverse The array
// First Approch
//  
#include <iostream>
using namespace std;
// Function for printing the array
void PrintArray(int arr[], int arrSize)
{
    cout << "{ ";
    for (int i = 0; i < arrSize; i++)
    {
        cout << arr[i] << ", ";
    }
    cout << "}" << endl;
}

// Function declaration for reversing the array
void ReverseArray(int arr[], int arrSize)
{
    int temp;
    arrSize--;
    for (int i = 0; i <= arrSize; arrSize--, i++)
    {
        temp = arr[i];
        arr[i] = arr[arrSize];
        arr[arrSize] = temp;
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    int arrSize = sizeof(arr) / sizeof(arr[0]);

    cout << "The original Array is : " << endl;
    // Printing original array
    PrintArray(arr, arrSize);
    // Reverse the array
    ReverseArray(arr, arrSize);
    cout << "The reverse Array is : " << endl;
    // Printing reverse array
    PrintArray(arr, arrSize);

    return 0;
}