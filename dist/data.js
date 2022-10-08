Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-use-before-define
exports.dataTotal = dataTotal;

// eslint-disable-next-line import/prefer-default-export
function dataTotal(_data) {
  const result = _data.sort((x, y) => x.health + y.health);

  return result;
}
