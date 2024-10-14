import axios from "axios";
import { Button, View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import Card from '@/components/Card'
import { useState,useEffect } from 'react'
import type {Notice,ResponseType} from "../../../types"
import instance from "@/service";

export default function Hooks() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const [noticeList,setNoticeList] = useState<Notice[]>([])
// async function getData() {
//   const response = await fetch('https://dabenshi.cn/other/api/hot.php?type=toutiaoHot',{
//     method: 'GET',
//     cache:"no-cache",
//   });
//   const data = await response.json() as ResponseType
//   // 确保一定有数据
//   if(data.data && data.data.length>0){
//     setNoticeList(data.data)
//   }
// }

async function getDataListByAxios(){
  // 向给定ID的用户发起请求
//   axios.get('https://dabenshi.cn/other/api/hot.php?type=toutiaoHot')
//   .then(function (response) {
//     // 处理成功情况
//     const data = response.data as ResponseType
//     if(data.data && data.data.length>0){
//       setNoticeList(data.data)
//     }
//   })
// .catch(function (error) {
//   // 处理错误情况 后端修改状态码 500 400
//   console.log(error);
// })
// .finally(function () {
//   // 总是会执行
//   console.log("请求完成");
// });

const response = await axios.get('https://dabenshi.cn/other/api/hot.php?type=toutiaoHot')
    const data = response.data as ResponseType
    if(data.data && data.data.length>0){
      setNoticeList(data.data)
    }
}


// const getDataListByTaro=async ()=>{
//   // Taro.request({
//   //   url: 'https://dabenshi.cn/other/api/hot.php?type=toutiaoHot',
//   //   method:"GET",
//   //   success(result) {
//   //       const data = result.data as ResponseType
//   //   if(data.data && data.data.length>0){
//   //     setNoticeList(data.data)
//   //   }
//   //   },
//   //   complete(res) {
//   //     console.log('结束网络请求');
//   //   },
//   //   fail(err) {
//   //     console.log("错误了")
//   //   }
//   // })

//   const response =await Taro.request({
//     url:"https://dabenshi.cn/other/api/hot.php?type=toutiaoHot",
//     method:"GET",
//   })

//     const data = response.data as ResponseType
//     if(data.data && data.data.length>0){
//       setNoticeList(data.data)
//     }

// }


// 1.fetch 2.axios 3.taro.request 这个接口需要传userId title body

async function fetchPost(){
  const res =await fetch("http://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
      userId:100,
      title:"title",
      body:"body"
    })
  })
  const data = await res.json()
  console.log(data,'data')
  if(data.id){
    console.log('post请求成功')
  }
}

//  axios
// async function axiosPost(){
//   const res = await axios.post('http://jsonplaceholder.typicode.com/posts',{
//     "userId":1,
//     "title":"测试",
//     "body":"测试内容"
//   }
// )
//   console.log(res,'res')
// }

const taroPost = async()=>{
  const res = await Taro.request({
    url:"http://jsonplaceholder.typicode.com/posts",
    method:"POST",
    data:{
       "username":"test",
    "password":"123456"
    }
  })
  if(res.errMsg === 'request:ok'){
    console.log('post请求成功')
  }
  console.log(res,'res')
}

const addPost = async()=>{
  const res = await axios.post('https://httpbin.org/post',{
    "username":"test",
    "password":"123456"
  },{
    headers: {
      'Content-Type': 'application/json'
    }
})
  console.log(res.data)
}

useEffect(()=>{
},[])


  const [name,setName] = useState("张三")
  const handleChangeName = (realName:string) => {
   setName(realName)
  }

  // useEffect(setup, dependencies?)
  // setup函数 页面加载之后需要做什么事情
  // dependencies依赖数组 可选 可以传也可以不传
  // 依赖数组 3种传法 1.不传 2.传空数组 3.传数组
  // 1.不传=> 页面加载会执行一次 以及 任何事件触发也会执行
  // 2.传一个空数组=> 页面加载会执行一次 后续不会触发
  // 3.传一个数组=> 根据依赖项来进行触发 如果依赖项发生改变就会重新执行一次

  const [number,setNumber] = useState(0)
  const handleClick=()=>{
    setNumber(pre=>pre+1)
  }

  // useEffect(()=>{
  //   console.log("first useEffect")
  // },[name,number])


  // useEffect(setup, dependencies?) setup函数里面还有清理函数 可以传也可以不传 需要自己return
  // 1.定时器setInterval setTimeout
  // 2.原始的dom函数绑定 也就是 事件监听器
  // 3.websocket连接
  // 4.网络请求的打断
  // 5.结合第三方库

  // useEffect(()=>{
  //   const timer = setInterval(() => {
  //     console.log("setInterval")
  //   },1000)
  //   // 如果需要清理就写return函数
  //   return ()=>{
  //   console.log("清理")
  //   clearInterval(timer)
  //   }
  // })

  // window对象 => react => react native taro web

  // useEffect(()=>{
  //   // 1.监听页面变化 resize scroll ...
  //   const handleResize=()=>{
  //     console.log("页面发生变化")
  //   }

  //   // 1.开启监听
  //   window.addEventListener("resize",handleResize)

  //   // 2.卸载监听
  //   return ()=>{
  //     window.removeEventListener("resize",handleResize)
  //   }
  // })

  // useEffect(()=>{
  //   const socket = new WebSocket("ws://localhost:3000")
  //   // 1.开启连接
  //   socket.onopen = () => {
  //     console.log("连接成功")
  //   }

  //   // 监听消息
  //   socket.onmessage = (event) => {
  //     console.log(event.data)
  //   }

  //   // 监听错误
  //   socket.onerror = (event) => {
  //     console.log(event)
  //   }

  //   // 清理

  //   return ()=>{
  //     socket.close()
  //   }
  // })

  // useEffect(() => {
  //   const source = axios.CancelToken.source();

  //   axios.get('/api/some-endpoint', { cancelToken: source.token })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       if (axios.isCancel(error)) {
  //         console.log('Request cancelled');
  //       } else {
  //         console.error(error);
  //       }
  //     });

  //   return () => {
  //     source.cancel('Component unmounted');
  //   };
  // }, []);

  // FadeInAnimation
  // useEffect(()=>{
  // const animation = new FadeInAnimation(dom节点)
  // // 开启动画
  // animation.start()

  // // 卸载动画
  // return ()=>{
  //   animation.stop()
  // }
  // })

  // useEffect可以开启多个 就跟useState一样可以开多个

  useEffect(()=>{
    console.log("first useEffect")
  },[name,number])

  useEffect(()=>{
    console.log("second useEffect")
  })

  useEffect(()=>{
    console.log("third useEffect")
  },[])



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
      {/* 插槽
      类型Vue框架中slot的做法
      */}
      {/* <Card content={name} changeName={handleChangeName}>
       <View style={{backgroundColor:'red',height:"100px",width:"100%"}}>
       <Button type='primary'>这是传递的Button组件</Button>
       <View>这是文本</View>
       </View>
      </Card> */}
      {/* <Card content={name} changeName={handleChangeName} />
      <Button onClick={handleClick}>计数器加+1</Button>
      <View>{number}</View> */}

      {
        noticeList.map((item,index)=>{
          return (
            <Card
              img={item.image_url}
              key={index}
              title={item.title}
              content={item.label}
              confirmBtn={item.hot_value}
              cancelBtn={item.label_desc}
            />
          )
        })
      }
    </View>
  )
}
