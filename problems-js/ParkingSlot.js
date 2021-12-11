// Brute Force Solution

const fs = require("fs");
const readLine = require("readline");

var file = "./input.txt";

var rl = readLine.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false,
});

function ParkingSlot() {
  let parkingLot;
  let counter = 0;
  // Read every line of txt file
  rl.on("line", function (text) {
    const line = text.toString();

    const lineArr = line.split(" ");

    // After Reading every line.

    if (lineArr[0] === "Create_parking_lot") {
      // Create Parking slot
      parkingLot = new Array(parseInt(lineArr[1])).fill(0);
    } else if (lineArr[0] === "Park") {
      // Park car
      parkingLot[counter] = { car_no: lineArr[1], driver_age: lineArr[3] };
      counter++;

    } else if (lineArr[0] === "Slot_numbers_for_driver_of_age") {
      // find slot numbers using age
    } else if (lineArr[0] === "Slot_number_for_car_with_number") {
      // find slot number using car number
    } else if (lineArr[0] === "Leave") {
      // Car leave from parking
    } else if (lineArr[0] === "Vehicle_registration_number_for_driver_of_age") {
      // vechile numbers using deiver age
    }

    console.log(parkingLot);
  });

}

ParkingSlot();
