export default defineAppConfig({
  // 全局页面路径
  pages: ["pages/index/index", "pages/com/index", "pages/route/index"],
  // 全局页面配置
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#001122",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white"
  },
  //分包处理
  // subPackages: [],
  // tabbar
  tabBar: {
    // 默认颜色
    color: "#8a8a8a",
    // 高亮颜色
    selectedColor: "#1296db",
    // 页面路径
    list: [
    {
      // 文本内容
      text: "首页",
      // 页面路径
      pagePath: "pages/index/index",
      // 默认图标
      iconPath: "assets/images/tabbar/home_no_active.png",
      // 高亮图标
      selectedIconPath: "assets/images/tabbar/home_active.png"
    },
    {
      text: "组件",
      pagePath: "pages/com/index",
      iconPath: "assets/images/tabbar/com_no_active.png",
      selectedIconPath: "assets/images/tabbar/com_active.png"
    }]

  }
});