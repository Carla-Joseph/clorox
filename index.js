const clxdtc = (n) => {
  for (let i = 1; i <= n; i++) { 
    if (i % 3 === 0) {
      console.log('CLX');
    } else if (i % 5 === 0) {
      console.log('DTC');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('CLXDTC');
    } else {
      console.log(i)
    }
  }
}


const n = 100;
clxdtc(n);