/**
 * Created on 2018/3/7.
 */
$(function() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {

        tooltip: {
            trigger: "axis"
        },

        textStyle:{fontSize:16,color:'red'},
        polar: [{
            indicator: [{
                // text: "销售\n111",
                max: 6000,
                min: 0
                
            },
                {
                    // text: "销售\n22",
                    max: 160002,
                    min: 0
                },
                {
                    // text: "销售\n33",
                    max: 30000,
                    min: 0
                },
                {
                    // text: "销售\n44",
                    max: 38000,
                    min: 0
                },
                {
                    // text: "销售\n55",
                    max: 52000,
                    min: 0
                },
                {
                    // text: "销售\n66",
                    max: 25000,
                    min: 0
                    
                }
            ],
            name: {
                show: true, 
                formatter: '{value}', 
                textStyle: {
                    color: '#fff' ,
                    fontSize:30
                }
            },
            type: "polygon",
            splitNumber: 5,
            splitArea: {
                areaStyle: {
                    type: "default",
                    color: "rgb(29, 63, 186)"
                },
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    width: 1
                }
            }
        }],
        series: [{
            symbol: "none",
            name: "",
            type: "radar",

            data: [{
                value: [4300, 9000, 8000, 15000, 40000, 19000],
                name: "Ԥ������",
                label: {  
                    normal: {  
                        show: true,  
                        formatter:function(params) {  
                            return params.value;  
                        }  
                    }  
                },  
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "none"
                        },
                        areaStyle: {
                            type: 'default',
                            opacity: 1,
                            color: "#30c1d6" 
                        }
                    }
                },
            }],
            tooltip: {
                backgroundColor: "rgb(17, 54, 71)"
            }
        },

        ],
        title: {
            textStyle: {
                color: "rgb(218, 227, 232)"
            }
        },
    }
    myChart.setOption(option);
})