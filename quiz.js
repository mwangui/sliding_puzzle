window.onload = function() {
    const buttons = document.querySelectorAll('.Tile');
    const space = document.getElementsByClassName('Tile')[0].offsetWidth;
    let temp = [1,1,1,1,1,1,1,1,0];
    let startPoint = [[0,0],[0,0], [0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0]];
    let thisBtnIndex;
    let perIndex = 0;
    let nextIndex = 0;
    let topNumberIndex = 0;
    let bottomNum = 0;
    let clickTime = 0;
    let afterMoveXPosition;
    let className;
    let classNumber;


    if ( clickTime == 1) {
        temp[temp.length - 1] = 1;
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('data-id' , i);
    }

    for (const button of buttons) {
        button.addEventListener('click', function(event) {
            clickTime++;

            // to get the button index
            className = event.path[0].className;
            classNumber = className.charAt(className.length-1);

            //to get the current button number
            thisBtnIndex = event.path[0].dataset.id;
            perIndex = parseFloat(thisBtnIndex) - 1;
            nextIndex = parseFloat(thisBtnIndex) + 1;
            topNumberIndex = parseFloat(thisBtnIndex) - 3 ;
            bottomNum = parseFloat(thisBtnIndex) + 3;

            for (let i = 0; i <= temp.length; i++) {
                if ( temp[perIndex] == 0) {
                    temp[thisBtnIndex] = 0;
                    temp[perIndex] = 1;
                    event.path[0].dataset.id = perIndex;
                    moveToLeft(event, space, startPoint, afterMoveXPosition, classNumber);
                } if ( temp[nextIndex] == 0) {
                    temp[thisBtnIndex] = 0;
                    temp[nextIndex] = 1;
                    event.path[0].dataset.id = nextIndex;
                    moveToRight(event, space, startPoint, afterMoveXPosition, classNumber);
                } if ( temp[topNumberIndex]  == 0  ) {
                    temp[thisBtnIndex] = 0;
                    temp[topNumberIndex] = 1;
                    event.path[0].dataset.id = topNumberIndex;
                    moveToTop(event, space, startPoint, afterMoveXPosition, classNumber);
                } if (temp[bottomNum] == 0) {
                    temp[thisBtnIndex] = 0;
                    temp[bottomNum] = 1;
                    event.path[0].dataset.id = bottomNum;
                    moveToBottom(event, space, startPoint, afterMoveXPosition, classNumber);
                }
            }
        });
    }
};


function moveToLeft(event, space, startPoint, afterMoveXPosition, classNumber) {
    afterMoveXPosition = startPoint[classNumber -1][0] -= space;
    event.target.style.left = afterMoveXPosition + 'px';
}

function moveToRight(event, space, startPoint, afterMoveXPosition, classNumber) {
    afterMoveXPosition = startPoint[classNumber -1][0] += space;
    event.target.style.left = afterMoveXPosition + 'px';
}

function moveToTop(event, space, startPoint, afterMoveXPosition, classNumber) {
    afterMoveXPosition = startPoint[classNumber -1][1] -= space;
    event.target.style.top = afterMoveXPosition + 'px';
}

function moveToBottom(event, space, startPoint, afterMoveXPosition, classNumber) {
    afterMoveXPosition = startPoint[classNumber -1][1] += space;
    event.target.style.top = afterMoveXPosition + 'px';
}
