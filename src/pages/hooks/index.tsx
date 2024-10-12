import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Card from '@/components/Card'

export default function Hooks() {


  useLoad(() => {
    console.log('Page loaded.')
  })


  return (
    <View className='hooks'>
      {/* <Header />
      <Content />
      <Footer /> */}
      {/*
      string
      number
      boolean => 需要进行判断 因为是布尔类型 不会直接展示内容
      null => 需要进行判断 因为是null 不会直接展示内容
      undefined => 需要进行判断 因为是undefined 不会直接展示内容
      object => 因为jsx不能直接展示对象 需要.属性 或者JSON.stringify()
      array => 可以直接渲染
      function => 传递函数 无法直接渲染 需要执行函数才会有结果
      jsx Element => 传递一个jsx元素(组件)
      */}
      <Card content='test' changeName={() => { }} />
    </View>
  )
}
