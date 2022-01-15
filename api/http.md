# 接口文档
## Summary
- '/api/summary 获取采样数据，这个接口返回一个SSE，里面包含cpu/memory/harddisk/流信息。其类型为 text/event-stream ，从服务器推送到业务端。

```json
data: {
    "Address": "",
    "Memory": {
        "Total": 15926,
        "Free": 11361,
        "Used": 4140,
        "Usage": 26.000358578273936
    },
    "CPUUsage": 12.531645569650099,
    "HardDisk": {
        "Total": 204,
        "Free": 37,
        "Used": 156,
        "Usage": 80.75679390301173
    },
    "NetWork": [

        {
            "Name": "enp6s0",
            "Receive": 267469295183,
            "Sent": 23109565572,
            "ReceiveSpeed": 1160631,
            "SentSpeed": 23229
        }
    ],
    "Streams": [
        {
            "URL": "rtsp://192.168.21.186/id=1",
            "StreamPath": "live/170",
            "Type": "RTSP Pull",
            "StartTime": "2022-01-14T18:42:38.726829057+08:00",
            "Subscribers": [],
            "VideoTracks": {
                "h264": {
                    "CodecID": 7,
                    "PacketCount": 492128,
                    "BPS": 113724,
                    "SPSInfo": {
                        "ProfileIdc": 66,
                        "LevelIdc": 30,
                        "MbWidth": 44,
                        "MbHeight": 30,
                        "CropLeft": 0,
                        "CropRight": 0,
                        "CropTop": 0,
                        "CropBottom": 0,
                        "Width": 704,
                        "Height": 480
                    },
                    "GOP": 75,
                    "UsingDonlField": false
                }
            },
            "AudioTracks": {
                "pcma": {
                    "CodecID": 7,
                    "PacketCount": 656659,
                    "BPS": 8000,
                    "SoundRate": 8000,
                    "SoundSize": 16,
                    "Channels": 1
                }
            },
            "DataTracks": {},
            "AutoCloseAfter": -1,
            "Transcoding": null,
            "ExtraProp": {
                "Transport": 2
            }
        },
        {
            "URL": "",
            "StreamPath": "34020000002000010023/34020000001320010023",
            "Type": "GB28181 Live",
            "StartTime": "2022-01-14T18:42:49.106291879+08:00",
            "Subscribers": null,
            "VideoTracks": {
                "h264": {
                    "CodecID": 7,
                    "PacketCount": 493508,
                    "BPS": 155510,
                    "SPSInfo": {
                        "ProfileIdc": 77,
                        "LevelIdc": 31,
                        "MbWidth": 80,
                        "MbHeight": 45,
                        "CropLeft": 0,
                        "CropRight": 0,
                        "CropTop": 0,
                        "CropBottom": 0,
                        "Width": 1280,
                        "Height": 720
                    },
                    "GOP": 50,
                    "UsingDonlField": false
                }
            },
            "AudioTracks": {},
            "DataTracks": {},
            "AutoCloseAfter": -1,
            "Transcoding": null,
            "ExtraProp": null
        }
    ],
    "Children": null
}

```
## Gateway

- `/api/gateway/sysInfo` 系统信息，包含版本号（Version）和启动时间（StartTime）两个字段

- `/api/gateway/plugins` 所有插件信息，是一个数组里面包含插件的名称（Name）、版本（Version）、README（ReadMe）、配置（Config）、热更新配置（HotConfig）
- - return
```json
[
    {
        "Name": "WebRTC",
        "Config": "PortMin = 0\nPortMax = 0\nPLI = 2000\n",
        "ReadMe": "...",
        "Version": "v3.0.1",
        "HotConfig": null
    },
    {
        "Name": "TS",
        "Config": "BufferLength = 2048\nPath = \"resource\"\n",
        "ReadMe": " ...",
        "Version": "v3.0.0",
        "HotConfig": null
    },
    {
        "Name": "HLS",
        "Config": "Fragment = 10\nWindow = 2\nEnableWrite = false\nEnableMemory = false\nFilter = \"\"\nPath = \"resource\"\n",
        "ReadMe": "...",
        "Version": "",
        "HotConfig": null
    },
   
    {
        "Name": "RTSP",
        "Config": "ListenAddr = \":554\"\nUDPAddr = \":8000\"\nRTCPAddr = \":8001\"\nTimeout = 0\nReconnect = true\nReadBufferSize = 2048\n\n[AutoPullList]\n  \"live/1\" = \"rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4\"\n",
        "ReadMe": "...",
        "Version": "",
        "HotConfig": null
    },
    {
        "Name": "GateWay",
        "Config": "ListenAddr = \":8080\"\nCertFile = \"server.pem\"\nKeyFile = \"server.key\"\nListenAddrTLS = \":8082\"\nStaticPath = \"ui\"\n",
        "ReadMe": "# 网关插件...",
        "Version": "",
        "HotConfig": null
    },
    {
        "Name": "GB28181",
        "Config": "Serial = \"34020000002000000001\"\nRealm = \"3402000000\"\nListenAddr = \"192.168.1.120:5060\"\nExpires = 3600\nMediaPort = 58200\nAutoInvite = true\nAutoCloseAfter = -1\nTCP = false\nTCPMediaPortNum = 1\nRemoveBanInterval = 600\nPreFetchRecord = false\nUsername = \"\"\nPassword = \"\"\nUdpCacheSize = 0\n",
        "ReadMe": "# GB28181插件",
        "Version": "",
        "HotConfig": null
    },
    {
        "Name": "HDL",
        "Config": "ListenAddr = \"\"\nListenAddrTLS = \"\"\nCertFile = \"\"\nKeyFile = \"\"\nReconnect = false\n\n[AutoPullList]\n",
        "ReadMe": "#...",
        "Version": "",
        "HotConfig": null
    },
    {
        "Name": "Record",
        "Config": "Path = \"resource\"\nAutoRecord = false\n",
        "ReadMe": "# record插件...",
        "Version": "v3.0.0-20210813073316-79dce1e0dc70",
        "HotConfig": [
            "AutoRecord"
        ]
    },
    {
        "Name": "RTMP",
        "Config": "ListenAddr = \":1935\"\nChunkSize = 512\n",
        "ReadMe": "# RTMP插件...",
        "Version": "v3.0.0",
        "HotConfig": null
    }
]
```
- `/api/gateway/config` 返回原始配置文件

- `/api/gateway/stop?stream=xxx` 终止某一个流，入参是流标识（stream）
- - stream StreamPath:见/api/summary返回的流中的StreamPath
- - return 成功返回success
- `/api/gateway/h264?stream=xxx&len=10` 获取一段h264的流用于调试，入参数len代表需要获取的时长单位是秒
- - stream StreamPath
- - return 二进制流数据
- `/api/gateway/getIFrame?stream=xxx` 获取一个I帧数据，包含了SPS和PPS信息
- - stream StreamPath
- - return 二进制IFrame数据
- `/api/gateway/modifyConfig?name=xxx&key=xxx&value=xxx` 修改可以热更新的配置,name是插件名（插件注册时设置）

## RTSP协议

- `/api/rtsp/pull?target=[RTSP地址]&streamPath=[流标识]&save=[1]` 从远程拉取rtsp流
- - target 需要拉流的rtsp地址
- - streamPath 见/api/summary返回的流中的StreamPath
- - save 当save=1是会保存拉流设置
- `/api/rtsp/list` 罗列所有的rtsp协议的流, 该请求是一个SSE（server-sent Event）
- - return 
```json
data: [
    {
        "URL": "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
        "StreamPath": "live/1",
        "Type": "RTSP Pull",
        "StartTime": "2022-01-15T17:55:20.941586+08:00",
        "Subscribers": null,
        "VideoTracks": {
            "h264": {
                "CodecID": 7,
                "PacketCount": 326,
                "BPS": 14545,
                "SPSInfo": {
                    "ProfileIdc": 100,
                    "LevelIdc": 12,
                    "MbWidth": 15,
                    "MbHeight": 10,
                    "CropLeft": 0,
                    "CropRight": 0,
                    "CropTop": 0,
                    "CropBottom": 0,
                    "Width": 240,
                    "Height": 160
                },
                "GOP": 24,
                "UsingDonlField": false
            }
        },
        "AudioTracks": {
            "aac": {
                "CodecID": 10,
                "PacketCount": 158,
                "BPS": 4460,
                "SoundRate": 12000,
                "SoundSize": 16,
                "Channels": 2
            }
        },
        "DataTracks": {},
        "AutoCloseAfter": -1,
        "Transcoding": null,
        "ExtraProp": {
            "Transport": 2
        }
    }
]
```


## 日志相关

- `/api/logrotate/tail` 监听日志输出，该请求是一个SSE（server-sent Event）
- `/api/logrotate/find` 查找日志，目前只支持linux系统（使用grep）
- `/api/logrotate/list` 列出所有日志文件
- `/api/logrotate/open?file=xxx` 查看日志内容，入参是文件名
- `/api/logrotate/download?file=xxx` 下载某个日志，入参是文件名


## WebRTC

- `/api/webrtc/play?streamPath=live/rtc`
用于播放live/rtc的流，需要在请求的body中放入sdp的json数据，这个接口会返回服务端的sdp数据
- `/api/webrtc/publish?streamPath=live/rtc`
同上

## HDL
- `/hdl/pull/pull?target=[HTTP-FLV地址]&streamPath=[流标识]&save=[是否保存配置（留空则不保存）]`
- - target 需要拉流的http-flv地址
- - streamPath 见/api/summary返回的流中的StreamPath
- - save 当save=1是会保存拉流设置

## 录制相关

- `/api/record/flv/list` 罗列所有录制的flv文件
- - return
```json
[
    {
        "Path": "live/1.flv",
        "Size": 547636,   ///
        "Duration": 57217 ///
    }
]
```
- `/api/record/flv?streamPath=live/rtc` 开始录制live/rtc流
- - streamPath 对应的streamPath地址
- `/api/record/flv/stop?streamPath=live/rtc` 停止录制live/rtc流
- - streamPath 对应的streamPath地址
- `/api/record/flv/play?streamPath=live/rtc` 将流live/rtc文件读取并发布成一个直播流
- - streamPath 对应的streamPath地址
- `/api/record/flv/delete?streamPath=live/rtc` 删除文件live/rtc.flv
- - streamPath 对应的streamPath地址
- `/vod/[streamPath]` 将会读取对应的flv文件
- - streamPath 对应的streamPath地址


