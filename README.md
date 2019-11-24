# Anywhere- 是什么？
Anywhere- 是我有一天突然有了灵感并开始着手制作的工具类 App。它支持将你常用的页面 (Activity) 收集到一个界面并保存，方便快速打开。在手机 App 数量繁多的今天，Anywhere- 也许能帮助你节约一些时间，做一些微小的工作。

# Anywhere- 能做什么？
Anywhere- 目前有 3 个工作模式：
- Normal
- Root
- Shizuku

## Normal
此模式无需任何运行时权限，通过[ URL Scheme 协议](https://en.m.wikipedia.org/wiki/Uniform_Resource_Identifier)打开特定页面，也可以通过 Intent 打开 Exported 页面。
- 优点：无需任何运行时权限，可打开指定界面。
[像这样](anywhere://url?param1=alipays://platformapi/startapp?appId=60000002&param2=&param3=) 
[像这样](anywhere://url?param1=orpheus://song/478127&param2=&param3=) 
[或者像这样](anywhere://url?param1=coolmarket://www.coolapk.com/feed/271681&param2=&param3=)

- 缺点：需要应用支持；不支持所有页面。

[使用方法](/URL-Scheme-Usage.md)

## Root
Root 模式通过使用 ADB 指令打开指定的页面(Activity)。
- 优点：可以打开任何 **Activity** 页面。
[像这样](anywhere://url?param1=com.android.settings&param2=.wifi.WifiSettings&param3=)
[或者像这样](anywhere://url?param1=tv.danmaku.bili&param2=.MainActivityV2&param3=)

- 缺点：暂时不支持打开 **Fragment**；暂时不支持传递 **Intent Extras**。

[使用方法](/Root-Mode-Usage.md)

## Shizuku
Shizuku 模式可以通过使用 [Shizuku Manager](https://www.coolapk.com/apk/moe.shizuku.privileged.api) 实现免 Root 权限获得与 Root 模式相同的功能。
- 优点：无需 Root 权限实现 Root 模式功能。
- 缺点：需要额外下载 Shizuku Manager。

[使用方法](/Shizuku-Mode-Usage.md)

# 添加方式
在主界面右下角的按钮中有三种 Activity 添加方式：
- URL Scheme
- 活动列表
- Collector

它们分别适用于不用的场景。（待补充）

# 添加 Intent Extras
[使用方法](/Put-Intent-Extras.md)

# Anywhere- 将要做什么
- [ ] 打开任意 Fragment(尝试性)
- [ ] 自定义 Page
- [ ] 微信小程序(尝试性)
- [ ] 分页
- [ ] ... 
