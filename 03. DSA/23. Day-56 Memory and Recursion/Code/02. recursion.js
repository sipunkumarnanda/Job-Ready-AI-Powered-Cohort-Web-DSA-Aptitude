//  n times hello world print


let n = 10;

function hello(n) {
  if (n == 0) return

  console.log("Hello world", n);

  hello(n - 1);
}

hello(n);