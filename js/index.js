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
  $('#num6').click(function(){
    const num = $('#input6').val();
    let result = s6(num);
    $('#ans6').text(result);
  });
  $('#num7').click(function(){
    const num = $('#input7').val();
    let result = s7(num);
    $('#ans7').text(result);
  });
  $('#num8').click(function(){
    const num = $('#input8').val();
    let result = s8(num);
    $('#ans8').text(result);
  });
  $('#num9').click(function(){
    const num = $('#input9').val();
    let result = s9(num);
    $('#ans9').text(result);
  });
  $('#num10').click(function(){
    const num = $('#input10').val();
    let result = s10(num);
    $('#ans10').text(result);
  });
  $('#num11').click(function(){
    let result = s11(num);
    $('#ans11').text(result);
  });


})
