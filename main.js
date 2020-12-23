let xOffset = ['-265px', '0', '-535px']; // 이미지 스프라이트 x 오프셋
let computer = 0; // 컴퓨터 선택
let interval = createInterval();

function createInterval(){
    return setInterval(()=> {
        computer = (computer + 1) % 3;
        document.querySelector('#computer').style.background = 'url(./가위바위보.jpeg) ' + xOffset[computer] + ' 0';
    }, 100);
}

const btns = document.querySelectorAll('.btn');
for(let i=0; i<btns.length; i++){
    let index = i;
    btns[i].addEventListener('click', function(){
        clearInterval(interval);

        if(index === computer){
            console.log('비겼습니다.');
        }
        else{
            let down = (index + 2) % 3;
            if(down === computer){
                console.log('이겼습니다.');
            }
            else{
                console.log('졌습니다.');
            }
        }
        setTimeout(() => {
            interval = createInterval(); 
        }, 1500);
    });
}