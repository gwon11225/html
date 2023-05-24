let arr = ['cow.png','dragon.png','mouse.png','rabbit.png','rock.png','tiger.png']
function mOk(pGbn){
    if(pGbn == 'contents'){
        document.getElementById('idH1').innerHTML="메롱";
    }else if(pGbn == 'color'){
        document.getElementById('idH1').style="color:green";
    }else if(pGbn == 'img'){
        const rand = Math.floor(Math.random() * 6)
        document.getElementById('idImg').src="http://arabbit.link/images/"+arr[rand];
    }else if(pGbn == 'hide'){
        document.getElementById('idImg').style="display:none";
    }else if(pGbn == 'show'){
        document.getElementById('idImg').style="display:block";
    }
}