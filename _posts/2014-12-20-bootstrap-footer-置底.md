---
layout: post
category : lessons
tagline:
tags : [bootstrap]
---
{% include JB/setup %}

#問題

在twitter bootstrap 裡footer預設是黏著body

跟著又高又低的很有事

所以突發奇想來stick my fucking footer 啦！！！

<br/><br/><br/>


#解決
###HTML

footer部分

~~~html
<footer>      
    <div class="container">
      <p>要輸入的內容</p>      
    </div>
</footer>

~~~

>加container是為了讓footer裏的內容可以置中

<br/>

###CSS

~~~css
html {
  
  position: relative;
  min-height: 100%;
  
}
body {
  
  margin-bottom: 60px;
  
}
footer {
  
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #f5f5f5;
  text-align: center;
  
}
~~~


>1. body 的屬性是optional的
>
>2. footer裡要text-align裡面的字才會置中
