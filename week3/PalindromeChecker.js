function palindrome(str) {
    let text= "";
    for(let i =0; i < str.length; i++) {
      let tmp = str.charAt(i);
      if((tmp >= 'a' && tmp <= 'z') ||
        (tmp >= 'A' && tmp <= "Z") ||
        (tmp >= '0' && tmp <= '9')) {
          text += tmp;
        }
        text = text.toUpperCase();
    }
    for(let i = 0; i < text.length/2; i++) {
        if(text[i] != text[text.length - i -1]) return false
     }
    return true;
  }
  palindrome("eye");