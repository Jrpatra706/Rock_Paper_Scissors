const count = JSON.parse(localStorage.getItem('count')) ||
        {
            win:0,
            loose:0,
            tie:0
        };
        document.querySelector('.result-count').innerHTML=`win:${count.win}, loose:${count.loose}, tie:${count.tie}`;
        
        function result(selected){
            let result ='';
            let comp = pickForComp();
            if(selected==='✊'){
                if(comp ==='✊'){
                    result ='Game tie';
                    count.tie=count.tie+1;
                }
                else if(comp ==='✋'){
                    result = 'You loose';
                    count.loose++;
                }
                else{
                    result='You win';
                    count.win++;
                }
            }
            else if(selected==='✋'){
                if(comp ==='✊'){
                    result ='You win';
                    count.win++;
                }
                else if(comp ==='✋'){
                    result = 'Game Tie';
                    count.tie++;
                }
                else{
                    result='You Loose';
                    count.loose++;
                }
            }
            else{
                if(comp ==='✊'){
                    result ='You losse';
                    count.loose++;
                }
                else if(comp ==='✋'){
                    result = 'You Win';
                    count.win++;
                }
                else{
                    result='Game Tie';
                    count.tie++;
                }
            }
            // setting value to localStorage
            localStorage.setItem('count' , JSON.stringify(count));
            // alert(`You choose ${selected} computer choose ${comp} ${result}
            // \n win:${count.win} loose:${count.loose} tie:${count.tie}`);
            document.querySelector('.result').innerHTML=`${result}`;
            document.querySelector('.choosen').innerHTML=`You ${selected} - ${comp} Computer`;
            document.querySelector('.result-count').innerHTML=`win:${count.win}, loose:${count.loose}, tie:${count.tie}`;
        }

        function pickForComp(){
            let comp='';
            const ran=Math.random();
            if(ran<=(1/3)){
                comp='✊';
            }
            else if(ran>(1/3) && ran<=(2/3)){
                comp = '✋';
            }
            else{
                comp = '✌️';
            }
            return comp;
        }
        function resetFun(){
            document.querySelector('.result-count').innerHTML='win:0, loose:0, tie:0';
        }