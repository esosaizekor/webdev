export const dominopage = [
    [1, 
    "Domino Break Out",
    "<h1>Domino Break Out</h1>"+
    "Dit is een spel waarbij het uiteindelijke doel het openen van de schatkist is! <br>" +
    "Om in jullie missie te  slagen,  moeten  jullie  een  aantal  opdrachten  uitvoeren.  <br>" +
    "Verschillende  groepen  nemen  het  tegen elkaar op. De groep die het snelst zijn opdrachten uitvoert, <br>" +
    "zal de sleutel tot de schatkist vinden en die kunnen openen!Elke opdracht bestaat uit een aantal vragen <br>" +
     "die moeten beantwoord  worden door een groep leerlingen. De antwoorden vormen een ‘sleutel’ die  toegang <br>" +
     "geeft tot de volgende opdracht. Bijkomend worden de antwoordtijden bijgehouden per opdracht en per groep.<br>" +
     "De  doelstelliing  van  dit  drietalig  (Nederlands –    Frans –    Duits)    spel  is  op  een  educatieve  <br>" +
     "en  plezante manier wiskunde aan te leren.<br><br>" +
    "<img src=\"./images/lanternlight.webp\">"],
    [2,
    "Groep Aanmaken",
    "<h1>Groep aanmaken</h1><br>" +
    "<label for=\"AcademieJaar\">Academie Jaar :</label>" +
    "<select id=\"AcademieJaar\">" +
    "<option value=\"2021\">2021</option>" +
    "<option value=\"2022\">2022</option>"+
    "<option value=\"2023\" selected>2023</option>"+
    "</select><br><br>"+
    "<label for=\"Lector\">Lector :</label>" +
    "<input type=\"text\" id=\"Lector\" size=\"20\"><br><br>" +
    "<label for=\"Groep\">Groep :</label>" +
    "<input type=\"text\" id=\"Groep\" size=\"20\"><br><br>" +
    "<input type=\"button\" id=\"groep_submit\" value=\"Groep Aanmaken\"><br>" +
    "<br><br>" +
    "<br><br>" +
    "<table>" +
    "<caption style=\"text-align:right\"><small>Alle groepen</small></caption>" +
    "<thead>" +
    "<tr>" +
    "<td>|||| Nummer" +
    " Lector" +
    " Groep " +
    " Academie Jaar</td>" +
    "</tr>" +
    "<tr>" +
    "<td><div id=\"overview\"></div></td>" +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    "<tr>" +
    "<td></td><td> ______ </td>" +
    "</tr>" +
    "</tbody>" +
    "<tfoot></tfoot>" +
    "</table><br>" +
    "<input type=\"button\" id=\"groep_wis\" value=\"Wis Alles\"><br>" 
    ],
    [3,
        "Spelen",
        "<div id=\"spel\"><h1>Meld je aan bij een groep!</h1><br>" +
        "<label for=\"Kies een groep\">Jouw Groep :</label>" +
        "<div id=\"overview\"></div>"+
        "<label for=\"Naam\">Jouw Naam :</label>" +
        "<input type=\"text\" id=\"Naam\" size=\"20\"><br><br>" +
        "<input type=\"button\" id=\"usersubmit\" value=\"Inschrijven\"><br>" +
        "</div><br><br>" +
        "<br><br>"        
        ]    
        ,
        [4,
            "highscore",
            "<div id=\"spel\"><input type=\"hidden\" id=\"highscores\"> <h1>Uitslagen!</h1><br>" +
            "<table>" +
            "<caption style=\"text-align:right\"><small>Alle resultaten :</small></caption>" +
            "<thead>" +
            "<tr>" +
            "<td>|||| Datum" +
            " Groep" +
            " Correct " +
            " Fout" +
            " Sleutel</td>" +
            "</tr>" +
            "<tr>" +
            "<td><div id=\"overview\"></div></td>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr>" +
            "<td></td><td></td>" +
            "</tr>" +
            "</tbody>" +
            "<tfoot></tfoot>" +
            "</table><br>" +
                    
            "</div><br><br>" +
            "<br><br>"        
            ]          
    ]