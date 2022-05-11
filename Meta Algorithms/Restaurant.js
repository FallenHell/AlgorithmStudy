function getMaxAdditionalDinersCount(N, K, M, S) {
    let seat = 1
    let availableSeats = 0
    let delta = 0
  
    S.sort((a, b) => a - b)
    S.push(N + K + 1)
    
       
    S.forEach(diner => {
      delta = diner - K - seat
      availableSeats += delta > 0 ? Math.ceil(delta / (K + 1)) : 0      
      seat = diner + K + 1      
    })
    
    return availableSeats
  }

let N = 10; //15
let K = 1; //2
let M = 2; //3
let S = [2, 6]; //[11, 6, 14];

console.log(getMaxAdditionalDinersCount(N,K,M,S))