## 各型号摄像头配置
可以参考下面的介绍，注意图中LiveGBS->基础配置->信令服务配置，在M7S的config.toml中对应关系为
```
[GB28181]
Serial = "34020000002000000001"  # SIP ID
Realm = "3402000000" # SIP 域
Expires = 3600 
ListenAddr = "192.168.1.120:5060" # SIP host和端口
```


1. [海康GB28181接入示例](https://www.liveqing.com/docs/manuals/LiveGBS.html#海康gb28181接入示例)
2. [NVR硬件GB28181接入示例](https://www.liveqing.com/docs/manuals/LiveGBS.html#nvr硬件gb28181接入示例)
3. [大华GB28181接入示例](https://www.liveqing.com/docs/manuals/LiveGBS.html#大华gb28181接入示例)
4. [宇视4G GB28181接入示例](https://www.liveqing.com/docs/manuals/LiveGBS.html#宇视4g-gb28181接入示例)
5. [华为IPC GB28181接入示例](https://www.liveqing.com/docs/manuals/LiveGBS.html#华为ipc-gb28181接入示例)