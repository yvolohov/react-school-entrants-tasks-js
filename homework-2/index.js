
function makeTree(tree, width, height, level, baseNumber) {
  level = level || 0;
  baseNumber = baseNumber || '';

  if (level >= height) {
    return;
  }

  var nextLevel = ++level;

  for (var idx = 0; idx < width; idx++) {
    var currentNumber = baseNumber + ((baseNumber) ? '.' : '') + (idx + 1);
    var node = {
      number: currentNumber,
      children: []
    };
    tree.push(node);
    makeTree(node.children, width, height, nextLevel, currentNumber);
  }
}

var tree = [];
makeTree(tree, 2, 4);
console.log(JSON.stringify(tree));
