let x = 50;

function scope() {
  function sumX() {
    return x + 3;
  }
  return sumX;
}

module.exports = scope();
