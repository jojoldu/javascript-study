/**
 * Created by jojoldu on 15. 7. 5.
 */
$(function(){

    $('#btnLogin').click(show);

    $('#btnLogin').click(showEmail);
});

function show(){
    alert('안녕하세요');
}

function showEmail(){
    var email = $('#inputEmail').val();
    alert(email);
}