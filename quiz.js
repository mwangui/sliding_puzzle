
// note: I still have some bugs need to fix.
// if you allow me more time, I will fix the move up click issue
// thanks.

window.onload = function() {
    const buttons = document.querySelectorAll('.Tile');
    const space = document.getElementsByClassName('Tile')[0].offsetWidth;
    let temp = [1,1,1,1,1,1,1,1,0];
    let currentButton;
    let btnBeenClick;
    let perNum = 0;
    let nextNum = 0;
    let topNum = 0;
    let bottomNum = 0;
    let clickTime = 0;

    if ( clickTime == 1) {
        temp[8] = 1;
    }

    for (const button of buttons) {
        button.addEventListener('click', function(event) {
            clickTime++;
            //to get the current button number
            currentButton = event.path[0].className.charAt(event.path[0].className.length -1);
            perNum = parseFloat(currentButton) - 2;
            btnBeenClick = parseFloat(currentButton) -1;
            nextNum = parseFloat(currentButton);
            topNum = parseFloat(currentButton) - 4 ;
            bottomNum = parseFloat(currentButton) + 2;

            for (let i = 0; i <= temp.length; i++) {
                if ( temp[perNum] == 0) {
                    temp[btnBeenClick] = 0;
                    temp[perNum] = 1;
                    moveToLeft(currentButton, space, event);

                } if ( temp[nextNum] == 0) {
                    temp[btnBeenClick] = 0;
                    temp[nextNum] = 1;
                    moveToRight(currentButton, space, event);

                } if ( temp[topNum]  == 0 || temp[topNum] <0 ) {
                    temp[btnBeenClick] = 0;
                    temp[topNum] = 1;
                    moveToTop(currentButton, space, event);

                } if (temp[bottomNum] == 0) {
                    temp[btnBeenClick] = 0;
                    temp[bottomNum] = 1;
                    moveToBottom(currentButton, space, event);
                }
            }
        });
    };
};


function moveToLeft(currentButton, space, event) {
    event.target.style.left = - space + "px";
}

function moveToRight(currentButton, space, event) {
    event.target.style.left = + space + "px";
}

function moveToTop(currentButton, space, event) {
    event.target.style.top = - space + "px";
}

function moveToBottom(currentButton, space, event) {
    event.target.style.top = + space + "px";
}

