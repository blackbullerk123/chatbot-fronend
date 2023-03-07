<html>

<head>
  <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

  <title>jQuery ChatBot</title>
</head>

<body>
  
  <div id="phone-wrapper">
    <div id="app">
      <div id="landing" class="bg-dark text-light" style="">
        <span class="fas fa-robot fa-4x"></span>
        <div>
          <h1 class="mt-3">ChatBot</h1>
        </div>
        <form id="form-start">
          <!-- <input type="text" name="username" id="username" value="" placeholder="Your name" required> -->
          <button type="submit" id="start-chat">Start chat</button>
        </form>
      </div>
      <div id="header" class="bg-dark">
        <div><button id="back-button" class="text-light btn-transparent btn-icon fas fa-arrow-left"></button></div>
        <div class="text-light align-center">
          <h2>ChatBot</h2>
        </div>
        <div>
          <button id="nav-icon" class="text-light btn-transparent btn-icon fas fa-bars"></button>
          <nav id="nav-container" style="display: none;">
            <ul class="nav">
              <li id="search" class="nav-link"><span class="fas fa-search"></span>Search</li>
              <li id="clear-history" class="nav-link"><span class="fas fa-trash-alt"></span>Clear history</li>
              <li id="theme" class="nav-link"><span class="fas fa-cogs"></span>Settings</li>
              <hr>
              <li id="sign-out" class="nav-link"><span class="fas fa-sign-out-alt"></span>Sign out</li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="message-board">


      </div>
      <div id="form" class="bg-light">
        <div id="emoijis" style="display: none;">
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin-beam"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin-wink"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin-tongue"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin-tongue-wink"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-kiss-wink-heart"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin-hearts"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-surprise"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-angry"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-tired"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-sad-tear"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-grin-squint-tears"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-sad-cry"></span></button>
          <button class="smiley btn-transparent btn-icon"><span class="far fa-dizzy"></span></button>
        </div>
        <div><button id="emoi" class="btn-transparent btn-icon far fa-grin"></button></div>
        <div id="message" placeholder="Type your message here" rows="1" contenteditable></div>
        <div><button id="send" type="" class="btn-transparent btn-icon fas fa-paper-plane"></button></div>
      </div>
    </div>
  </div>

</body>

</html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script src="{{asset('js/chatbot.js')}}"></script>