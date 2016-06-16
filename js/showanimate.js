function showNumberWidthAnimate(i,j,randNumber){
    var numberCell=$("#number-cell-"+i+"-"+j);
    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);
    numberCell.animate({
        width:'100px',
        height:'100px',
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },200);
}

// 移动
function showMoveAnimation(formx,formy,tox,toy){
    var numberCell=$('#number-cell'+'-'+formx+'-'+formy);
    numberCell.attr('id')
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);
}
