import { View, Text } from '@tarojs/components'
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
    const params = Taro.getCurrentInstance().router?.params
    console.log('params',params);

  })

  return (
    <View className='route'>
      <Text>Hello world!</Text>
    </View>
  )
}
