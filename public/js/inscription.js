// var userName = document.getElementById('userName'),
//     loginPass = document.getElementById('loginPass'),
//     cin = document.getElementById('cin'),
//     firstName = document.getElementById('firstName'),
//     lastName = document.getElementById('lastName'),
//     birthday = document.getElementById('birthday'),
//     email = documen.getElementById('email'),
//     confEmail = document.getElementById('confEmail'),
//     registrationPass = document.getElementById('registrationPass'),
//     confPassword = document.getElementById('confPassword'),
//     phonNum = document.getElementById('phonNum');
//     cinL = document.getElementById('cinL');
//     userNameL = document.getElementById('userNameL');
//     inputs = document.getElementsByTagNameNS('input');
//     // [userName, loginPass, cin, firstName, lastName, birthday, email, confEmail,
//     //             registrationPass,confPassword, phonNum];
//     inputs.addEventListenner(onclick , function(){
//         inputs[i].style.borderBottomColor = "#47a3d1";
//     });
// function myfocus(){
//     userName.focus();
//     userName.style.borderBottomColor = "#47a3d1";
//     userNameL.style.color = "#47a3d1";
// }
// function myblur(){
//     userName.style.borderBottomColor = "gray";
//     userNameL.style.color = "gray";
// }
// function forgetPass(){
//     document.getElementsByClassName('login').style.display = "none";
// }
// function signUp(){
    
// }


$("#firstNext").click(function(){
    $(".part1").css("display","none");
    $(".part2").css("display","block");
});
$("#secondNext").click(function(){
    $(".part2").css("display","none");
    $(".part3").css("display","block");
});
$("#forget-btn").click(function(){
    $(".notification").css("display","block");
    $(".forget").css("display","none");
});
$("#not-received-email").click(function(){
    $(".notification").css("display","none");
    $(".forget").css("display","block");
});