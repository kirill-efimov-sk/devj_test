//процедура обработки
import { listener } from './listener.js'

(function () {
  //вызов события с клавиатуры
  jQuery(function($) { //jQuery по требованию из ТЗ
    $("body").on("keydown", function (e) {
      var valCode = e.keyCode;
      var valKey = e.key;
  
      valCode>=37 && valCode<=40 ? listener(valKey) : alert('Попробуйте нажать вниз, вверх, влево, вправо')
    });
  });
  
  //ИЛИ опционально без jQuery
  
  //document.addEventListener('keydown', function attach(e) {
    //тело функции (строки 8-14)
    //detach для освобождения памяти
    //document.removeEventListener('click', attach, false);
  //})

})()