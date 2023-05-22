// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

const { log } = require('console');

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  let totalArr = [...strs];

  totalArr.forEach((arr) => {
    console.log(arr);
  });

//   console.log(totalArr);
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
