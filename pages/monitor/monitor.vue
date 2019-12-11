<template>
	<view class="monitor">
		<view class="device-observe">
			<view class="qiun-charts"><canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas></view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/leiqch-ucharts/js/u-charts.js';
	var _self;
	export default {
		data() {
			return {
				canvasRing: null,
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				ringData: {
					series: [
						{
							name: '一级报警',
							data: 17
						},
						{
							name: '二级报警',
							data: 29
						},
						{
							name: '三级报警',
							data: 24
						},
						{
							name: '四级报警',
							data: 21
						},
					]
				},
				
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.init();
			// this.getServerData();
		},
		methods:{
			init() {
				this.showRing('canvasRing', this.ringData);
			},
			showRing(canvasId, chartData) {
				this.canvaRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					legend: true,
					// title: {
					// 	name: '70%',
					// 	color: '#7cb5ec',
					// 	fontSize: 25 * _self.pixelRatio,
					// 	offsetY: -20 * _self.pixelRatio
					// },
					// subtitle: {
					// 	name: '收益率',
					// 	color: '#666666',
					// 	fontSize: 15 * _self.pixelRatio,
					// 	offsetY: 30 * _self.pixelRatio
					// },
					extra: {
						pie: {
							offsetAngle: -45,
							ringWidth: 40 * _self.pixelRatio,
							labelWidth: 15
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true
				});
			},
			touchRing(e) {
				this.canvaRing.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data;
					}
				});
			},
		}
	}
</script>

<style>
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #ffffff;
	}
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #ffffff;
	}
</style>
