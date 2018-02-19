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
          if (mString[k] != mString[len - 1 - k]) {
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

const s5 = function(num) {
  let n = +num;
  let primes = primeList(n);
  let multiples = 1;
  let results = [];
  console.log(primes);
  for (let i = 1; i <= n; i++) {
    multiples *= i;
  }
  console.log(multiples);
  for (let j = 2; j < multiples; j++) {

    let isFound = true;
    for (let i = 2; i <= n; i++) {
      if (j % i != 0) {
        isFound = false;
        break;
      }
    }
    if (isFound) {
      return j;
    }

  }

}


const s6 = function(num) {
  let n = +num;
  let sumOfSquares = 0;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sumOfSquares += i * i;
    sum += i;
  }
  return (sum * sum - sumOfSquares);
}

const s7 = function(num) {
  let n = +num;
  if (n <= 0)
    return;

  for (let i = 2; i <= 1000000; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      n--;
      if (n <= 0) {
        return i;
      }
    }
  }
}
const s8 = function(num) {
  let n = +num;
  let max = 1;
  let VAL =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  let val = VAL.split('');
  // console.log(val);
  for (let i = 0; i < val.length + 1 - n; i++) {
    let a = 1;
    let j = n;
    while (j > 0) {
      a *= +val[i + j - 1];
      j--;
      console.log(`a i j ${a},${i},${j}`);
    }
    console.log(a);
    if (a > max) {
      max = a;
    }
  }
  return max;

}


const s9 = function(num) {
  let n = +num;
  for (let c = n - 2; c > Math.floor(n / 3); c--) {
    for (let a = 1; a < Math.floor(n / 3); a++) {
      if (Math.pow(a, 2) + Math.pow((n - a - c), 2) === Math.pow(c, 2)) {
        console.log(`${c},${a},${n-a-c}`);
        return c * a * (n - c - a);
      }
    }
  }
  return 'No Pythagorean triplet exists.'
}



const s10 = function(num) {
  let n = +num;
  let result = 0;
  let primes = primeList(num);
  console.log(primes);
  for (let i = 0; i < primes.length; i++) {
    result += primes[i];
  }
  return result;
}

const s11 = function() {
  const string = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";
  let a = string.split(' ');
  let max = 0;

  //go through the rows;
  for (let i = 0; i < 380; i = i + 20) {
    for (j = i; j <= (i + 16); j++) {
      max = max > (a[j] * a[j + 1] * a[j + 2] * a[j + 3]) ? max : (a[j] * a[j + 1] * a[j + 2] * a[j + 3]);
    }
  }
  console.log(`${max}go through rows`);

  //go through colomn
  for (let i = 0; i < 20; i++) {
    for (j = i; j < 340 + i; j = j + 20) {
      max = max > (a[j] * a[j + 20] * a[j + 20 * 2] * a[j + 20 * 3]) ? max : (a[j] * a[j + 20] * a[j + 20 * 2] * a[j + 20 * 3]);
    }
  }
  console.log(`${max} go through column`);

  //go through the diagonal  part 1 -top row lean to right
  for (let i = 0; i < 20; i++) {
    for (j = i; j <= (399 - i * 20 - 21 * 3); j = j + 21) {
      max = max > (a[j] * a[j + 21] * a[j + 21 * 2] * a[j + 21 * 3]) ? max : (a[j] * a[j + 21] * a[j + 21 * 2] * a[j + 21 * 3]);
    }
  }
  console.log(`${max} go through diagonal 1`);

  //go through the diagonal part 2-left colomn lean to right
  for (let i = 0; i < 380; i = i + 20) {
    for (let j = i; j <= (399 - i / 20 - 21 * 3); j = j + 21) {
      max = max > (a[j] * a[j + 21] * a[j + 21 * 2] * a[j + 21 * 3]) ? max : (a[j] * a[j + 21] * a[j + 21 * 2] * a[j + 21 * 3]);
    }
  }
  console.log(`${max} go through diagonal 2`);

  //go through the diagonal part 3 --top row lean to left
  for (let i = 0; i < 20; i++) {
    for (let j = i; j <= 20 * i - 19 * 3; j = j + 19) {
      max = max > (a[j] * a[j + 19] * a[j + 19 * 2] * a[j + 19 * 3]) ? max : (a[j] * a[j + 19] * a[j + 19 * 2] * a[j + 19 * 3]);
    }
  }
  console.log(`${max} go through diagonal 3`);

  // go through the diagonal part 4-- right colomn lean to left
  for (let i = 19; i < 399; i = i + 20) {
    for (let j = i; j <= 380+i/20-21*3 ; j = j + 19) {
      max = max > (a[j] * a[j + 19] * a[j + 19 * 2] * a[j + 19 * 3]) ? max : (a[j] * a[j + 19] * a[j + 19 * 2] * a[j + 19 * 3]);
    }
  }
  console.log(`${max} go through diagonal 4`);

  return max;

}
