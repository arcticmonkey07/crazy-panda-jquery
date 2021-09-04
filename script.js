// Jquery ----------------------------------------------------

$(document).ready(function () {
  let bgColor = $('#bgColor');
  let textColor = $('#textColor');

  function changeColor() {
    let red = $('#rangeRed').val();
    let green = $('#rangeGreen').val();
    let blue = $('#rangeBlue').val();
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return color;
  }

  function changeBgColor() {
    bgColor.css("background-color", changeColor());
  }

  function changeTextColor() {
    textColor.css("color", changeColor());
  }

  $('#rangeRed').on('input', function () { changeColor(); });
  $('#rangeGreen').on('input', function () { changeColor(); });
  $('#rangeBlue').on('input', function () { changeColor(); });

  $('#bgColorBtn').click(function () { changeBgColor(); });
  $('#textColorBtn').click(function () { changeTextColor(); });
});


// JS --------------------------------------------------------

// let bgColor = document.getElementById('bgColor');
// let textColor = document.getElementById('textColor');

// function changeColor() {
//   let red = document.getElementById('rangeRed').value;
//   let green = document.getElementById('rangeGreen').value;
//   let blue = document.getElementById('rangeBlue').value;
//   let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
//   return color;
// }

// function changeBgColor() {
//   bgColor.style.backgroundColor = changeColor();
// }

// function changeTextColor() {
//   textColor.style.color = changeColor();
// }

// document.getElementById('rangeRed').addEventListener('input', changeColor);
// document.getElementById('rangeGreen').addEventListener('input', changeColor);
// document.getElementById('rangeBlue').addEventListener('input', changeColor);

// document.getElementById('bgColorBtn').addEventListener('click', changeBgColor);
// document.getElementById('textColorBtn').addEventListener('click', changeTextColor);



// ---- Для браузера Chrome. Закрашивает пройденный путь слайдера. -----------

$('.range-red').on('input', function () {
  $(this).css('background', 'linear-gradient(to right, #e72923 0%, #e72923 ' + this.value / 2.55 + '%, #fff ' + this.value / 2.55 + '%, white 100%)');
});

$('.range-green').on('input', function () {
  $(this).css('background', 'linear-gradient(to right, #8ae52f 0%, #8ae52f ' + this.value / 2.55 + '%, #fff ' + this.value / 2.55 + '%, white 100%)');
});

$('.range-blue').on('input', function () {
  $(this).css('background', 'linear-gradient(to right, #799acd 0%, #799acd ' + this.value / 2.55 + '%, #fff ' + this.value / 2.55 + '%, white 100%)');
});