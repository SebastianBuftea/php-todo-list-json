<?php 
$todo_list= file_get_contents('todo-list.json');

header('content-type: application/json');

echo $todo_list;

?>