#include <iostream>
#include <unordered_map>
using namespace std;

int main()
{
    // Declaring umap to be of <string, int> type
    // key will be of string type and mapped value will be of int type
    unordered_map<string, int> umap;

    // inserting values by using [] operator
    umap["students"] = 20;
    umap["teachers"] = 2;
    umap["class"] = 1;

    // Traversing an unordered map
    for (auto x : umap)
    {
        cout << x.first << " " << x.second << endl;
    }

    return 0;
}