import { View, Text, Button } from '@tarojs/components'
import Taro,{ useLoad } from '@tarojs/taro'
import './index.scss'

export default function Route() {
  // 获取路由传参
  useLoad((options) => {
    // 1.第一种接参数
    // console.log('options', options)
    // console.log('id',options.id);
    // console.log('id',options.name);
    // console.log('id',options.sex);

    // 第二种接参数 通过对象
    // const params = Taro.getCurrentInstance().router?.params
    // console.log('params',params);
  })


  // 获取Taro支持的环境
  console.log(Taro.ENV_TYPE);

  // 获取当前环境
  console.log(Taro.getEnv());

  // 不同环境打印不同的内容
  const env = Taro.getEnv()
  if (env == "WEB") {
    console.log('当前环境是web');
  } else if (env == 'WEAPP') {
    console.log('当前环境是微信');
  }

  function handleClickMessage() {
    // 消息弹框
    Taro.showToast({
      // 标题
      title: "消息弹框",
      // 图标
      icon: "loading",
      // 持续时间
      duration: 2000,
      mask: true,
      success(res) {
        console.log('消息弹框成功');
      },
    })
  }

  function handleClickModel() {
    // 对话框
    Taro.showModal({
      title: "这是一个对话框",
      content: "这里面是内容",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('我点击了确定');
        } else if (res.cancel) {
          console.log('我点击了取消');
        }
      }
    })
  }

  function handleClickLoading() {
    Taro.showLoading()
  }

  function handleClickSheet() {
    let list = ["abc", "nba", "bbb"]
    Taro.showActionSheet({
      itemList: list,
      success(result) {
        console.log(result);
        console.log(list[result.tapIndex]);
      },
    })
  }

  function handleClickTitle() {
    Taro.setNavigationBarTitle({
      title:"路由页面"
    })
  }

  function handleClickColor() {
    Taro.setNavigationBarColor({
      // 前背景颜色
      frontColor: "#ffffff",
      // 需要改变为的颜色
      backgroundColor: "#ff0000",
      // 动画属性
      animation: {
        // 持续时间
        duration: 500,
        // 时间函数
        timingFunc:"easeIn"
      }
    })
  }




  return (
    <View className='route'>
    <Button onClick={handleClickMessage}>消息弹框</Button>
    <Button onClick={handleClickModel}>对话框</Button>
    <Button onClick={handleClickLoading}>加载框</Button>
    <Button onClick={handleClickSheet}>操作菜单</Button>
    <Button onClick={handleClickTitle}>设置标题</Button>
    <Button onClick={handleClickColor}>设置标题颜色</Button>
    </View>
  )
}
