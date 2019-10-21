# Anywhere- 是什么？
Anywhere- 是我有一天突然有了灵感并开始着手制作的工具类 App。它支持将你常用的页面 (Activity) 收集到一个界面并保存，方便快速打开。在手机 App 数量繁多的今天，Anywhere- 也许能帮助你节约一些时间，做一些微小的工作。

# Anywhere- 能做什么？
Anywhere- 目前有 3 个工作模式：
- URL Scheme
- Root
- Shizuku

## URL Scheme
此模式无需任何运行时权限，通过[ URL Scheme 协议](https://en.m.wikipedia.org/wiki/Uniform_Resource_Identifier)打开特定页面。
- 优点：无需任何运行时权限，可打开指定界面。
[像这样](anywhere://url?param1=alipays://platformapi/startapp?appId=60000002&param2=&param3=) 
[像这样](anywhere://url?param1=orpheus://song/478127&param2=&param3=) 
[或者像这样](anywhere://url?param1=coolmarket://www.coolapk.com/feed/271681&param2=&param3=)

- 缺点：需要应用支持；不支持所有页面。

[使用方法](#URL Scheme 模式)

## Root
Root 模式通过使用 ADB 指令打开指定的页面(Activity)。
- 优点：可以打开任何 **Activity** 页面。
[像这样](anywhere://url?param1=com.android.settings&param2=.wifi.WifiSettings&param3=1)
[或者像这样](anywhere://url?param1=tv.danmaku.bili&param2=.MainActivityV2&param3=0)

- 缺点：暂时不支持打开 **Fragment**；暂时不支持传递 **Intent Extras**。

## Shizuku
Shizuku 模式可以通过使用 [Shizuku Manager](coolmarket://www.coolapk.com/apk/moe.shizuku.privileged.api) 实现免 Root 权限获得与 Root 模式相同的功能。
- 优点：无需 Root 权限实现 Root 模式功能。
- 缺点：需要额外下载 Shizuku Manager。

# Anywhere- 将要做什么
- [ ] 打开任意 Fragment
- [ ] 支持传递 Intent 参数
- [ ] 微信小程序
- [ ] 排序
- [ ] 分页
- [ ] ... 


# URL Scheme 模式
## 1.适用场景
- 支付宝小程序（蚂蚁森林、电影票、火车票） [像这样](anywhere://url?param1=alipays://platformapi/startapp?appId=60000002&param2=&param3=)
- 网易云歌单 [像这样]( anywhere://url?param1=orpheus://playlist/523958926&param2=&param3=)
- 微博热搜 [像这样](anywhere://url?param1=weibo://fragmentpage?containerid=102803&needlocation=1&param2=&param3=)
- 酷安动态 [像这样](anywhere://url?param1=coolmarket://www.coolapk.com/feed/271681&param2=&param3=)
- ……

更多操作可能请前往 [捷径社区](https://sharecuts.cn/apps) 查看。

## 2.添加方式
### 2.1 切换工作模式
1. 点击主界面右上角的“齿轮”图标进入设置。
2. 选择工作模式为“URL Scheme”。

### 2.2 填写参数
1. 点击主界面右下角的“加号”图标弹出添加新的 URL Scheme 菜单。
2. 第一项是此 URL Scheme 的别名，可以随意填写。
3. 第二项是此 URL Scheme 的链接，可以在左上角的“捷径社区”寻找想要的。也可以在搜索引擎搜索“App 名称 + URL Scheme”尝试寻找。
4. 第三项是描述，选填。
5. 点击保存，创建完成。
