
// 为当前页面引入 css 样式 -> https://cloud.tencent.com/developer/article/2165502
add_css_style();

// 为当前页面引入 button 样式
add_button_style();

var color = choose_yellow_color();

// 捕捉鼠标位置，获取元素位置 -> https://cloud.tencent.com/developer/article/1729252
// 捕捉光标位置 -> https://blog.csdn.net/mafan121/article/details/78519348
document.addEventListener('click', opr_text(color));


function opr_text(color){
    if (color == null){
        // 设置颜色
        color = 'single-file-highlight-yellow';
    }

    //获取当前光标位置
    const getCursortPosition = function (element) {
        var caretOffset = 0;
        var caretEndset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != "undefined") {//谷歌、火狐
            sel = win.getSelection();
            if (sel.rangeCount > 0) {//选中的区域
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();//克隆一个选中区域
                preCaretRange.selectNodeContents(element);//设置选中区域的节点内容为当前节点
                preCaretRange.setEnd(range.endContainer, range.endOffset);  //重置选中区域的结束位置
                caretOffset = preCaretRange.toString().length;
            }
        } else if ((sel = doc.selection) && sel.type != "Control") {//IE
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset, createImageBitmap;
    }

    //输入框获取光标
    const getPosition = function (element) {
        let cursorPos = 0;
        if (document.selection) {//IE
            var selectRange = document.selection.createRange();
            selectRange.moveStart('character', -element.value.length);
            cursorPos = selectRange.text.length;
        } else if (element.selectionStart || element.selectionStart == '0') {
            cursorPos = element.selectionStart;
        }
        return cursorPos;
    }

    var position = getCursortPosition == 0 ? getPosition : getCursortPosition;


}



function add_css_style(){
    var style = document.createElement('style');
    style.innerHTML = '.single-file-highlight-yellow, .single-file-highlight-yellow-mode ::selection { background-color: #ffff7c !important; color: black !important; } ' + 
    '.single-file-highlight-pink, .single-file-highlight-pink-mode ::selection { background-color: #ffbbb6 !important; color: black !important; } ' + 
    '.single-file-highlight-blue, .single-file-highlight-blue-mode ::selection { background-color: #95d0ff !important; color: black !important; } ' + 
    '.single-file-highlight-green, .single-file-highlight-green-mode ::selection { background-color: #93ef8d !important; color: black !important; } ' + 
    'span.single-file-highlight-yellow, span.single-file-highlight-pink, span.single-file-highlight-blue, span.single-file-highlight-green { display: inline !important; } ' + 
    '.single-file-highlight-hidden { background-color: inherit !important; color: inherit !important; } ' + 
    '.single-file-mask { all: initial; display: contents !important; } ' + 
    '.single-file-mask.single-file-page-mask { opacity: .99 !important; } ' + 
    'single-file-note { all: initial !important; display: contents !important; } ' + 
    '.single-file-cut-hover, .single-file-cut-outer-hover, .single-file-cut-selected, .single-file-cut-outer-selected { transition: outline-width 125ms !important; outline-offset: -4px !important; outline-width: 4px !important; } ' + 
    '.single-file-cut-hover, .single-file-cut-outer-hover { outline-style: dotted !important; } ' + 
    '.single-file-cut-selected, .single-file-cut-outer-selected { outline-style: dashed !important; } ' + 
    '.single-file-cut-hover, .single-file-cut-selected { outline-color: red !important; } ' + 
    '.single-file-cut-outer-hover, .single-file-cut-outer-selected { outline-color: green !important; } ' + 
    '.single-file-cut-mode, .single-file-cut-mode * { pointer-events: auto !important; touch-action: none !important; } ' + 
    '.single-file-cut-hover, .single-file-cut-outer-hover, .single-file-remove-highlights-mode .single-file-highlight:hover { cursor: crosshair !important; } ' + 
    '.single-file-removed { display: none !important; float: none !important; position: static !important; visibility: collapse !important; } a[href], img { -webkit-touch-callout: none; }'
    // 获取第一个脚本标记
    var ref = document.querySelector('script');
    // 在第一个脚本标签之前插入新样式
    ref.parentNode.insertBefore(style, ref);
}



function add_button_style(){
    var button = document.createElement('button');
    button.type = button;
    button.id = 'button_yellow';
    button.onclick = 'choose_yellow_color()';
    button.innerHTML = '选择黄色颜料'
}


function choose_yellow_color(){
    return 'single-file-highlight-yellow';
}