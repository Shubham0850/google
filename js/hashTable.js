// IMPLEMENTING OUR OWN HASH TABLE

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // HASHING function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // O(1)

  // INSERT items in hashTable
  set(key, value) {
    const address = this._hash(key);

    // for collision
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // O(1)

  // GET item in hashTable
  get(key) {
    const address = this._hash(key);

    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  // O(1)

  // KEYS
  keys() {
    let keysArr = [];

    for (let i = 0; i < this.data.length; i++) {

      if (this.data[i] && this.data[i].length === 1) {

        keysArr.push(this.data[i][0][0]);

      } else if (this.data[i] && this.data[i].length !== 1) {
          
        this.data[i].forEach((el) => keysArr.push(el[0]));
      }
    }
    return keysArr;
  } // O(n)
}

// CREATE NEW INSTANCE OF HASH TABLE
const myHashTable = new HashTable(2);

// INSERT DATA IN HASH TABLE
myHashTable.set("shubham", 500);
console.log(myHashTable.set("jay", 100));

// FIND DATA IN HASH TABLE
console.log(myHashTable.get("jay"));

// KEY
console.log(myHashTable.keys());
