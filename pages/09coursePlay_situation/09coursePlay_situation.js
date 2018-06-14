Page({
  data: {
    percentage: 50
  },
  onReady: function (e) {
    // // 使用 wx.createContext 获取绘图上下文 context
    var firstCanvas = wx.createCanvasContext('firstCanvas')
    var secondCanvas = wx.createCanvasContext('secondCanvas')
    firstCanvas.setStrokeStyle('#50c6b8');
    firstCanvas.setLineWidth(1);
    firstCanvas.arc(51, 51, 50, 0, 2 * Math.PI, false);
    firstCanvas.stroke();
    firstCanvas.draw();
    secondCanvas.setStrokeStyle("#08ae9b")
    secondCanvas.setLineWidth(4)
    secondCanvas.arc(51, 51, 44, -0.5 * Math.PI, (0.01 * this.data.percentage - 0.25) * 2 * Math.PI, false)
    secondCanvas.stroke()
    secondCanvas.draw()
  }
})