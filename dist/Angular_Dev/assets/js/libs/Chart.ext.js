Chart.types.Bar.extend({
    initialize: function (data) {
        var self = this;
        var originalBuildScale = self.buildScale;
        self.buildScale = function () {
            originalBuildScale.apply(this, arguments);

            var ctx = self.chart.ctx;
            var scale = self.scale;
            var originalScaleDraw = self.scale.draw;
            var barAreaWidth = scale.calculateX(1) - scale.calculateX(0);
            var barAreaHeight = scale.endPoint - scale.startPoint;

            self.scale.draw = function () {
                originalScaleDraw.call(this, arguments);
                ctx.fillStyle = data.barBackground;
                self.datasets.forEach(function (dataset) {
                    dataset.bars.forEach(function (bar) {
                        ctx.fillRect(
                            bar.x - bar.width / 2,
                            scale.startPoint,
                            bar.width,
                            barAreaHeight);
                    })
                })
                ctx.fill();
            }
        }

        Chart.types.Bar.prototype.initialize.apply(this, arguments);
    }
});
