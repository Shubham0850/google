#include <iostream>
using namespace std;

class Room{
    public:
            // Data Member
            int l,b,h;
            // Member Function
            int Area(){
                return l * b;
            }
            // Member Function
            int Volume(){
                return l * b * h;
            }
};

int main(){
    Room pujaRoom;

    pujaRoom.l = 50;
    pujaRoom.b = 90;
    pujaRoom.h = 70;

    cout << "Puja room area is: " << pujaRoom.Area() << endl;
    cout << "Puja room bolume is: " << pujaRoom.Volume() << endl;

    return 0;
}