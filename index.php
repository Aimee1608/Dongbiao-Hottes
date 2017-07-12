<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<script>
		var _hmt = _hmt || [];
		(function() {
		  var hm = document.createElement("script");
		  hm.src = "https://hm.baidu.com/hm.js?337b087e1b256259bb7e0909797f3d6a";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(hm, s);
		})();
	</script>
</head>
<body>
</body>
</html>
<?php  
require("aes/outaes.php"); //加密方法文件 
$key = "o0o0o0o0o7ujm*IK<9o.00ew00O0O";//加密秘钥需要与后台一致
$aes = new Aes($key);
$ip = $_SERVER["REMOTE_ADDR"];  //获取当前ip
 
$time = substr(time(),-5); //获取当前时间戳

$name1 = "son"; // key
$name2 = "qin";	//key

$num = rand(0,9999);
$arr = array('ip'=>$ip,'tm'=>$time,'no'=>$name1,'tw'=>$name2,'nm'=>$num);
shuffle($arr); //打乱数组顺序
$arrstr = implode("-",$arr); 
$str = $aes->encrypt($arrstr);//加密
echo '<input type="hidden" name="key" value="'.$str.'" />';
include("./index01.html");
?>