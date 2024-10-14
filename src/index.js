module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPair = {};
  bracketsConfig.forEach((bracketC) => {
    openBrackets.push(bracketC[0]);
    bracketsPair[bracketC[1]] = bracketC[0];
  });

  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      if (
        bracketsPair[currentSymbol] === currentSymbol &&
        stack.length > 0 &&
        stack[stack.length - 1] === currentSymbol
      ) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      const topElement = stack[stack.length - 1];

      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
