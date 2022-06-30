// index.js
Page({
  data: {
    title: "冷大宇不会飞",
    list: ["绿皮书", "闻香识女人", "乱世佳人", "图灵游戏"],
    counter: 0,
  },
  increment: function () {
    this.setData({ counter: this.data.counter + 1 });
  },
  decrement: function () {
    this.setData({ counter: this.data.counter - 1 });
  },
});
