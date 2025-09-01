[index (2).html](https://github.com/user-attachments/files/22078230/index.2.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GBG Website</title>
  <style>
    body {
      background: linear-gradient(135deg, #000000, #1a1a1a, #333333);
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .gbg {
      font-size: 80px;
      font-weight: bold;
      letter-spacing: 10px;
      background: linear-gradient(45deg, #ff0000, #ff9900, #00ffcc, #0066ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 2s infinite alternate;
      margin-top: 100px;
    }
    @keyframes glow {
      from { text-shadow: 0 0 10px #ff0000; }
      to { text-shadow: 0 0 30px #00ffff, 0 0 40px #ff00ff; }
    }
    .welcome {
      font-size: 28px;
      margin-top: 20px;
      color: #ffcc00;
      text-shadow: 0 0 10px #ffcc00;
    }
  </style>
</head>
<body>
  <div class="gbg">GBG</div>
  <div class="welcome">Welcome My Website</div>
</body>
</html>
