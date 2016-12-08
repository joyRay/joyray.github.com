$(function(){
    $('#contact').popover({placement:'bottom', container: 'body', html:true, content:'<p>QQ: 1432789914</p><p>微信：zhl_wutuobang</p>'});
    $('#avatar').tooltip({'placement':'bottom'});
  
    /*Javascript源代码*/
    $.getScript('http://www.chartjs.org/assets/Chart.js',function(){
      
      var zhdata = [{
            label: '中文水平',
            value: 90,
            highlight: "#FFC870",
            color: "#F7464A"
        }, {
            value: 10,
            color: "#EEEEEE"
        }
        ]

        var zhoptions = {
            animation: true,
            segmentShowStroke : false
        };

        var c = $('#zh');
        var ct = c.get(0).getContext('2d');
        
        var zhChart = new Chart(ct).Doughnut(zhdata, zhoptions);

    
      var endata = [{
            label: '英文水平',
            value: 80,
            highlight: "#5AD3D1",
            color: "#4D5360"
        }, {
            value: 20,
            color: "#EEEEEE"
        }]

        var enoptions = {
            animation: true,
            segmentShowStroke : false
        };

        var c = $('#en');
        var ct = c.get(0).getContext('2d');
        
        var enchart = new Chart(ct).Doughnut(endata, enoptions);
    });

});