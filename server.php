<?php 
// prendo il contenuto del file json sottoforma di stringa
$todo_list= file_get_contents('todo-list.json');

//trasformo da formato json ad array associativo
$todo_list= json_decode($todo_list, true);

if(isset($_POST['todoItem'])){
    $todoItem=$_POST['todoItem'];
    array_push($todo_list, $todoItem);

    file_put_contents('todo-list.json', json_encode($todo_list));
}

if(isset($_POST['todoDeleted'])){
    $todoDeleted=$_POST['todoDeleted'];
    array_splice($todo_list, $todoDeleted, 1);

    file_put_contents('todo-list.json', json_encode($todo_list));
}

//passo un dato json al header di risposta
header('content-type: application/json');


//invio in formato json l'informazione
echo json_encode($todo_list);

?>