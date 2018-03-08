

var map = new BMap.Map("allmap", {mapType:BMAP_HYBRID_MAP});
    var point = new BMap.Point(113.332604,23.126473);
    // 创建点坐标
    map.centerAndZoom(point, 11);
    // 初始化地图， 设置中心点坐标和地图级别
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
     map.addControl(new BMap.NavigationControl()); // 添加平移缩放控件
    map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
    map.addControl(new BMap.OverviewMapControl()); //添加缩略地图控件
    map.enableScrollWheelZoom(); //启用滚轮放大缩小 
    map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
    
	map.centerAndZoom(point, 14);