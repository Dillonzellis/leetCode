// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function (s, t) {
  sArr = Array.from(s);
  tArr = Array.from(t);

  sArr.sort();
  tArr.sort();

  if (sArr.length !== tArr.length) {
    return false;
  }

  return sArr.every((e, i) => e === tArr[i]);

  //   console.log(sArr, tArr);
};

console.log(isAnagram('csat', 'atc'));
