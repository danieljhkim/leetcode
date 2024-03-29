var processQueries = function(queries, m) {
	let marr = [];
	let ans = [];
	for(let i=1; i<m+1; i++) {
		marr.push(i);
	}
	for(let i of queries) {
		let index = marr.indexOf(i);
		ans.push(index);
		marr.splice(index, 1);
		marr = [i, ...marr];
	}
	return ans;
};

var pivotArray = function(nums, pivot) {
	let pivots = [];
	let left = []
	let right = []
	nums.forEach(num => {
		if(num == pivot) {
			pivots.push(pivot);
		} else if(num > pivot) {
			right.push(num);
		} else {
			left.push(num);
		}
	})
	return [...left, ...pivots, ...right];
};

var minOperations = function(n) {
	let ar = [];
	let sum = 0;
	for(let i=0; i<n; i++) {
		ar.push(2 * i + 1);
		sum += ar[i];
	}
	let each = sum/n;
	let l = 0;
	let r = n-1;
	let ans = 0;
	while(l < r) {
		ans++;
		ar[l]++;
		ar[r]--; 
		if(ar[l] == each) {
			l++;
		}
		if(ar[r] == each) {
			r--;
		}
	}
	return ans;
};

var countPrefixes = function(words, s) {
    let ans = 0;
		words.forEach(item => {
			if(s.slice(0,item.length)===item) {
				ans++;
			}
		})
		return ans;
};

//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
var replaceElements = function(arr) {
    for(let i=0; i<arr.length; i++) {
			if(i === arr.length-1) {
				arr[i] = -1;
				break;
			}
			let max = 0;
			for(let j=i+1; j<arr.length; j++) {
				if(arr[j] > max) max = arr[j];
			}
			arr[i] = max;
		}
		return arr;
};

//https://leetcode.com/problems/count-operations-to-obtain-zero/
var countOperations = function(num1, num2) {
	let found = false;
	let ans = 0;
	if(num2 === 0 || num1 === 0) {
		return ans;
	}
	while(!found) {
		if(num1 >= num2) {
			num1 -= num2;
			ans++;
		} else {
			num2 -= num1;
			ans++;
		}
		if(num2 === 0 || num1 === 0) {
			found = true;
		}
	}
	return ans;
};

//https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
var canBeEqual = function(target, arr) {
	target.sort((a,b) => a-b);
	arr.sort((a,b) => a-b);
	for(let i=0; i<arr.length; i++) {
		if(arr[i] !== target[i]) return false;
	}
	return true;
};

//https://leetcode.com/problems/percentage-of-letter-in-string/
var percentageLetter = function(s, letter) {
	let count = 0;
	for(let i=0; i< s.length; i++) {
		if(s.charAt(i) === letter) count++;
	}
	if(count === 0) return 0;
	let ans = Math.floor(count/s.length*100);
	return ans;
};

//https://leetcode.com/problems/kth-distinct-string-in-an-array/
var kthDistinct = function(arr, k) {
	for(let i=0; i<arr.length; i++) {
		let last = arr.lastIndexOf(arr[i]);
		let first = arr.indexOf(arr[i]);
		if(last === first) {
			k--;
			if(k === 0) return arr[i];
		}
	}
	return "";
};

var targetIndices = function(nums, target) {
  nums.sort((a,b) => a-b);
	const ans = [];
	nums.forEach((item, index) => {
		if(item === target) ans.push(index);
	})
	return ans;
};

var reversePrefix = function(word, ch) {
	let rev = [];
	let isFirst = false;
	for(let i=0; i< word.length; i++) {
		rev.push(word.charAt(i));
		if(!isFirst && word.charAt(i) == ch) {
			isFirst = true;
			rev = rev.reverse();
		}
	}
	return rev.join("");
};


var findGCD = function(nums) {
	nums.sort((a,b) => a-b);
	const small = nums[0];
	const large = nums[nums.length-1];
	for(let i=small; i>0; i--) {
		let lr = large%i;
		let sr = small%i;
		if(lr === 0 && sr === 0) return i;
	}
};

var checkString = function(s) {
  let hasB = false;
	for(let i=0; i<s.length; i++) {
		if(s.charAt(i) == "b") hasB = true;
		if(hasB && s.charAt(i)=="a") return false;
	}
	return true;
};

//https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
var digitCount = function(num) {
	for(let i=0; i<num.length; i++) {
		let count = 0;
		for(let j=0; j<num.length; j++) {
			if(Number(num.charAt(j)) == i) count++;
			if(count > Number(num.charAt(i))) return false;
		}
		if(count != Number(num.charAt(i))) return false;
	}
	return true;
};

//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
var removeDuplicates = function(s) {
	let stack = [];
	for(let i=0; i<s.length; i++) {
		if(stack[stack.length-1] === s[i]){
			stack.pop();
		} else {
			stack.push(s[i]);
		}
	}
	return stack.join("");
};

//https://leetcode.com/problems/next-greater-element-i/
var nextGreaterElement = function(nums1, nums2) {
	const ans = [];
  nums1.forEach((num) => {
		let j = nums2.indexOf(num);
		let found = false;
		for(let i=j+1; i<nums2.length; i++) {
			if(nums2[i] > num) {
				found = true
				ans.push(nums2[i]);
				break;
			}
		}
		!found ? ans.push(-1) : false;
	})
	return ans;
};

//https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
var greatestLetter = function(s) {
	const arr = s.split("");
	arr.sort();
  arr.reverse();
	for(let i=0; i<arr.length; i++) {
		let index = arr.lastIndexOf(arr[i].toUpperCase());
    if(arr[i] === arr[i].toUpperCase()) return "";
		if(index >= 0) return arr[i].toUpperCase();
	}
	return "";
};

//https://leetcode.com/problems/fibonacci-number/
var fib = function(n) {
	if(n === 0 || n === 1) return n;
  let a = 0;
	let b = 1;
	for(let i=2; i<n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return a + b;
};

//https://leetcode.com/problems/count-common-words-with-one-occurrence/
var countWords = function(words1, words2) {
  let count = 0;
	const isUnique = (arr, word) => {
		if(arr.lastIndexOf(word) === arr.indexOf(word)) return true;
		return false;
	}
	for(let i=0; i<words1.length; i++) {
		let word = words1[i]
		if(words2.includes(word)) {
			if(isUnique(words1, word) && isUnique(words2, word)){
				count++;
			}
		}
	}
	return count;
};

//https://leetcode.com/problems/intersection-of-multiple-arrays/
var intersection = function(nums) {
	//this solution accounts for duplicates
  nums = nums.map(arr => {
		return arr.filter(num => {
			return arr.lastIndexOf(num) === arr.indexOf(num);
		})
	});
	let ans = [];
	LOOP1: for(let j=0; j<nums[0].length; j++) {
		for(let i=1; i<nums.length; i++) {
			if(!nums[i].includes(nums[0][j])) {
				continue LOOP1;
			}
		}
		ans.push(nums[0][j])
	}
	return ans.sort((a,b) => a-b);
};

//https://leetcode.com/problems/two-furthest-houses-with-different-colors/
var maxDistance = function(colors) {
	let max = 0;
  for(let i=0; i<colors.length; i++) {
		for(let j=i+1; j<colors.length; j++) {
			if(colors[i] != colors[j]) {
				let dif = j-i;
				if(dif > max) max = dif;
			}
		}
	}
	return max;
};

	// y 0 1 1 0 
	// y 1 1 1 1 
	// y 1 1 0 0
	//   x x x x
//https://leetcode.com/problems/island-perimeter/
var islandPerimeter = function(grid) {
	const max_x = grid[0].length-1;
	const max_y = grid.length-1;
	let count = 0;
	const calc = (x,y) => {
		if(x < max_x && grid[y][x+1] === 0) count++;
		if(x > 0 && grid[y][x-1] === 0) count++;
		if(y > 0 && grid[y-1][x] === 0) count++;
		if(y < max_y && grid[y+1][x] === 0) count++;
		if(y === max_y) count++;
		if(y === 0) count++;
		if(x === max_x) count++;
		if(x === 0) count++;
	}
	for(let y=0; y<grid.length; y++){
		for(let x=0; x<grid[y].length; x++) {
			if(grid[y][x] == 1) calc(x,y);
		}
	}
	return count;
};

//https://leetcode.com/problems/relative-sort-array/
var relativeSortArray = function(arr1, arr2) {
  let ans = [];
	for(let num2 of arr2) {
		for(let i=0; i<arr1.length; i++) {
			if(arr1[i] === num2) {
				ans.push(num2);
				arr1[i] = -1;
			}
		}
	}
	arr1.sort((a,b) => a-b);
	ans = [...ans, ...arr1.slice(arr1.lastIndexOf(-1)+1)]
	return ans;
};

//https://leetcode.com/problems/find-the-difference-of-two-arrays/
var findDifference = function(nums1, nums2) {
  const ans = [[],[]];
	for(let num1 of nums1) {
		if(!nums2.includes(num1)) {
			if(!ans[0].includes(num1)) {
				ans[0].push(num1);
			}
		}
	}
	for(let num2 of nums2) {
		if(!nums1.includes(num2)) {
			if(!ans[1].includes(num2)) {
				ans[1].push(num2);
			}
		}
	}
	return ans;
};

var findDifference2 = function(nums1, nums2) {
	const nums11 = [...new Set(nums1.filter(n => !nums2.includes(n)))];
	const nums22 = [...new Set(nums2.filter(n => !nums1.includes(n)))];
  return [nums11, nums22];
};

//https://leetcode.com/problems/remove-palindromic-subsequences/submissions/
var removePalindromeSub = function(s) {
  if(s.split("").reverse().join("") === s) return 1;
	return 2;
};

//https://leetcode.com/problems/rings-and-rods/
var countPoints = function(rings) {
	const arr3 = [];
	const obj = {};
	for(let i=1; i<rings.length; i+=2) {
		let key = rings.charAt(i);
		if(!arr3.includes(key)) {
			if(key in obj) {
				obj[key].push(rings.charAt(i-1));
				if(obj[key].includes("R") && obj[key].includes("B") && obj[key].includes("G")) {
					arr3.push(key);
				}
			} else {
				obj[key] = [rings.charAt(i-1)];
			}
		}
	}
	return arr3.length;
};

//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
var firstPalindrome = function(words) {
  for(let word of words) {
		let rev = word.split("").reverse().join("");
		if(rev === word) return rev;
	}
	return "";
};

//https://leetcode.com/problems/count-asterisks/
var countAsterisks = function(s) {
	let between = false;
	let count = 0;
	for(let i=0; i<s.length; i++) {
		if(s.charAt(i) === "|") {
			between = !between;
			continue;
		}
		if(!between && s.charAt(i) === "*") count++;
	}
	return count;
};

//https://leetcode.com/problems/sqrtx/
var mySqrt = function(x) {
	let hi = x;
	let lo = 0;
	let mid = 0;
	while(lo <= hi) {
		mid = Math.floor((hi-lo)/2) + lo;
		let target = mid * mid;
		if(target < x) {
			lo = mid + 1;
		} else if(target > x) {
			hi = mid - 1;
		} else {
			return mid;
		}
	}
	return hi;
};

//https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function(nums) {
  for(let i=1; i<nums.length; i++) {
		nums[i] += nums[i-1];
	}
	return nums;
};

//https://leetcode.com/problems/find-pivot-index/solution/
var pivotIndex = function(nums) {
	const findSum = (left1) => {
		let sum = 0;
		for(let i=nums.length-1; i>left1; i--) {
			sum += nums[i];
		}
		return sum;
	}
	if(findSum(0) === 0) return 0;
	let left = 1;
	let leftSum = nums[0];
	while(left < nums.length) {
		if(leftSum === findSum(left)) {
			return left;
		} else {
			left++;
			leftSum += nums[left-1];
		}
	}
	return -1;
};


//https://leetcode.com/problems/watering-plants/
var wateringPlants = function(plants, capacity) {
	let steps = 0;
	let water = capacity
	for(let i=0; i<plants.length;) {
		if(plants[i] === 0) {
			i++;
			steps++;
			continue;
		}
		if(plants[i] > water) {
			water = capacity;
			steps += i;
			i = 0;
		} else {
			water -= plants[i];
			plants[i] = 0;
			i++;
			steps++;
		}
	}
	return steps;
};

//https://leetcode.com/problems/shortest-distance-to-a-character/
var shortestToChar = function(s, c) {
	const findDist = (index) => {
		let r_dist = Number.MAX_VALUE;
		let l_dist = Number.MAX_VALUE;
		for(i=index; i<s.length; i++) {
			if(s.charAt(i) === c) {
				r_dist = i - index;
				if(r_dist === 0) return 0;
				break;
			}
		}
		for(i=index; i>=0; i--) {
			if(s.charAt(i) === c) {
				l_dist = index - i;
				if(l_dist === 0) return 0;
				break;
			}
		}
		return Math.min(r_dist, l_dist);
	}
	const ans = [];
  for(let i=0; i<s.length; i++) {
		ans.push(findDist(i));
	}
	return ans;
};


//https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
var minPairSum = function(nums) {
  nums.sort((a,b) => a-b);
  let max = 0;
  for(let s=0, b=nums.length-1; s<nums.length/2; s++, b--) {
    if(max <= nums[s] + nums[b]) max = nums[s] + nums[b];
  }
  return max;
};

//https://leetcode.com/problems/arithmetic-subarrays/
var checkArithmeticSubarrays = function(nums, l, r) {
  const ans = [];
  const calDif = (arr) => {
    let dif = arr[0] - arr[1];
    for(let i=1; i<arr.length-1; i++) {
      if(dif !== arr[i] - arr[i+1]) return false;
    }
    return true;
  }
  for(let i=0; i<l.length; i++) {
    let ar = nums.slice(l[i], r[i]+1);
    ar.sort((a,b) => a-b);
    ans.push(calDif(ar));
  }
	return ans;
};

//https://leetcode.com/problems/minimum-absolute-difference/
var minimumAbsDifference = function(arr) {
  arr.sort((a,b) => a-b);
	let min = Number.MAX_VALUE;
	for(let i=0; i<arr.length-1; i++) {
		let dif = arr[i+1] - arr[i];
		if(min >= dif) min = dif;
	}
	const ans = [];
	for(let i=0; i<arr.length-1; i++) {
		let dif = arr[i+1] - arr[i];
		if(min === dif) {
			ans.push([arr[i], arr[i+1]]);
		}
	}
	return ans;
};

//https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
var countGoodSubstrings = function(s) {
	const isUnique = (word) => {
		return word.charAt(0) !== word.charAt(1) && word.charAt(0) !== word.charAt(2) && word.chartAt(1) !== word.charAt(2);
	}
	let ans = 0;
	for(let i=0; i<s.length-2; i++) {
		if(isUnique(s.slice(i, i+3))) ans++;
	}
	return ans;
};

//https://leetcode.com/problems/sort-array-by-increasing-frequency/
var frequencySort = function(nums) {
	nums.sort((a,b) => b-a);
	const ans = [];
	const dist = new Set(nums);
	for(let n of dist) {
		ans.push(nums.filter(num => num === n));
	}
	ans.sort((a,b) => a.length - b.length);
	const a = [];
	for(let aa of ans) {
		a.push(...aa);
	}
	return a;
};

//https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
var countStudents = function(students, sandwiches) {
	const checkBack = (index) => {
		for(let i=index+1; i<students.length; i++) {
			if(students[index] !== students[i]) return false;
		}
		return true;
	}
	let i = 0;
	while(students.length > 0) {
		if(students[i] === sandwiches[i]) {
			students.shift();
			sandwiches.shift();
		} else {
			const st = students.shift();
			students.push(st);
			if(st === students[0] && checkBack(i)) {
				return students.length;
			}
		}
		if(students.length === 0) return 0;
	}
}

//https://leetcode.com/problems/a-number-after-a-double-reversal/
var isSameAfterReversals = function(num) {
  const reverse = (n) => {
		let ans = 0;
		while(n > 0) {
			const r = n % 10;
			ans *= 10
			ans += r 
			n = Math.floor(n /= 10);
		}
		return ans;
	}
	const revnum1 = reverse(num);
	const revnum2 = reverse(revnum1);
	return num === revnum2;
};

//https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
var countCharacters = function(words, chars) {
  const checkword = (word) => {
		const charArr = chars.split('');
		for(let i=0; i<word.length; i++) {
			const chindex = charArr.indexOf(word.charAt(i));
			if(chindex > -1) {
				charArr[chindex] = null;
			} else {
				return false;
			}
		}
		return true;
	}
	let ans = 0;
	for(let w of words) {
		if(checkword(w)) {
			ans += w.length;
		}
	}
	return ans;
};

//https://leetcode.com/problems/find-the-middle-index-in-array/
var findMiddleIndex = function(nums) {
	const findSumRight = (index) => {
		let sum = 0;
		for(let i=index+1; i<nums.length; i++) {
			sum += nums[i];
		}
		return sum;
	}
	const findSumLeft = (index) => {
		let sum = 0;
		for(let i=index-1; i>=0; i--) {
			sum += nums[i];
		}
		return sum;
	}
	for(let i=0; i<nums.length; i++) {
		if(findSumRight(i) === findSumLeft(i)) {
			return i;
		}
	}
	return -1;
};

//https://leetcode.com/problems/count-integers-with-even-digit-sum/
var countEven = function(num) {
  const isEven = (n) => {
		let sum = 0;
		while(n > 0) {
			const digit = n % 10;
			sum += digit;
			n = Math.floor(n/10);
		}
		if(sum%2 === 0) return true;
		return false;
	}
	let ans = 0;
	for(let i=2; i<=num; i++){
		if(isEven(i)) ans++;
	}
	return ans;
}

//https://leetcode.com/problems/smallest-even-multiple/description/
var smallestEvenMultiple = function(n) {
	const _isEven = (num) => {
		return num % 2 === 0;
	}
	if(_isEven(n)) return n;
	return n * 2;
};

//https://leetcode.com/problems/add-two-integers/
var sum = function(num1, num2) {
  return num1 + num2;
};

//https://leetcode.com/problems/delete-greatest-value-in-each-row/
var deleteGreatestValue = function(grid) {
	let ans = 0;
  for(let i = 0; i < grid.length; i++) {
		grid[i].sort((a, b) => a-b);
	}
	for(let i = 0; i < grid[0].length; i++) {
		let max = 0;
		for(let j = 0; j < grid.length; j++) {
			if(grid[j][i] > max) max = grid[j][i];
		}
		ans += max;
	}
	return ans;
};

//https://leetcode.com/problems/convert-the-temperature/
var convertTemperature = function(celsius) {
	const kelvin = celsius + 273.15;
	const fah = celsius * 1.8 + 32;
	return [kelvin, fah];
};

//https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
var differenceOfSum = function(nums) {
	let digitSum = 0;
	let elemSum = 0;
	const _findDigitSum = (n) => {
		let sum = 0;
		while(n > 0) {
			let digit = n % 10;
			sum += digit
			n = Math.floor(n / 10);
		}
		return sum;
	}
	nums.forEach(n => {
		elemSum += n;
		digitSum += _findDigitSum(n);
	});
	return Math.abs(digitSum - elemSum);
};

//https://leetcode.com/problems/first-bad-version/
var solution = function(isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	const _bSearch = (n) => {
		let low = 0;
		let high = n;
		let mid = 0;
		while(low <= high) {
			mid = Math.ceil(low + (high-low)/2);
			if(isBadVersion(mid) && !isBadVersion(mid-1)) return mid;
			if(!isBadVersion(mid)) {
				low = mid;
			} else {
				high = mid;
			}
		}
		return mid;
	}
	return function(n) {
		return _bSearch(n)
	};
};

//https://leetcode.com/problems/repeated-substring-pattern/
var repeatedSubstringPattern = function(s) {
	const halfLen = Math.floor(s.length/2);
	for(let i=2; i<=halfLen; i++) {
		let subStr = s.substring(0,i);
    console.log("sub1: "+ subStr)
		if(s.length % i !== 0) continue;
		for(let j=i; j<s.length; j+i) {
			let subStr2 = s.substring(j,j+i);
      console.log("sub2: "+ subStr2)
			if(subStr !== subStr2) break;
			if(j+1 === s.length) return true;
		}
	}
	return false;
};

var distinctDifferenceArray = function(nums) {
	const _distinct = (numAr) => {
		const numSet = [...new Set(numAr)];
		return numSet.length;
	}

	const ans = [];
	for(let i=0; i<nums.length; i++) {
		ans[i] =_distinct(nums.slice(0,i+1)) - _distinct(nums.slice(i+1));
	}
	return ans;
};

var merge = function(nums1, m, nums2, n) {
	let j = 0;
	for (let i = nums1.length - 1; i >= m; i--) {
		nums1[i] = nums2[j++];
	}
	nums1.sort((a, b) => a - b);
};

var canConstruct = function(ransomNote, magazine) {
	magazine = magazine.split('');
	for (let n of ransomNote) {
		let index = magazine.findIndex((m) => m === n);
		if (index !== -1) {
			magazine.splice(index, 1);
		} else {
			return false;
		}
	}
	return true;
};