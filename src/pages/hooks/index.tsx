import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'

export default function Hooks () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  // 添加状态 useState [第一个参数是变量值,第二个参数是修改该变量的值函数] = useState(初始值)
  const [name, setName] = useState<string>("张三")

  const [age, setAge] = useState<number>(18)


  const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5])


  interface UserType{
    name: string
    age:number
  }

    function handleAddAge() {
 setAge(age+1)
  }


  // 数组修改 需要特殊处理
  function handleChangeArr() {
    // setArr([...arr,6,7])
    // 假如我需要弹出第一个元素
    const newArr = arr.slice(1)
    setArr(newArr)
  }


  const [obj, setObj] = useState<UserType>({
    name: "张三",
    age:18
  })


  function handleChangeObj() {
    const newUser = {
      ...obj,
      name:"你好"
    }
    setObj(newUser)
  }



  // const [couter, setCouter] = useState(0)


  // const handleCouterClick = () => {
  //   for (let i = 0; i < 3; i++){


  //     setCouter(pre => {
  //         console.log('上一次的值',pre);
  //        return pre+1
  //       })
  //   }
  //   // pre 上一次的值

  // }

  const [time, setTime] = useState(() => {
    console.log('初始化值');

    let ti = new Date().getDate()
    return ti
  })


  const [tabArr, setTabArr] = useState(["主题", "历史记录", "答疑库"])
  const [active, setActive] = useState(0)


  const data = () => {
    if (active === 0) {
      return <View>主题</View>

    } else if (active === 1) {
      return <View>历史记录</View>
    }
    else {
      return <View>答疑库</View>
    }
  }


  return (
    <View className='hooks'>
      {/* <View>{name}</View>
      <Button onClick={() => {
       setName("李四")
      }}
      >修改name</Button> */}


      {/* <View>{age}</View>
      <Button onClick={handleAddAge}>age+1</Button>
      <Button onClick={() => {
        setAge(age -1)
      }}
      >age-1</Button> */}


      {/* <View>
        {obj.name}
      </View>
          <View>
        {obj.age}
      </View>
      <Button onClick={handleChangeObj}>修改对象的用户名</Button> */}

      {/* <View>{couter}</View>
      <Button onClick={handleCouterClick}>计数器➕</Button> */}


      {/* 选项卡 */}

      <View className='tabs'>
        {
          tabArr.map((item, index) => {
            return (
              <View
                className={active === index ? `tabs-item tabs-item-active` : 'tabs-item '}
                onClick={() => {
                  setActive(index)
                }}
                key={index}
              >{item}</View>
            )
          })
        }
      </View>

      <View>
        {data()}
      </View>

    </View>
  )
}
