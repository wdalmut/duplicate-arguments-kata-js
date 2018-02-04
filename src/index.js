
module.exports = (list) => {
  let keys = list.reduce((memo, item) => {
    memo[item] = true;
    return memo;
  }, {});

  return Object.keys(keys).length !== list.length;
};
