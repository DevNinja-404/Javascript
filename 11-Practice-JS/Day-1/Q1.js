// LeetCode Question : 2619

const arr = [null, {}, 3];
Object.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
console.log(arr.last());
