<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','');
		if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	$db_selected=mysql_select_db("from",$conn);
	mysql_query('SET NAMES UTF8');
	$query='select * from piclist';
	$result=mysql_query($query);
	 
	$arr=array();
	 for($i=0;$i<mysql_num_rows($result);$i++){
            $arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
        }
	echo json_encode($arr);
?>
