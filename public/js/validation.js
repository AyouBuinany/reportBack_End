$(".user-switch-a").click(function(){
    $(".admin-switch-a").css("color","white").css("backgroundColor","#1B81C2");
    $(".admin.switch-u").css("color","gray").css("backgroundColor","#f3f4f5");
    $(".admin-login").css("display","block");
    $(".user-login").css("display","none");
});

$(".admin-switch-u").click(function(){
    $(".user-switch-u").css("color","white").css("backgroundColor","#1B81C2");
    $(".user.switch-a").css("color","gray").css("backgroundColor","#f3f4f5");
    $(".admin-login").css("display","none");
    $(".user-login").css("display","block");

});

// ==========================================================================================================

$("#forget-pass").click(function(){
    $(".login").css("display","none");
    $(".forget-container").css("display","block");

});
$("#sign-up").click(function(){
    $(".login").css("display","none");
    $(".inscription-container").css("display","block");
});
$("#firstNext").click(function(){
    $(".part1").css("display","none");
    $(".part2").css("display","block");
});
$("#secondNext").click(function(){
    $(".part2").css("display","none");
    $(".part3").css("display","block");
});
$(".forget-btn").click(function(){
    $(".notification").css("display","block");
    $(".forget").css("display","none");
});
$("#not-received-email").click(function(){
    $(".notification").css("display","none");
    $(".forget").css("display","block");
});

// ======================================= login validation =========================
// var userNameError = true,
//     passwordError = true;
$(".nom-utilisateur-u").click(function(){
    if($("#userName").val().length === 0){
        $("#userNameL").css('color','#97d4f3');
        $("#userName").css('borderBottom','2px solid #97d4f3');
        $("#userName").focus();
    } 
});
$("#userName").blur(function(){
    if($(this).val().length < 4 ){
        $("#userNameL").css('color','red');
        $(this).css('border','none');
        $(this).css('borderBottom','2px solid red');
        $('.test').css('display', 'block');
        // userNameError = true;
    }else{
        $("#userNameL").css('color','#47a3d1');
        $(this).css('border','none');
        $(this).css('borderBottom','2px solid #47a3d1');
        $('.test').css('display', 'none');
        // userNameError = false;
    }
});

$(".Mot-de-pass-u").click(function(){
    if($("#userPass").val().length === 0){
        $("#passwordL").css('color','#97d4f3');
        $("#userPass").css('borderBottom','2px solid #97d4f3');
        $("#userPass").focus();
    }
});
$("#userPass").blur(function(){
    if($("#userPass").val().length < 9){
        $("#passwordL").css('color','#f17575');
        $(this).css('border','none');
        $(this).css('borderBottom','2px solid #f17575');
        $('.testP').css('display', 'block');
        // passwordError = true;

    }else{
        $("#passwordL").css('color','#47a3d1');
        $(this).css('border','none');
        $(this).css('borderBottom','2px solid #47a3d1');
        $('.testP').css('display', 'none');
        // passwordError = false;
    }
});


$(".forget-field").click(function(){
    if($("#userName").val().length === 0){
        $("#forgetL").css('color','#97d4f3');
        $("#forgetP").css('borderBottom','2px solid #97d4f3');
        $("#forgetP").focus();
    } 
});
$("#forgetP").blur(function(){
    if($(this).val().length < 4 ){
        $("#forgetL").css('color','red');
        $(this).css('border','none');
        $(this).css('borderBottom','2px solid red');
        // $('.test').css('display', 'block');
        // userNameError = true;
    }else{
        $("#forgetL").css('color','#47a3d1');
        $(this).css('border','none');
        $(this).css('borderBottom','2px solid #47a3d1');
        // $('.test').css('display', 'none');
        // userNameError = false;
    }
});
// $("#userName, #loginPass").blur(function(){
//     if(userNameError === true || passwordError === true){
//         $("#connectinBtn").css('backgroundColor','#f3f4f5');
//         $("#connectinBtn").css('color','gray');
    
//     }else{
//         $("#connectinBtn").css('backgroundColor','green');
//     }
    
// })

// =============================================== sign Up validation ====================