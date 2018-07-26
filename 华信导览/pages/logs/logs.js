//logs.js
const util = require('../../utils/util.js')
var click = true
Page({
  data: {
    //初始化为华信学院坐标  地图标记
    latitude: 38.332010,
    longitude: 114.771600,
    hospital: true,
    scale: 16,
  },
/****************************************校 门***************************************** */
  hx_door: function () {
    var maps = [38.332010, 114.771600]
    this.setData({
      hx_door:true,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: maps[0], //经度
      longitude: maps[1], //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: maps[0],
        longitude:maps[1],
        width: 20,
        height: 20
      }]
    })
  },
 /****************************************餐饮***************************************** */
  hx_canteen: function () {
    this.setData({
      hx_door: false,
      hx_canteen: true,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: 38.332880, //经度
      longitude: 114.773140, //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 38.3341671,
        longitude: 114.770241,
        width: 20,
        height: 20
      }, {
        iconPath: '../images/hxLocation.png',
          latitude: 38.332880,
          longitude: 114.773140,
        width: 20,
        height: 20
      }

      ]
    })
  },
 /****************************************超市***************************************** */
  hx_supermarket: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: true,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: 38.332880, //经度
      longitude: 114.773140, //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',   //大超市
        latitude: 38.334301, 
        longitude: 114.772720,
        width: 20,
        height: 20
      }, {
        iconPath: '../images/hxLocation.png',   //进门超市
          latitude: 38.330990, 
          longitude: 114.772740,
        width: 20,
        height: 20
      }

      ]
    })
  },
  /****************************************华信教学楼***************************************** */
  hx_teach: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: true,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: 38.332880, //经度
      longitude: 114.773140, //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',   //教学楼1
        latitude: 38.331949,
        longitude:  114.773521,
        width: 20,
        height: 20
      }, {
        iconPath: '../images/hxLocation.png',   //教学楼2
          latitude: 38.331570,
          longitude: 114.769610,
        width: 20,
        height: 20
        },{
          iconPath: '../images/hxLocation.png',   //实验楼1
          latitude: 38.330038,
          longitude: 114.770839,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',   //实验楼2
          latitude: 38.330607, 
          longitude: 114.769734,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',   //办公楼
          latitude:  38.330308, 
          longitude: 114.772829,
          width: 20,
          height: 20
        }

      ]
    })
  },

  /****************************************医 务 室***************************************** */
  hx_hospital: function () {
    var maps = [38.330691, 114.770442]
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: true,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: maps[0], //经度
      longitude: maps[1], //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: maps[0],
        longitude: maps[1],
        width: 20,
        height: 20
      }]
    })
  },
  /****************************************华 信 体 育 场***************************************** */
  hx_playground: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: true,
      hx_library: false,
      hx_dorm: false,
      latitude: 38.334246,
      longitude: 114.771354,
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 38.334246,  /**大操场 */
        longitude: 114.771354,
        width: 20,
        height: 20
      },
        {
          iconPath: '../images/hxLocation.png',
          latitude: 38.332500,
          longitude: 114.769664,   /**篮球场 */
          width: 20,
          height: 20
        }]
    })
  },
  /****************************************华 信 图 书 馆***************************************** */
  hx_library: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: true,
      hx_dorm: false,
      latitude: 38.334246,
      longitude: 114.771354,
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 38.332454,  /**图书馆 */
        longitude: 114.771654,
        width: 20,
        height: 20
      }]
    })
  },

  /****************************************华 信 宿 舍***************************************** */
  hx_dorm: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: true,
      latitude: 38.334246,
      longitude: 114.771354,
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 38.340475,  /**学生公寓1 */
        longitude:  114.779546, 
        width: 20,
        height: 20
      }, {
          iconPath: '../images/hxLocation.png',
          latitude: 38.339658,   /**学生公寓2 */
          longitude: 114.779483, 
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 38.333820,   /**学生公寓3 */
          longitude: 114.770017,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 38.334011,   /**学生公寓4 */
          longitude: 114.770264,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 38.333392,  /**活动中心宿舍楼*/
          longitude: 114.771600, 
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 38.334469,  /**洗浴中心宿舍楼 */
          longitude: 114.772423,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 38.333249,  /**学生公寓洗浴中心 */
          longitude: 114.772893, 
          width: 20,
          height: 20
        }
      
      
      ]
    })
  },
  onShow: function () {
    this.setData({
      mapheight: 650  //设置地图高度
    })
    this.setData({
      icon: "∨",
      bootom: 0
    })
    
  },
  onShareAppMessage: function () {
    /**用户点击分享 */
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  /**go go go*/
  go: function (e) {
    var id = e.currentTarget.id; //获取id
    switch (id) {
      /*华信大门*/
      case "door1": 
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.332010,
          longitude: 114.771600,
          scale: 25
        })
        break;
      /*华信餐饮*/
      case "canteen1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.332880,  /**大食堂 */
          longitude: 114.773140,    
          scale: 25
        })
        break;
      case "canteen2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.3341671,/**小食堂*/
          longitude: 114.770241,
          scale: 25
        })
        break;
        /*华信超市*/
      case "supermarket1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.334301,  /**大超市 */
          longitude: 114.772720,
          scale: 25
        })
        break;
      case "supermarket2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.330990, /**进门超市*/
          longitude: 114.772740, 
          scale: 25
        })
        break;
     
     
     
     
      /**华信教学楼 */
      case "teach1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.331949,
          longitude: 114.773521,
          scale: 25
        })
        break;
      case "teach2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.331570,
          longitude: 114.769610,
          scale: 25
        })
        break;
      case "teach3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.330038,
          longitude: 114.770839,
          scale: 25
        })
        break;
      case "teach4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.330607,
          longitude: 114.769734,
          scale: 25
        })
        break;
      case "teach5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 38.330308,
          longitude: 114.772829,
          scale: 25
        })
        break;
      /**华信医务室 */
      case "hospital1":
        wx.openLocation({
          latitude: 38.330678,
          longitude: 114.770431,
          scale: 25
        })
        break;
      /**华信体育场 */
      case "playground1":
        wx.openLocation({
          latitude: 38.334246, 
          longitude: 114.771354,
          scale: 25
        })
        break;
      case "playground2":
        wx.openLocation({
          latitude:  38.332500, 
          longitude: 114.769664,
          scale: 25
        })
        break;
     /**华信图书馆*/
      case "library1":
        wx.openLocation({
          latitude: 38.332454,  /**图书馆 */
          longitude: 114.771654,
          scale: 25
        })
        break;
      /**华信宿舍楼*/
      case "dorm1":
        wx.openLocation({
          latitude: 38.340475,  /**学生公寓1 */
          longitude: 114.779546, 
          scale: 25
        })
        break;
      case "dorm2":
        wx.openLocation({
          latitude: 38.339658,   /**学生公寓2 */
          longitude: 114.779483, 
          scale: 25
        })
        break;
      case "dorm3":
        wx.openLocation({
          latitude: 38.333820,   /**学生公寓3 */
          longitude: 114.770017,

          scale: 25
        })
        break;
      case "dorm4":
        wx.openLocation({
          latitude: 38.334011,   /**学生公寓4 */
          longitude: 114.770264,
          scale: 25
        })
        break;
      case "dorm5":
        wx.openLocation({
          latitude: 38.333392,  /**活动中心宿舍楼*/
          longitude: 114.771600, 
          scale: 25
        })
        break;
      case "dorm6":
        wx.openLocation({
          latitude: 38.333249,  /**学生公寓洗浴中心 */
          longitude: 114.772893, 
          scale: 25
        })
        break;

    }
  }
})


