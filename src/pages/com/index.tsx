import { View, Text, RichText, Icon,Image ,Video,Swiper,SwiperItem,ScrollView, Button,Navigator} from '@tarojs/components'
import Taro, { useLoad} from '@tarojs/taro'
import './index.scss'
import Pic from "../../assets/images/pic.png"
import empty_cart from "../../assets/images/empty_cart.png"
import Banner01 from "../../assets/images/banner/banner01.jpeg"
import Banner02 from "../../assets/images/banner/banner02.jpeg"
import Banner03 from "../../assets/images/banner/banner03.jpeg"

export default function Com () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  function handleNavigator1() {
    // navigateTo
    Taro.navigateTo({
      url:"/pages/route/index?id=1&name=张三&sex=男"
    })
  }
  function handleNavigator2() {
    // redirectTo
    Taro.redirectTo({
      url:"/pages/route/index"
    })
  }
  function handleNavigator3() {
    // switchTab
    Taro.switchTab({
      url:"/pages/index/index"
    })
  }

  return (
    // View
    // <View className='com-warp' hoverClass='com-warp-hover' hoverStartTime={2000} hoverStayTime={0}>
    //   <View className='com-inner-warp' hoverClass='com-inner-warp-hover' hoverStopPropagation></View>
    // </View>

    // <Text userSelect space='ensp'>文本内容     111111111111        111111111</Text>

    // <RichText nodes='<h1>这是富文本内容</h1>' />
    // <>
    //  <Icon size={60} type='success' />
    //  <Icon size={60} type='download' />
    // <Icon size={80} type='success' color='#000000' />
    // </>
    <>
    {/* <Image src='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'  className='img' />
    <Image src={Pic} />
    <Image src={empty_cart} className='img' /> */}


        {/* <Image src={Pic} />
        <Image src={Pic} mode='heightFix' />
        <Image src={Pic} mode='widthFix' />
        <Image src={Pic} mode='aspectFill' />
        <Image src={Pic} mode='aspectFit' />
        <Image src={Pic} mode='scaleToFill' />
        <Image src={Pic} mode='top' />
        <Image src={Pic} mode='bottom' /> */}


         {/* <Video
           id='video'
           src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
           poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
           initialTime={0}
           controls
           autoplay={false}
           loop={false}
           muted={false}
         /> */}

      {/* <Swiper indicatorDots indicatorColor='#124895' indicatorActiveColor='#845132' circular autoplay interval={1000} >
        <SwiperItem>
          <Image src={Banner01} mode='widthFix' className='banner' />
        </SwiperItem>
         <SwiperItem>
          <Image src={Banner02} mode='widthFix'   className='banner' />
        </SwiperItem>
         <SwiperItem>
         <Image src={Banner03} mode='widthFix'  className='banner' />
        </SwiperItem>
      </Swiper> */}

      {/* <ScrollView scrollY className='scroll-view'>
        <View className='view-item'>1</View>
        <View className='view-item'>2</View>
        <View className='view-item'>3</View>
        <View className='view-item'>4</View>
        <View className='view-item'>5</View>
        <View className='view-item'>6</View>
        <View className='view-item'>7</View>
        <View className='view-item'>8</View>
      </ScrollView>


        <ScrollView scrollX className='scroll-view-x'>
        <View className='view-item-x'>1</View>
        <View className='view-item-x'>2</View>
        <View className='view-item-x'>3</View>
        <View className='view-item-x'>4</View>
        <View className='view-item-x'>5</View>
        <View className='view-item-x'>6</View>
        <View className='view-item-x'>7</View>
        <View className='view-item-x'>8</View>
      </ScrollView> */}
      <Button type='default'>按钮</Button>
      <Button type='primary'>按钮</Button>
      <Button type='warn'>按钮</Button>
      <Button size='mini'>按钮</Button>
      <Button size='default'>按钮</Button>
      <Button plain>按钮</Button>
      <Button disabled>按钮</Button>
      <Button loading>按钮</Button>
      <Button openType='share'>按钮</Button>
      <Button openType='contact'>按钮</Button>
      <Button openType='openSetting'>按钮</Button>

      {/* Navigator路由跳转
      url 页面路径
      openType 跳转方式(navigate redirect switchTab)
      */}
      <Navigator url='/pages/route/index?id=100' openType='navigate'>
      <Text>跳转到route页面</Text>
      </Navigator>

      <Navigator url='/pages/route/index?id=200&name=hang' openType='redirect'>
      <Text>跳转到route页面</Text>
      </Navigator>


      <Navigator url='/pages/index/index' openType='switchTab'>
      <Text>跳转到index页面</Text>
      </Navigator>

      <Button onClick={handleNavigator1} type='primary'>跳转到route页面</Button>
      <Button onClick={handleNavigator2} type='warn'>跳转到route页面</Button>
      <Button onClick={handleNavigator3} type='default'>跳转到index页面</Button>
    </>
  )
}
