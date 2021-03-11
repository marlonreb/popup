
$('#popup_section').click(function(){
    $('#popup_section').removeClass('ativo_popup'); 
    $('.popup_shadow').removeClass('ativo_popup'); 
})
$('.popup_shadow').click(function(){
    $('.popup_shadow').removeClass('ativo_popup'); 
    $('#popup_section').removeClass('ativo_popup'); 
 })
