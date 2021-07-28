const transpose = function(matrix) {
    let output = [];
    for (let row in matrix[0]) {
      let array = [];
      for (let column in matrix) {
        array.push(matrix[column][row]);
      }
      output.push(array);
    }
    return output;
  };
  
  const wordSearch = (letters, word) => {
    let wordFound = false;
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        wordFound = true;
      }
    }
    const transposeSearch = transpose(letters);
    const verticalJoin = transposeSearch.map(lts => lts.join(''));
    for (let lts of verticalJoin) {
      if (lts.includes(word)) {
        wordFound = true;
      }
    }
    return wordFound;
  };
  
  module.exports = wordSearch;