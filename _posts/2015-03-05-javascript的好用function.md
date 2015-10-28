---
layout: post
category : 前端筆記
tagline:
tags : [javascript]
---
{% include JB/setup %}

##<font color="green">map</font>

對目標array做整理用的


<div class="code_type">JS</div>

~~~js

var avg_arr = d_arr;

avg_arr = avg_arr.map(function(num){

				return num/4;

			});

console.log('平均',avg_arr)


~~~

>宣告陣列後,將變數一個一個塞進去

##<font color="green">陣列中的max值</font>


<div class="code_type">JS</div>

~~~js


var max_one = Math.max.apply(Math,array);   // 8


~~~

>直接找最大的值

##<font color="green">宣告陣列</font>


<div class="code_type">JS</div>

~~~js

var i = array.indexOf(Math.max.apply(Math,max_one));  // 3

~~~

>找最大值所在的index，而最大值week4的index是 3

