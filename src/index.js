module.exports = function check(str, bracketsConfig) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if ((str[i] === '}' & arr[arr.length - 1] === '{') || (str[i] === ']' & arr[arr.length - 1] === '[') || (str[i] === ')' & arr[arr.length - 1] ==='(') || (str[i] === '2' & arr[arr.length - 1] === '1') || (str[i] === '4'& arr[arr.length - 1] === '3') || (str[i] === '6' & arr[arr.length - 1] === '5') || (str[i] === '|' & arr[arr.length - 1] === '|') || (str[i] === '7' & arr[arr.length - 1] === '7') || (str[i] === '8' & arr[arr.length - 1] === '8')) {
      arr.pop();
    } else if ((str[i] === '}' & arr[arr.length - 1] !== '{') || (str[i] === ']' & arr[arr.length - 1] !== '[') || (str[i] === ')' & arr[arr.length - 1] !=='(')) {
      return false;
    } else {
      arr.push(str[i]);
    }
  }

  if (arr.length !== 0) {
    return false;
  }
  return true;
}

