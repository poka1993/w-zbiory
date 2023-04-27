<!DOCTYPE html>
<html>
<head>
    <title>{{ $mailData['title'] }}</title>
</head>
<body>
    <p3><b>Adresat:</b> {{ $mailData['email'] }}</p3>
    <br /><hr />
    <p>{{ $mailData['body'] }}</p>
</body>
</html>