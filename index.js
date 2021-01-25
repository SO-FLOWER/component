const num = 366;
        let UL = document.getElementById('box');
        let times = (num * 66)/400;
        let rainnum = parseInt(times);
        var s = times + "";
        var str = s.substring(0,s.indexOf(".") + 3);
        var number = str.substr(3,5);
        var bai = parseInt(number);
        
        UL.innerHTML="";
        for(let i = 0; i < 66; i++){
            var LI = document.createElement('li');
            if(i < rainnum){
               LI.innerHTML=`<div class="rainone"></div>`
            }else if(i == rainnum){
               LI.innerHTML=`<div class="rainone" style="width:${bai}%"></div>` 
            }else{}
            UL.appendChild(LI)
        }