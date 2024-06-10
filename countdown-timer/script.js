let countdown;

document.getElementById("start-button").addEventListener("click", function(){
    //清除以前的倒计时
    if (countdown) {
        clearInterval(countdown);
    } 
    
    //获取用户输入的时间
    const datetimeInput = document.getElementById("datetime-input").value;
    const targetDate = new Date(datetimeInput).getTime();

    //检查输入是否有效
    if (isNaN(targetDate)){
        alert("请输入有效的日期和时间");
        return;
    }

    //每秒更新一次倒计时
    countdown = setInterval(( ) => {
        const now = new Date( ).getTime( );
        const distance = targetDate - now;

        //计算剩余的天、小时、分钟和秒
        const days = Math.floor(distance / (1000 * 60 * 60 * 24) );
        const hours = Math.floor( (distance % (1000 * 60 * 60 *24) ) / (1000 * 60 * 60) );
        const minutes = Math.floor( (distance % (1000 * 60 * 60) ) / (1000 * 60) );
        const seconds = Math.floor( (distance % (1000 * 60) ) / 1000);

        //更新HTML元素的内容
        updateDisplay('days',days);
        updateDisplay('hours',hours);
        updateDisplay('minutes',minutes);
        updateDisplay('seconds',seconds);
        //如果倒计时结束，停止更新并显示消息
        if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("time").innerHTML = "倒计时结束";
        }
    },1000);
});

function updateDisplay(id,value){
    const element = document.getElementById(id);
    element.innerHTML = '';  //清空当前内容
    const digits = value.toString().split('');
    digits.forEach(digit => {
        const img = document.createElement('img');
        img.src = `images/${digit}.png`; //假设图片在images文件夹中，并且命名为0.png，1.png等
        img.alt = digit;
        img.style.width = '50px';//根据需要调整图片宽度
        img.style.height = '100px';//根据需要调整图片长度
        element.appendChild(img);
    });
}