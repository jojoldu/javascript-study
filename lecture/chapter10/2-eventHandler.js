/**
 * Created by user on 2015-07-04.
 */

function init(){
  function show(){
    alert('click');
  }

  document.getElementsByClassName('buttons1').onclick = show;

  document.getElementById('btnCopy1').onclick = function(){
    document.getElementById('div3').innerHTML='<button class="buttons1">btn1</button>';
  };


  document.getElementsByClassName('buttons2').onclick = show;
    ;
  document.getElementById('btnCopy2').addEventListener("click", function(){
    document.getElementById('div4').innerHTML='<button class="buttons2">btn2</button>';},
    false);

};