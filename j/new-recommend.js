//推荐位模块
var Rachel =
    {

        data: {restype: 2001, moduleKeys:'event_yichang_01,event_yichang_02,event_yichang_03' },
        init: function () {
            this.substitute();``
            this.getList();
        },
        apis: {
            recommendApi: "//search.ule.com/api/recommend?jsoncallback=?"
        },
        substitute: function (a) {
            return a && "object" == typeof a ? this.replace(/\{([^{}]+)\}/g, function (b, c) {
                var d = a[c];
                return void 0 !== d ? "" + d : ""
            }) : this.toString()
        },
        addImg: function (pos) {
            var self = this;
            var newItem = document.createElement("div");
            newItem.setAttribute("class", "insertImg");
            //获取外层标签
            var itemNode = $(pos)[0];
            itemNode.insertBefore(newItem, itemNode.firstChild);
        },
        getList: function () {
            var self = this;
            $.getJSON("//search.ule.com/api/recommend?jsoncallback=?",self.data, function (O) {
                for(var k=0;k<self.data.moduleKeys.length;k++){
                //数据列表
                    var Keys =self.data.moduleKeys.split(",");
                    var itemData =O[Keys[k]];
                    console.log(itemData);
                    //获取模板 初始化
                    var itemHTml = '';
                    var html = $('#itemTpl').html();
                    switch(k){
                        case 0:
                    for (var i = 0; i < 3; i++) {
                        itemData[i].imgUrl = ~itemData[i].imgUrl.indexOf('http') ? itemData[i].imgUrl : 'http:' + itemData[i].imgUrl;
                        //载入数据  第一个推荐位
                        switch (i) {
                            case 0:
                                itemHTml += html.substitute(itemData[0]);
                                $('.a').append(itemHTml);
                                self.addImg(".a .r_wrapper" );
                                break;
                            case 1:
                                itemHTml = '';
                                for (var j = 1; j < 13; j++) {
                                    itemHTml += html.substitute(itemData[j]);
                                }
                                $('.b').append(itemHTml);
                                break;
                            default:
                                break;
                        }
                    }

                            break;
                        case 1:{
                            for (var i = 0; i < itemData.length; i++) {
                                itemData[i].imgUrl = ~itemData[i].imgUrl.indexOf('http') ? itemData[i].imgUrl : 'http:' + itemData[i].imgUrl;
                                //载入数据  第一个推荐位
                                switch (i) {
                                    case 0:
                                        itemHTml += html.substitute(itemData[i]);
                                        $('.c').append(itemHTml);
                                         self.addImg(".c .r_wrapper");
                                        break;
                                    case 1:
                                        itemHTml = '';
                                        for ( j = 1; j < 3; j++) {
                                            itemHTml += html.substitute(itemData[j]);
                                        }
                                        $('.d').append(itemHTml);
                                        break;
                                    case 2:
                                        itemHTml='';
                                        for ( j = 3; j <11 ; j++) {
                                            itemHTml += html.substitute(itemData[j]);
                                        }
                                        $('.e').append(itemHTml);

                                    default:
                                        break;
                                }
                            }
                            //添加图片

                            break;
                        }
                        case 2:{
                            for (var i = 0; i < itemData.length; i++) {
                                itemData[i].imgUrl = ~itemData[i].imgUrl.indexOf('http') ? itemData[i].imgUrl : 'http:' + itemData[i].imgUrl;
                                //载入数据  第一个推荐位
                                switch (i) {
                                    case 0:
                                        for( j=0;j<2;j++)
                                        {itemHTml += html.substitute(itemData[j]);}
                                        $('.f').append(itemHTml);
                                        break;
                                    case 1:
                                        itemHTml = '';
                                        for (var j = 2; j <14; j++) {
                                            itemHTml += html.substitute(itemData[j]);
                                        }
                                        $('.g').append(itemHTml);
                                        break;
                                    default:
                                        break;
                                }
                            }
                            break;

                        }
                }
            }
            }
            )
        },

        //载入样式
        //考虑懒加载图片
    }
$(function () {
    Rachel.init();
});