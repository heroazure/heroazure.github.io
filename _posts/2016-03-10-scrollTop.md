---
layout: post
title: 获取浏览器滚动条距离顶端的距离
categories: [blog ]
tags: [scrollTop]
description: 获取浏览器滚动条距离顶端的距离收集
---

## 获取滚动条距离顶端的距离(兼容所有)

`function getScrollTop() {
        var scrollPos;
        if (window.pageYOffset) {
        scrollPos = window.pageYOffset; }
        else if (document.compatMode && document.compatMode != 'BackCompat')
        { scrollPos = document.documentElement.scrollTop; }
        else if (document.body) { scrollPos = document.body.scrollTop; }
        return scrollPos;
}`

## jQuery获取滚动条距离顶端的距离

`$(document).scrollTop()或者$(window).scrollTop()`
