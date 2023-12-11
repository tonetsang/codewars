const names = `0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz
10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan`;

let hsh = () => {
  let arr = names.split("\n").map(x => x.trim().split(" = "))
  let ans = {};
  for(let x of arr) ans[x[0]] = x[1];
  return ans;
  }

const getTurkishNumber = (num) => {
  x = hsh();
  if( 10 >= num) return x[num];
  if( 0 == num%10) return x[num];
  return `${x[num  - num%10]} ${x[num%10]}`;
	
}