$(document).ready(() => {
    /******************/
    /*** START CHAT ***/
    /******************/

    // set visitor name
    let $userName = "User";
    let sender =
        $userName + "_" + (Math.random() + 1).toString(36).substring(7);
    let url = window.location.origin + "/call-rasa-api";

    // start chatbox
    $("#form-start").on("submit", (event) => {
        event.preventDefault();
        $("#landing").slideUp(300);
        setTimeout(() => {
            // callApiRasa($url, $sender, $message)
            $("#start-chat").html("Continue chat");
        }, 300);
    });

    /*****************/
    /*** USER CHAT ***/
    /*****************/

    // Post a message to the board
    function $postMessage() {
        $("#message").find("br").remove();
        let $message = $("#message").html().trim(); // get text from text box
        $message = $message
            .replace(/<div>/, "<br>")
            .replace(/<div>/g, "")
            .replace(/<\/div>/g, "<br>")
            .replace(/<br>/g, " ")
            .trim();
        if ($message) {
            // if text is not empty
            const html = `<div class="post post-user">${
                $message + timeStamp()
            }</span></div>`; // convert post to html
            $("#message-board").append(html); // add post to board
            $scrollDown(); // stay at bottom of chat
            botReply($message);
        }
        $("#message").empty();
    }

    // Chat input
    $("#message")
        .on("keyup", (event) => {
            if (event.which === 13) $postMessage(); // Use enter to send
        })
        .on("focus", () => {
            $("#message").addClass("focus");
        })
        .on("blur", () => {
            $("#message").removeClass("focus");
        });
    $("#send").on("click", $postMessage);

    /**********************/
    /*** AUTO REPLY BOT ***/
    /**********************/

    function botReply(userMessage) {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            data: {
                sender: sender,
                message: userMessage,
            },
            success: function (result) {
                console.log(result);
                if (result[0]["text"]) {
                    let reply = result[0]["text"];
                    if (result[1]) {
                        let calender = `<input id="daterangepicker1" type="hidden">
                        <div id="daterangepicker1-container" class="embedded-daterangepicker"></div>`;
                        reply = [calender, result[0]["text"]];
                    }
                    if (typeof reply === "string") {
                        postBotReply(reply);
                    } else {
                        reply.forEach((str) => postBotReply(str));
                        activateCalender()
                    }
                }
            },
            error: function (error) {
                console.log(error);
            },
        });
    }

    function generateReply(userMessage) {
        let message = userMessage;
        let reply = "cham hoi";
        // const message = userMessage.toLowerCase();
        // let reply = [`Sorry, I don't understand you.`, `Please try again`];

        // // Generate some different replies
        // if (/^hi$|^hell?o|^howdy|^hoi|^hey|^ola/.test(message)) reply = [`Hi ${$userName}`, `What can I do for you?`];
        // else if (/test/.test(message)) reply = [`Ok`, `Feel free to test as much as you want`];
        // else if (/help|sos|emergency|support/.test(message)) reply = [`I am here to help.`, `What seems to be the problem?`];
        // else if (/class\=\"fa/.test(message)) reply = [`I see you've found the smileys`, `Cool! <span class="far fa-grin-beam fa-2x"></span>`, `Did you need something?`];
        // else if (/how|what|why/.test(message)) reply = userMessage + " what?";
        // else if (/^huh+|boring|lame|wtf|pff/.test(message)) reply = [`<span class="far fa-dizzy fa-2x"></span>`, `I'm sorry you feel that way`, `How can I make it better?`];
        // else if (/bye|ciao|adieu|salu/.test(message)) reply = [`Ok, bye :)`];

        // return reply;
    }

    function postBotReply(reply) {
        const html = `<div class="post post-bot">${reply + timeStamp()}</div>`;
        const timeTyping = 500 + Math.floor(Math.random() * 2000);
        $("#message-board").append(html);
        $scrollDown();
    }

    /******************/
    /*** TIMESTAMPS ***/
    /******************/

    function timeStamp() {
        const timestamp = new Date();
        const hours = timestamp.getHours();
        let minutes = timestamp.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        const html = `<span class="timestamp">${hours}:${minutes}</span>`;
        return html;
    }

    /***************/
    /*** CHAT UI ***/
    /***************/

    // Back arrow button
    $("#back-button").on("click", () => {
        $("#landing").show();
    });

    // Menu - navigation
    $("#nav-icon").on("click", () => {
        $("#nav-container").show();
    });

    $("#nav-container").on("mouseleave", () => {
        $("#nav-container").hide();
    });

    $(".nav-link").on("click", () => {
        $("#nav-container").slideToggle(200);
    });

    // Clear history
    $("#clear-history").on("click", () => {
        $("#message-board").empty();
        $("#message").empty();
    });

    // Sign out
    $("#sign-out").on("click", () => {
        $("#message-board").empty();
        $("#message").empty();
        $("#landing").show();
        $("#username").val("");
        $("#start-chat").html("Start chat");
    });

    /*********************/
    /*** SCROLL TO END ***/
    /*********************/

    function $scrollDown() {
        const $container = $("#message-board");
        const $maxHeight = $container.height();
        const $scrollHeight = $container[0].scrollHeight;
        if ($scrollHeight > $maxHeight) $container.scrollTop($scrollHeight);
    }

    /***************/
    /*** EMOIJIS ***/
    /***************/

    // toggle emoijis
    $("#emoi").on("click", () => {
        $("#emoijis").slideToggle(300);
        $("#emoi").toggleClass("fa fa-grin far fa-chevron-down");
    });

    // add emoiji to message
    $(".smiley").on("click", (event) => {
        const $smiley = $(event.currentTarget)
            .clone()
            .contents()
            .addClass("fa-lg");
        $("#message").append($smiley);
        $("#message").select(); // ==> BUG: message field not selected after adding smiley !!
    });

    function activateCalender() {
        //date range picker
        var picker = $("#daterangepicker1").daterangepicker({
            parentEl: "#daterangepicker1-container",
            autoApply: true,
            linkedCalendars: false,
        });
        // range update listener
        picker.on("apply.daterangepicker", function (ev, picker) {
            $('#message').html(picker.startDate.format("DD/MM/YYYY")+' - '+picker.endDate.format("DD/MM/YYYY"))
        });
        // prevent hide after range selection
        picker.data("daterangepicker").hide = function () {};
        // show picker on load
        picker.data("daterangepicker").show();

        $(".drp-calendar.right").hide();
        $(".drp-calendar.left").addClass("single");

        $(".calendar.table").on("DOMSubtreeModified", function () {
            var el = $(".prev.available").parent().children().last();
            if (el.hasClass("next available")) {
                return;
            }
            el.addClass("next available");
            el.append("<span></span>");
        });
    }
});
