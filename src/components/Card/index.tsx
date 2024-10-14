import { View, Image } from '@tarojs/components'
import './index.scss'
import React from 'react'

interface CardProps{
  // ?叫做可选类型
  title?:string,
  content?:any
  confirmBtn?:string
  cancelBtn?:string
  changeName?:(name:string)=>void
  children?:React.ReactNode
  img?:string
}


//  1.父组件传值给子组件
export default function Card({title,content,confirmBtn,cancelBtn,changeName,children,img}:CardProps) {
  return (
    <View className='card'>
      <View className='header'>
        {/* 如果有传子元素 就优先展示子元素 其次是默认元素 */}
        {
          children ? children :  <Image className='img' src={
            img || 'https://v4.mui.com/static/images/cards/contemplative-reptile.jpg'
          } mode='widthFix'
          ></Image>
        }

      </View>
      <View className='main'>
        <View className='title'>
          {/* ?? || 逻辑运算符 */}
          {title || '这是默认值'}
        </View>
        <View className='content'>
          {content}
        </View>
      </View>
      <View className='footer'>
        <View className='btn-action' onClick={()=>changeName('李四')}>
          {confirmBtn || '确定'}
        </View>
        <View className='btn-action'>
          {cancelBtn || '取消'}
        </View>
      </View>
    </View>
  )
}

// 2.箭头函数写法
// const Card:React.FC<CardProps> = ({title})=>{
//   return (
//     <View className='card'>
//     <View className='header'>
//       <Image className='img' src='https://v4.mui.com/static/images/cards/contemplative-reptile.jpg' mode='widthFix'></Image>
//     </View>
//     <View className='main'>
//       <View className='title'>
//         {title}
//       </View>
//       <View className='content'>
//         Lorem ipsum dolor sit amet, consectetur enim explicabo nulla quidem voluptatem quisquam architecto nostrum, numquam.
//       </View>
//     </View>
//     <View className='footer'>
//       <View className='btn-action'>SHARE</View>
//       <View className='btn-action'>LEARN MORE</View>
//     </View>
//   </View>
//   )
// }

// export default Card
