/**
 * lei-cycle
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */


function Cycle (list) {
  // create cycle instance
}

Cycle.prototype.set = function (list) {
  if (!Array.isArray(list)) {
    list = Array.prototype.slice.call(arguments);
  }
  this.list = list;
  this.index = 0;
};

Cycle.prototype.get = function () {
  var item = this.list[this.index++];
  if (this.index >= this.list.length) {
    this.index = 0;
  }
  return item;
};


module.exports = function (list) {
  var cycle = new Cycle();
  cycle.set.apply(cycle, arguments);
  return function () {
    return cycle.get();
  };
};
