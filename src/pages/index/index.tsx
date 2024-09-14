import { View,Navigator } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'


export default function Index() {

  useLoad(() => {
    console.log('useLoad');
  })

  // 字符串
  let a = '第一个变量'

  // 数组
  const arr = ['abc', 'cba', 'nba']

  const food = [
    {
      name: "苹果",
      price:99
    },
    {
      name: "葡萄",
      price:10
    }
  ]

  // 对象
  const obj = {
    name: "张三",
    age: 50
  }

  let isTrue = true

  let isNull = null;

  // eslint-disable-next-line no-undef-init
  let isUndefined = undefined;

  function fn() {
    return '我是函数的返回值'
  }

  let className1 = "class1"
  let className2 = "class2"

  let myStyle = {
    fontSize: "20px",
    border:"1px solid green"
  }


  // useState()
  let myFontStyle = {
    fontSize:  '60px'
  }

  function isTrueFuntion() {
    if (isTrue) {
      return <View>真的啊</View>
    } else {
      return <View>假的啊</View>
    }
  }

  function handleClickFunction(e) {
    console.log(e,'e');
    console.log('点击了按钮');
  }

  function handleAClick(e) {
    e.preventDefault() // 阻止原生事件
  }

  function handleViewClick(aThing, bThing) {
    console.log(aThing,bThing);

  }

  return (
    <>
      {/* 字符串 */}
      <View>{a}</View>
      {/* 数组 */}
      <View>{arr}</View>
      {/* 对象 单个属性 */}
      <View>{obj.name}-{obj.age}</View>
      {/* 对象 多个属性 */}
      <View>{JSON.stringify(obj)}</View>
      {/* 时间戳 */}
      <View>{new Date().getTime()}</View>
      {/* 布尔值 */}
      <View>{isTrue}</View>
      {/* null */}
      <View>{isNull}</View>
      {/* undefined */}
      <View>{isUndefined}</View>
      {/* 表达式 */}
      <View>{1 + 2}</View>
      {/* 三元表示式
      条件 ? 成立 : 不成立
      */}
      <View>
        {isTrue ? '我是真的' : '我是假的'}
      </View>
      {/* 执行一个函数 */}
      <View>{fn()}</View>
      <View>---------------------------------------</View>
      {/* class id */}
      {/* class -> className */}
      {/* id-> id */}
      <View className='box' id='id1'>class</View>
      <View className={className1}>动态class类名</View>
      {/* 模版字符串`` */}
      {/*
      `${动态参数}`
      */}
      <View className={`${className1} class2 class3`}>多个动态类名</View>
      <View className={`${className1} ${className2}`}>多个动态的</View>
      <View className={
        isTrue ? 'class1' : 'class2'
      }
      >三元表达式的类名</View>

      {/* style */}
      {/*
      里面的参数必须是驼峰
      */}
      <View>----------------------------</View>
      <View style={{
        fontSize:'30px'
      }}
      >第一个style</View>
       <View style={{
        fontSize: '30px',
        color: "pink",
        fontWeight: 'bold',
        textAlign: "center",
      }}
       >多个style</View>

      <View
        style={myStyle}
      >动态变量Style</View>

         <View
           style={myFontStyle}
         >动态参数Style</View>

      <a href='https://www.baidu.com'>ad</a>
      <a href={className1}>bbb</a>
      <View>------------------</View>
      {/* 列表循环 */}
      <View>
        {
          arr.map((item) => {
            return (
              <View key={item}>{ item}</View>
            )
          })
        }
      </View>
      {/* 数组对象循环 */}
      <View>
        {
          food.map((item) => {
            return (
              <View>{item.name} - { item.price}</View>
            )
          })
        }
      </View>
      {/* 条件渲染 */}
      {/* 第一种三元表示 */}
      <View>
        {
          isTrue ? <View>真的</View> : <View>假的</View>
        }
      </View>
      {/* 函数形式返回 */}
      <View>
        {isTrueFuntion()}
      </View>
      {/* 逻辑与 && */}
      <View>
        {
          isTrue && <View>我是真的233</View>
        }
      </View>
      <View className='btn' onClick={handleClickFunction} >按钮</View>
      <a href='https://www.baidu.com' onClick={handleAClick}>这是一个a标签</a>
      <View onClick={()=>handleViewClick('参数1','参数2')}>事件传参</View>
    </>
  )
}
