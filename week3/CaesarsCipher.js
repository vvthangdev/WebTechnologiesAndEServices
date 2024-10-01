function rot13(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
      if((str.charAt(i) >= "A" && str.charAt(i) < "N")) {
          res += String.fromCharCode(str.charCodeAt(i) + 13);
        }
      else if ((str.charAt(i) >= "N" && str.charAt(i) <= "Z")) {
          res += String.fromCharCode(str.charCodeAt(i) - 13);
        }
      else res += str.charAt(i);
    }
    return res;
  }
  rot13("SERR PBQR PNZC");