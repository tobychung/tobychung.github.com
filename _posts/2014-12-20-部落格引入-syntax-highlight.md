---
layout: post
category : lessons
tagline:
tags : [syntax, highlight]
---
{% include JB/setup %}

#問題

剛剛要貼程式碼上來的時候發現code沒有highligt

感覺low掉，來匯入一下syntax highligt吧！

<br/><br/>

#解決

* 到根目錄下找到 <mark>_config.yml</mark>
* 加入下面兩條(隨便加一個地方都行！)

~~~
markdown: redcarpet
highlighter: pygments
~~~

* 下載[syntax.css](https://www.dropbox.com/s/kp95plowl7fsfs4/syntax.css?dl=0)
* 放到  <mark>專案 ▸ assets ▸ theme ▸ 你的theme ▸ css</mark>  底下
* 到 <mark>專案 ▸ _includes ▸ themes ▸ 你的theme ▸ default.html</mark>
* 加入下面這條引入它（在yml裡是ASSET_PATH : false喔！）

~~~
<link href="{{ ASSET_PATH }}/css/syntax.css" rel="stylesheet">
~~~
<br/><br/>
#試用
應該效果出來囉～～撒花～～

~~~
～～～html
<div class="hello">
print("hello, world")
</div>
～～～
~~~
<br/><br/>
#可是
我貼程式碼的時候才發現有點醜醜der，改一下顏色吧！

我改的是sublime text的預設顏色

用滴管上網吸半天＝＝


* 到syntax.css裡改css

~~~
.highlight .s { color: #E6D255; }
.highlight .m { color: #BA94F2; }
.highlight .nt { color: #E93979; }
.highlight .na { color: #99C607; }
~~~
>我只改這幾條，之後有遇到新的想改再改！

<br/><br/>
#可是 again
突然發現table壞掉了

感覺就像抓漏，這邊補好那邊又漏水。。。

修好它吧！！！

* 到_config.yml裡加上

~~~
redcarpet:
  extensions: ["no_intra_emphasis", "fenced_code_blocks", "autolink", "tables", "with_toc_data"]
~~~
>有點像ignore掉它的感覺

<br/><br/>
##耶～大功告成！！！

~~~
<div class="container">
	<div class="row">
			<p>阿不就好棒棒！</a>
	</div>
</div>
~~~






