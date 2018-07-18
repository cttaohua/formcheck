# checkform
一个表单验证的js插件，不依赖任何框架

# 安装
```
npm 的方式
npm install v-dplayer --save
或
cnpm insatll v-dplayer --save

支持CDN引入
<script src="https://github.com/cttaohua/checkform.git"></script>

```

# 使用
- 在main.js中添加
```JavaScript
import VDplayer from 'v-dplayer'
```
- 在html中使用
```html
<form id="myForm">
	<input type="text" ck ck-type="empty" ck-alert="请输入地址"></br>
	<input type="number" ck ck-type="phone"></br>
	<input type="text" ck ck-type="email"></br>
	<input type="text" ck ck-match="/^[0-9]+.?[0-9]*$/" ck-alert="请输入正确的数字"></br>
	<input id="submit" type="button" value="提交">
</form>

```
- 在js中使用
1、在需要验证的input上加ck
2、需要定义判断的类型，如ck-type="phone"，就按手机号处理，未定义则按必填字段处理
3、可以自定义提示语句，ck-alert="[自定义]"，未定义checkform会有默认的提示,见下方
4、也可以直接传入一个正则匹配，ck-match="/^[0-9]+.?[0-9]*$/"
```Javascript
var submit = document.getElementById('submit');
			
submit.addEventListener('click',function(){
	var res = checkForm({
		el: 'myForm'
	})
	if(!res.result) {
		alert(res.info);
	}else {
		//todo
	}
})
```

调用checkForm会返回一个对象，其中包括两个属性
1、result  result为true表示表单验证通过，为false表示有的项验证不通过
2、info    info返回的是需要提示的信息checkform会有一些默认提示

示例：{result: false, info: "请输入正确的手机号"}

- 目前支持的类型
```
{
    phone: 'phone',    //电话号
    number: 'number',  //数字
    empty: 'empty',    //必填
    email: 'email'     //邮箱
}
```
- checkForm默认设定的提示语
```
{
    phone: '请输入正确的手机号',
    number: '请输入有效的数字',
    empty: '此字段不能为空',
    email: '请输入正确的邮箱'
}
```

