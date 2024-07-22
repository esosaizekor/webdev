import { DominoBreakOutComponent} from "./dominobreakoutComponent.js";
import { dominopage } from "./dominipagesarray.js";
import { uitleg } from "./uitleg.js";



function init()
{
    const logon = false;

    alert('Domino break out spel!');

    const dominobreakout_btn = document.getElementById('domino_break_out');
    if (dominobreakout_btn instanceof Object)
    {

        dominobreakout_btn.onclick = () => {
            const dominoP = dominopage.filter(el => el[1] === "Domino Break Out");
            document.getElementById('main').innerHTML =  dominoP[0][2];
            new DominoBreakOutComponent();    
        }
    }

    const groepaanmaken_btn = document.getElementById('groepaanmaken');
    if (groepaanmaken_btn instanceof Object)
    {
        groepaanmaken_btn.onclick = function () {
            const groepmakenP = dominopage.filter(el => el[1] === "Groep Aanmaken");
            document.getElementById('main').innerHTML =  groepmakenP[0][2];
            new DominoBreakOutComponent().showGroepenFromStorage();                        
        }
    }

    const spelen_btn = document.getElementById('spelen');
    if (spelen_btn instanceof Object)
    {
    
        spelen_btn.onclick = function () {
            const spelenP = dominopage.filter(el => el[1] === "Spelen");
            document.getElementById('main').innerHTML =  spelenP[0][2];
            new DominoBreakOutComponent().populateGroepenFromStorage();
            try{
                    const Cookies =  document.cookie.split(';');
                    if (Cookies.length > 0)
                    {
                    
                        for ( let i = 0; i < Cookies.length;i++)
                        {
                            //document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString() + "; SameSite=None; Secure";
                        
                        }
                    }
                }
                catch(err)
                {
                    alert(err);
                }
        
            }


    
    }

    const uitslagen_btn = document.getElementById('highscore');
    if (uitslagen_btn instanceof Object)
    {
    
        uitslagen_btn.onclick = function () {
            const spelenP = dominopage.filter(el => el[1] === "highscore");
            document.getElementById('main').innerHTML =  spelenP[0][2];
            
            try{
                new DominoBreakOutComponent();

                const Cookies =  document.cookie.split(';');
                    if (Cookies.length > 0)
                    {
                    
                        for ( let i = 0; i < Cookies.length;i++)
                        {
                            //document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString() + "; SameSite=None; Secure";
                        
                        }
                    }
                }
                catch(err)
                {
                    alert(err);
                }
        
            }


    
    }
  
    setInterval(()=>{
        document.getElementById('tips').innerHTML = uitleg[(Math.floor((Math.random() * 7) + 1))][2];
    }, 10000);      

}


window.onload = init;