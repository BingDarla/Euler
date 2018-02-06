const s1 = function(num) {
  let n = +num;
  let result = [];
  let ans = 0;
  if (n <= 0)
    return 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0)
      result.push(i);
    if (i % 5 === 0 && i % 3 != 0)
      result.push(i);
  }
  for (let j = 0; j < result.length; j++) {
    ans += result[j];
  }
  return ans;
}

const s2 = function(num) {
  let result = [];
  let answer = 0;
  let n = +num;
  if (n <= 0)
    return 0;
  console.log(`num:${num} `);
  if (n <= 0)
    return;
  let a = 1;
  let b = 2;
  while (b < n) {
    if (b % 2 === 0) {
      answer += b;
    }
    let c = a;
    a = b;
    b = b + c;
  }
  return answer;
}

const primeList = function(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime)
      primes.push(i);
  }
  return primes;
}

const s3 = function(num) {
  let n = +num;
  if (n <= 0)
    return 0;
  let primeMax = Math.floor(Math.sqrt(n));
  let primes = primeList(primeMax);
  console.log(primes);
  for (let i = primes.length; i >= 0; i--) {
    if (n % primes[i] == 0) {
      return primes[i];
    }
  }
}

//The results will be the max number of Array.
const s4 = function(num) {
  let results = [];
  let n = +num;
  if (n <= 0)
    return 0;
  let startPoint = '';
  let endPoint = '1';
  while (n > 0) {
    startPoint += '9';
    endPoint += '0';
    n--;
  }
  startPoint = +startPoint;
  endPoint = +endPoint / 10;
  console.log(`startPoint endPoint ${startPoint} ${endPoint}`);

  for (let i = startPoint; i > endPoint - 1; i--) {
    for (let j = startPoint; j > endPoint - 1; j--) {
      let isFind = false;
      let m = i * j;

      let mString = m.toString().split('');
      let len = mString.length;
      if (len % 2 == 0) {
        isFind = true;
        // console.log(`m: ${m} i ${i} j ${j} ${mString} len ${len}`);
        for (let k = 0; k < len / 2; k++) {
          if (mString[k] != mString[len -1- k]) {
            isFind = false;
            break;
          }
        }
      }
      if (isFind) {
        results.push(m);
      }
    }
  }
  return Math.max(...results);
}

const s5 = function(){

}
