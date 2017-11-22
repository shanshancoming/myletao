$(function(){
    //柱形图
    var myChart = echarts.init(document. getElementById('pic_left'));
    
    // 指定图表的配置项和数据
    // 玩 echarts 出来不同的效果, 就是通过配置不同的 option
    
    // 绘制柱状图
    // 需要: 标题, x轴, y轴, 数据
    
    var option = {
      // 标题
      title: {
        text: "2017年注册人数"
      },
      // 提示框组件
      tooltip: {},
      // 表示图例
      legend: {
        data:['人数']
      },
      // x轴
      xAxis: {
        // x 轴刻度
        data: [ "1月", "2月", "3月", "4月", "5月","6月" ]
      },
      // y轴
      yAxis: {
        // y轴刻度
        // data: [ 10, 20, 30, 40 ]
        // y 轴可以不用设置 data,
        // 因为 y轴刻度 根据数据动态生成才是更合理的
      },
      // 数据 (数组) => 可以同时显示多组数据
      series: [
        {
          name: '人数',  // 标记当前数据name是什么
          type: 'bar',  // 柱状图显示  bar柱状图, line折线图, pie饼图
          data: [ 1000, 2000, 1036, 2501, 1002,2001 ]
        },
        
      ]
    };
    
    // (2) 通过 setOption 方法生成一个简单的柱状图
    myChart.setOption( option );


    var myChart1 = echarts.init(document.querySelector(".pic_right"));
    
      var option1 = {
        title : {
          text: '热门品牌销售',
          subtext: '2017年6月',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['耐克','阿迪','李宁','新百伦','阿迪王']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'耐克'},
              {value:310, name:'阿迪'},
              {value:234, name:'李宁'},
              {value:135, name:'新百伦'},
              {value:1548, name:'阿迪王'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart1.setOption(option1);
  
});