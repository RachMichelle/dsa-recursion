/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  if (i === words.length) return longestWord;
  if(words[i].length > longestWord){
    longestWord = words[i].length;
  }
  return longest(words, i+1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=1, word=str[0]) {
  if (i === str.length) return word;
  if(i %2 === 0){
    word = word.concat(str[i])
  }
  return everyOther(str, i+1, word)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length < 2) return true;
  if(str[0] !== str[str.length-1]) return false;
  return isPalindrome(str.slice(1,-1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr,val,i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0 ) return "";
  return str[str.length-1] + revString(str.slice(0, -1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, vals=[]) {
  for(let val in obj){
    if(typeof(obj[val]) === 'object' ){
      gatherStrings(obj[val], vals);
    } else {
      if(typeof(obj[val]) === 'string')
      vals.push(obj[val]);
    }
  }
  return vals;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return binarySearch(arr, val, i+1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
