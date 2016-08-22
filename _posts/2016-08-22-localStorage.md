---
layout: post
title: localStorage也可以限时保存登录信息
categories: [blog ]
tags: [localStorage]
description: localStorage也可以限时保存登录信息
---

localStorage也可以限时保存登录信息

localStorage用于持久化的存储；但是我想限时保存用户的登录信息，除了cookie和session，localStorage应该也可以做到；cookie字符长度有限制，不够6；session在后端保存；现在我要在前端保存用户信息，而不用每次后台判断或前端请求去判断；因为如果页面由前端输出，那么每次都得请求一次用户是否登录；

### 代码不多，大家都懂：

```
module.exports = {
        age: 0,
        maxAge: function (age) {
            this.age = age;
            return this;
        },
        set: function (name, json) {
            localStorage.removeItem(name);
            json.__time = new Date().getTime();
            json.__age = this.age;
            localStorage.setItem(name, JSON.stringify(json));
            return this;
        },
        getInfo: function (name) {
            var info = localStorage.getItem(name);
            return info ? JSON.parse(info) : null;
        },
        isExpired: function (name) {
            var logined = localStorage.getItem(name),
                    _time = 0,
                    iTime = new Date().getTime(),
                    timeLength = 0;
            if (logined) {
                logined = JSON.parse(logined);
                _time = logined.__time;
                timeLength = iTime - _time;
                return timeLength >= logined.__age;
            } else {
                return true;
            }
        },
        isLogined: function (name, fn) {
            var user = '', age = this.age;
            if (!this.isExpired(name)) {
                user = JSON.parse(localStorage.getItem(name));
            } else {
                localStorage.removeItem(name);
            }
            if (user) {
                fn && fn(user);
            } else {
                fn && fn();
            }
        }
    };
```

### 使用：

```
var store=require('./modules/store');
```

### 前端在用户登录成功后保存基本信息：

```
store.maxAge(1000*60*60*24).set('userinfo',{
     name:'hf',
     age:'18'
});
```

### 以JSON格式保存用户的信息name和age，字段名userinfo，保存时长为一天；

### 下次用户访问判断用户信息是否过期：

```
store.isExpired('userinfo');
//返回true|false
```

### 或者直接判断限定时间内是否登录了：

```
store.isLogined('userinfo',function(info){
         if (info) {
             console.log(info)
         }else {
             console.log(false)
         }
     });
//若在限定时间内登录了，回调用户信息；若没有登录，回调里做其他操作
```

### 获取登录信息，返回用户信息或null；也可以判断是否登录；

```
store.getInfo('userinfo');
//返回info或null
```

* 转载自[http://www.famanoder.com/bokes/5752d52880e446c026079231](http://www.famanoder.com/bokes/5752d52880e446c026079231)
