$(document).ready(function(){
  $('#num1').click(function(){
    const num = $('#input1').val();
    let result = s1(num);
    $('#ans1').text(result);
  });
  $('#num2').click(function(){
    const num = $('#input2').val();
    let result = s2(num);
    console.log(result);
    $('#ans2').text(result);
  });
  $('#num3').click(function(){
    const num = $('#input3').val();
    let result = s3(num);
    console.log(result);
    $('#ans3').text(result);
  });
  $('#num4').click(function(){
    const num = $('#input4').val();
    let result = s4(num);
    $('#ans4').text(result);
  });
  $('#num5').click(function(){
    const num = $('#input5').val();
    let result = s5(num);
    $('#ans5').text(result);
  });

})
