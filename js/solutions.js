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
  let n=+num;
  let primes = primeList(n);
  let multiples=1;
  let results = [];
  console.log(primes);
  for (let i=1;i<=n;i++){
      multiples *=i;
  }
  console.log(multiples);
  for (let j = 2; j<multiples;j++){

    let isFound = true;
    for (let i =2; i<=n;i++){
      if (j%i !=0){
        isFound = false;
        break;
      }
    }
    if (isFound){
      return j;
    }

  }

}


const s6 = function(num){
  let n = +num;
  let sumOfSquares = 0;
  let sum = 0;
  for (let i = 1; i<=num;i++){
    sumOfSquares += i*i;
    sum +=i;
  }
  return (sum*sum - sumOfSquares);
}

const s7 = function(num){
  let n=+num;
  if (n<=0)
  return;

  for (let i = 2; i <= 1000000; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime){
      n--;
      if (n<=0){
        return i;
      }
    }
  }
}
const s8 = function(num){
  let n = +num;
  let max = 1;
  let  VAL =
"7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
 let val = VAL.split('');
 // console.log(val);
  for (let i = 0; i<val.length+1-n; i++){
    let a = 1;
    let j = n;
    while(j>0){
      a *=+val[i+j-1];
      j--;
      console.log(`a i j ${a},${i},${j}`);
    }
    console.log(a);
    if (a>max){
      max = a;
    }
  }
  return max;

}


const s9 = function(num){
  let n=+num;
  for (let c = n-2;c>Math.floor(n/3);c--){
    for (let a = 1;a<Math.floor(n/3);a++){
      if (Math.pow(a,2)+Math.pow((n-a-c),2)===Math.pow(c,2)){
        console.log(`${c},${a},${n-a-c}`);
        return c*a*(n-c-a);
      }
    }
  }
  return 'No Pythagorean triplet exists.'
}



const s10 = function(num){
  let n=+num;
  let result=0;
  let primes = primeList(num);
  console.log(primes);
  for (let i= 0; i<primes.length;i++){
    result+=primes[i];
  }
  return result;
}
