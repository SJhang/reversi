Array.prototype.uniq = function () {
  let results = [];

  for (let i = 0; i < this.length; i++) {
    if (!results.includes(this[i])) {
      results.push(this[i]);
    }
  }
  return results;
}

// console.log([1,2,3,2,1].uniq());

Array.prototype.twoSum = function () {
  let results = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      if (this[i] + this[j] === 0) {
        results.push([i, j]);
        // results += [i, j];
      }
    }
  }
  return results;
}

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function() {
  let results = [];

  for (let i = 0; i < this.length; i++){
    results.push([]);
  }

  for (let i = 0; i < this.length; i++){
    for (let j = 0; j < this.length; j++){
      results[j].push(this[i][j]);
    }
  }
  return results;
}
//
// console.log([[0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ].transpose());


Array.prototype.myEach = function(cp) {
  for (let i=0; i <this.length; i++){
    cp(this[i]);
  }
}
//
// a = [1,2,3]
// a.myEach(el => console.log(el));

Array.prototype.myMap = function (cb) {
  let results = [];

  this.myEach(el => {
      results.push(cb(el))
  });
  return results
}

// a = [1,2,3]
// console.log(a.myMap(el => el + 2));

Array.prototype.myInject = function(cb, acc){
  let results = acc;
  this.myEach(el => {
    results = cb(results, el);
  });
  return results
}
//
// a = [1,2,3];
// console.log(a.myInject((acc, el) => acc+el , 5));


Array.prototype.myBubbleSort = function() {
  let results = [];

  while (this.length > 0){
    for (let i = 0; i < this.length; i++) {
      let j = i + 1;

      if (this[i] > this[j]) {
        let front = this[j];
        let back = this[i];
        this[j] = back;
        this[i] = front;
      }
    }
    results.unshift(this.pop());
  }
  return results;
}

// a = [1,4,3,7,4,5,9,14,3]
// console.log(a.myBubbleSort());

function mySubStrings (str) {
  let results = [];

  for (let i = 0; i <= str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
      results.push(str.slice(i, j))
    }
  }
  return results;
}

// console.log(mySubStrings("cats"));

function exponention(base, expo){
  if (expo === 0) {
    return 1;
  }
  return base * exponention(base, expo - 1);
}
// console.log(exponention(2, 3));

function fibonacci(num, start = [1, 1]) {
  let results = start;

  while (results.length < num) {
    let sum = results.slice(-2).myInject((acc, el) => acc + el, 0);
    results.push(sum);
    fibonacci(num, results);
  }
  return results;
}

// console.log(fibonacci(5));

function binarySearch(arg_arr, target) {
  let arr = arg_arr
  let mid = Math.floor(arr.length / 2);

  let right = arr.slice(mid);
  let left = arr.slice(0, mid);

  switch (Math.sign(target-arr[mid])) {
    case 0:
      return mid;
      break;
    case -1:
      return binarySearch(left, target);
      break;
    case 1:
      return binarySearch(right, target) + mid;
      break;
    default:
      return null;
  }
}


// console.log(binarySearch([1, 2, 3], 1));
// console.log(binarySearch([2, 3, 4, 5], 3));
// console.log(binarySearch([2, 4, 6, 8, 10], 6));
// console.log(binarySearch([1, 3, 4, 5, 9], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0));

function makeChange(target, coins = [25, 10, 5, 1]) {
  let results = [];
  for (let i = 0; i < coins.length; i++) {
    while (target >= coins[i]) {
      if (target >= coins[i]) {
        results.push(coins[i]);
        target = target - coins[i];
      }
    }
    makeChange(target, coins[i]);
  }
  return results;
}

// console.log(makeChange(75));
// console.log(makeChange(73));
// console.log(makeChange(12));


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)


  // console.log(`left ${left}`);
  // console.log(`mid ${mid}`);
  // console.log(`right ${right}`);
  return merge(mergeSort(left), mergeSort(right))
  // return merge([1,2,3], [6,3,2])
}

function merge(left, right) {
  let results = [];

  while (left.length > 0 && right.length > 0) {
    // console.log(left.length);
    // console.log(right.length);
    // debugger
    switch (Math.sign(left[0]-right[0])) {
      case 0:
        results.push(left.shift())
        results.push(right.shift())
        break;
      case -1:
        results.push(left.shift());
        break;
      case 1:
        results.push(right.shift());
        break;
      case NaN:
        break;
    }
  }
  return results.concat(left).concat(right);
}
// console.log(merge([3,5,2,1,3], [8,5,311]));
console.log(mergeSort([3,2,1,6,5,3,2,2]));

function mySubSets (arr) {
  let results = [[]];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
      results.push(arr.slice(i, j))
    }
  }
  return results;
}
// console.log(mySubSets([1, 2, 3]));
