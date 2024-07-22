
import { Groep } from "./util/groep.js";

export class DominoBreakOutComponent {
    #storage;
    #groepen = [];
    #opdrachten;


    constructor() {
      this.#opdrachten = new Set();
      this.#opdrachten = this.#prepareQuestions();
      console.log(this.#opdrachten);

      this.#storage = window.localStorage;


      //const addButton = document.getElementById("add");
           //const nameText = document.getElementById("name");
      //const dateText = document.getElementById("date");
  
      // addButton.onclick = () => {
      //   try{
      //     this.#addGroep();
      //     nameText.value = dateText.value = '';
      //   }
      //   catch(err){
      //     alert(err.message);
      //   }
  
      // };

      const groepmakensubmit = document.getElementById('groep_submit');
  
      if(groepmakensubmit instanceof Object)
      {
        groepmakensubmit.onclick = () =>  {
            
            const academiejaar = document.getElementById('AcademieJaar');    
            const lector = document.getElementById('Lector');          
            const groep = document.getElementById('Groep');
            
            console.log(`${academiejaar.value} ${lector.value} ${groep.value}`);
  
            try{
              this.#addGroep(academiejaar.value,lector.value,groep.value);
              
              lector.value = '';
              groep.value = '';
            }
            catch(err){
              alert(err.message);
              
            }
              
                     
        }

      }

      
      const clearButton = document.getElementById("groep_wis");

      if (clearButton instanceof Object)
      {
        clearButton.onclick = () => {
          this.#clearGroepen();
        };
      }

      const inschrijven_btn = document.getElementById('usersubmit');
      
    
      if (inschrijven_btn instanceof Object)
      {          
        let index = 1;
        let markup = "";

        this.#opdrachten.forEach(el => {
          markup += `<div style=\"display:none;\" id=\"opdracht${index}\">` +
                  `<h1> Opdracht ${index}</h1>` +
                  `<p> Klik op de link om de opdracht te <a href=\"doc/Groep replaceme - opdracht ${el}.docx\">downloaden</a><br></p>` +                  
                  `<p> Klik op de link om naar de volgende opdracht te <a href=\"javascript:showWindow('opdracht${index}','opdracht${index+1}');\">gaan</a><br></p>` +                                    
                  '</div>';

          index +=1;
        })          

        markup += `<div style=\"display:none;\" id=\"opdracht${index}\">` +
        `<h1> Game Over</h1>` +
        `<p> Klik op de link om te <a href="#"  id=\"spelen\">Spelen</a><br></p>` +                                    
        '</div>';                  

        inschrijven_btn.onclick = function ()  {
            
            const Naam = document.getElementById('Naam');
            const Groep = document.getElementById('Groep');
            const speler_obj = {groep : Groep.value, leerling : Naam.value};
          
          document.cookie = "Speler=" + JSON.stringify(speler_obj) + "; SameSite=None; Secure";
          Naam.value ='';

          markup = markup.replace('replaceme',speler_obj.groep);
          document.getElementById('spel').innerHTML = markup;
          document.getElementById('opdracht1').style.display = 'block';
    
        }




        
      }    
          
      const highscore_btn = document.getElementById('highscores');
  
  
      if (highscore_btn instanceof Object)
      {
        
        this.#prepareHighScores();
      }
      

    }
  
    #addGroep(academiejaar,lector,groep) {
  
      if(!lector) throw new Error('Lector!');
      if(!groep) throw new Error('Groep naam!');
      
      if(this.#groepen instanceof Object)
      {
        this.#groepen.push(new Groep(academiejaar,lector,groep));
      }
      else
      {
        this.#groepen = [];
        this.#groepen.push(new Groep(academiejaar,lector,groep));
      }
      
      this.#setGroepenInStorage();
      this.#toHTML();
    }
  
    #deleteGroep(ind) {
      this.#groepen.splice(ind-1,1);
      this.#setGroepenInStorage();
      this.#toHTML();    
    }
  
    #clearGroepen() {
      if(this.#groepen != null)
        this.#storage.removeItem('groepen');

      this.#groepen = [];
      this.#getGroepenFromStorage();
       this.#toHTML();    
    }
  
    #toHTML() {
        const overview = document.getElementById("overview");
        if(overview instanceof Object)
        {        
          overview.innerHTML = "";
          let index = 0;

            this.#groepen.map((g, ind) => {
              
                
              index +=1;
              const note = document.createElement("div");
              note.setAttribute("class", "notification");
        
              const btn = document.createElement("button");
              btn.setAttribute("class", "delete");
              btn.innerText =  'X';
              btn.addEventListener("click", () => {
                this.#deleteGroep(index);
              });
              note.appendChild(btn);
              
              var textNodeLeft = document.createElement("span");
              textNodeLeft.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";

              const text = document.createTextNode(
                `${index})     Lector - ${g.lector}  Groep - ${g.groep}       Academiejaar - ${g.academiejaar}`
              );
              note.appendChild(text);
        
              overview.appendChild(note);
            });
          }
    }
  
    #getGroepenFromStorage() {
      this.#groepen = JSON.parse(this.#storage.getItem('groepen'));
     this.#groepen.map(groepen=>new Groep(groepen.academiejaar,groepen.lector,groepen.groep));
     
    }
  
    #setGroepenInStorage() {    
      
      this.#storage.setItem('groepen',JSON.stringify(this.#groepen));  
    }

    showGroepenFromStorage()
    {
      this.#getGroepenFromStorage();     
      this.#toHTML();
    
    }

    populateGroepenFromStorage()
    {
      this.#getGroepenFromStorage();

      const overview = document.getElementById("overview");
      overview.innerHTML = "";

      const note = document.createElement("div");
      const selectgroep = document.createElement("select");
      selectgroep.setAttribute("id","Groep");

      
      note.appendChild(selectgroep);

      this.#groepen.map((g, ind) => {
        
        const option = document.createElement("option");
    
        option.innerText = g.groep;
        selectgroep.appendChild(option);
  
      });
      overview.appendChild(note);

    }

    #prepareHighScores()
    {    
     const date = `${new Date().toLocaleString()} `;
     const overview = document.getElementById("overview");
     overview.innerHTML = "";

     overview.innerHTML = `${date} - Groep : 1 | 3 ✓ 5 ✕ 🔑` + `<br><br>${date} - Groep : 1 | 0 ✓ 0 ✓ 🔐`
    }

    #prepareQuestions()
    {
      let getallen_reeksen = [];
      let myIndex = 0;

      while(myIndex < 100)
      {
        myIndex += 1;
        getallen_reeksen.push(Math.floor(Math.random() * 7));        
      }

     let i = 0;

      while(i < 100)
      {        
        if(this.#opdrachten.size < 9)
        {
          this.#opdrachten.add(getallen_reeksen[i]);
        }
        else
        {
          return this.#opdrachten;
        }
        i++;        
      }

      return this.#opdrachten;
    } 

  }
  