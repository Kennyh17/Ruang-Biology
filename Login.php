<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="Login.css">
</head>
<body>
    <div class="header">
        <img src="Asset/Ruang Biology.png" alt="">
    </div>
    <div class="content">
        <form id="form" action="" method="POST">
            <div>
                <label for="Username"><b>Username</b></label>
                <input id="Username" name="Username" type="text" required>
            </div>
            <div>
                <label for="password"><b>Password</b></label>
                <input id="password" name="password" type="password" required>
            </div>
            <div id="error"></div>
            <button type="Login">LOGIN</button>
            <a href="forgetpass.html">Forget Password</a>
        </form>

    </div>

    <?php
    $Username  = $Password = "";
    if ($_SERVER ["REQUEST_METHOD"] == "POST") {
        $host="localhost";
    $user="root";
    $pass="";
    $db="mydb";

    $Username=$_POST['Username'];
    // $Name=$_POST['Name'];
    // $Address=$_POST['Address'];
    // $Gender=$_POST['Gender'];
    // $Email=$_POST['Email'];
    // $Phone=$_POST['Phone'];
    // $DOB=$_POST['DOB'];
    $Password=$_POST['password'];


    $conn=new mysqli($host,$user,$pass,$db)or die("koneksi Gagal");

    if($conn -> connect_errno) {
        echo "error";
    }

    $query="SELECT 'Username' from `signup` where username ='".$Username."' and password ='".$Password."'";
    
    $result = $conn->query($query);

    if (($result->num_rows)== 1) {
        echo "Login berhasil";
        header("Location: Home.html");
    } else {
        echo "Login gagal";
    }

    $conn->close();
    }
    


    
?>
</body>
</html>