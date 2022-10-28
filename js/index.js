Load()

async function Load(){
    console.log("test");

    let request = new Request("../json/index.json")
    let response = await fetch(request)
    let json = await response.json()
    
    LoadNav(json["navbar"])
    
    //Write Below//
    LoadSlide(json["sliding"])

    // LoadNews(json["promotednews"])

    // LoadWatch(json["watchon"])

    // LoadPlayers(json["players"])

    LoadFooter(json["footer"])

}


////////Add Here///////
function LoadSlide(obj){
 console.log("yoyo")
 let slide = document.createElement("div");   
 slide.classList.add("container","scroll-top");
 let panel = document.createElement("div");
 panel.classList.add("panel");
 panel.style.backgroundImage = obj.img1;
 let panel2 = document.createElement("div");
 panel2.classList.add("panel");
 panel2.style.backgroundImage = obj.img2;
 let panel3 = document.createElement("div");
 panel3.style.backgroundImage = obj.img3;
 panel3.classList.add("panel");
 let href1 = document.createElement("a");
 href1.href=obj.link1;
 let href2 = document.createElement("a");
 href2.href = obj.link2;
 let href3 = document.createElement("a");
 href3.href=obj.link3;
 let br = document.createElement("br");

////// appending  //////

slide.appendChild(panel);
slide.appendChild(panel2);
slide.appendChild(panel3);
panel.appendChild(href1);
panel2.appendChild(href2);
panel3.appendChild(href3);
document.body.appendChild(slide);
document.body.appendChild(document.createElement("br"));


}
function LoadNews(){
 let hotgames = document.createElement("h2");
 let news = document.createElement("div");
 news.classList.add("game-news");
 let href4 = document.createElement("a");
 let img1 = document.createElement("img");
 img1.classList.add("game-img"); 
 let content = document.createElement("div");
 content.classList.add("game-content");
 let href5 = document.createElement("a");
 let href5title = document.createElement("h3");x
 let br2 = document.createElement("br");
 let br3 = document.createElement("br");
 let p1 = document.createElement("p");
 let p2 = document.createElement("p");
 let br4 = document.createElement("br");
 let br5 = document.createElement("br");
 let br6 = document.createElement("br");

 document.body.write(hotgames);
 document.body.write("<br>");
 news.appendChild(href4);
 href4.appendChild(img1);
 news.appendChild(content);
 content.appendChild(href5);
 href5.appendChild(href5title);
 content.appendChild(br2);
 content.appendChild(br3);
 content.appendChild(p1);
 content.appendChild(p2);

 document.body.appendChild(news);
 document.body.appendChild(br5);
 document.body.appendChild(br6)
}

function LoadWatch(){

let some = document.createElement("div");
let lb1 = document.createElement("br");
let watchcont = document.createElement("div"); 
let watchcard = document.createElement("div");
let video = document.createElement("div");
let iframe1 = document.createElement("iframe");
let content = documennt.createElement("div");
let vsteams = document.createElement("div");
let ul1 = document.createElement("ul");
let li1 = document.createElement("li");
let li1img = document.createElement("img");
let li2 = document.createElement("li");
let lb2 = document.createElement("br");
let ul2 = document.createElement("ul");
let li3 = document.createElement("li")
let li3img = document.createElement("img");
let li4 = document.createElement("li");
let score = document.createElement("div");
let hr = document.createElement("hr");
let img = document.createElement("img");

some.classList.add("some-container");
watchcont.classList.add("watch-cont");
watchcard.classList.add("watch-card");
video.classList.add("video");
content.classList.add("content");
vsteams.classList.add("vs-teams");
score.classList.add("score");

hr.style.display = 'inline-block';
hr.style.transform = 'rotate(90deg)';
hr.style.color = 'red';
hr.style.width = '12vh';

img.style.height = '5vh';

some.appendChild(lb1);
some.appendChild(lb2);
some.appendChild(watchcont);
watchcont.appendChild(watchcard);
watchcard.appendChild(video);
video.appendChild(iframe1);
watchcard.appendChild(content);
content.appendChild(vsteams);
vsteams.appendChild(ul1);
ul1.appendChild(li1);
li1.appendChild(li1img);
ul1.appendChild(li2);
vsteams.appendChild(lb2);
vsteams.appendChild(ul2);
ul2.appendChild(li3);
li3.appendChild(li3img);
ul2.appendChild(li4);
content.appendChild(score);
score.appendChild(hr);
score.appendChild(img);

///watchcard 2/////
let watchcard2 = document.createElement("div");
let video2 = document.createElement("div");
let iframe1_2 = document.createElement("iframe");
let content2 = documennt.createElement("div");
let vsteams2 = document.createElement("div");
let ul1_2 = document.createElement("ul");
let li1_2 = document.createElement("li");
let li1img2 = document.createElement("img");
let li2_2 = document.createElement("li");
let lb2_2 = document.createElement("br");
let ul2_2 = document.createElement("ul");
let li3_2 = document.createElement("li")
let li3img2 = document.createElement("img");
let li4_2 = document.createElement("li");
let score2 = document.createElement("div");
let hr2 = document.createElement("hr");
let img2 = document.createElement("img");

watchcard2.classList.add("watch-card");
video2.classList.add("video");
content2.classList.add("content");
vsteams2.classList.add("vs-teams");
score2.classList.add("score");

hr2.style.display = 'inline-block';
hr2.style.transform = 'rotate(90deg)';
hr2.style.color = 'red';
hr2.style.width = '12vh';

img2.style.height = '5vh';


watchcard2.appendChild(video2);
video2.appendChild(iframe1_2);
watchcard2.appendChild(content2);
content2.appendChild(vsteams2);
vsteams2.appendChild(ul1_2);
ul1_2.appendChild(li1_2);
li1_2.appendChild(li1img2);
ul1_2.appendChild(li2_2);
vsteams2.appendChild(lb2_2);
vsteams2.appendChild(ul2_2);
ul2_2.appendChild(li3_2);
li3_2.appendChild(li3img2);
ul2_2.appendChild(li4_2);
content2.appendChild(score2);
score2.appendChild(hr2);
score2.appendChild(img2);




///watchcard 3/////
let watchcard3 = document.createElement("div");
let video3 = document.createElement("div");
let iframe1_3 = document.createElement("iframe");
let content3 = documennt.createElement("div");
let vsteams3 = document.createElement("div");
let ul1_3 = document.createElement("ul");
let li1_3 = document.createElement("li");
let li1img3 = document.createElement("img");
let li2_3 = document.createElement("li");
let lb2_3 = document.createElement("br");
let ul2_3 = document.createElement("ul");
let li3_3 = document.createElement("li")
let li3img3 = document.createElement("img");
let li4_3 = document.createElement("li");
let score3 = document.createElement("div");
let hr3 = document.createElement("hr");
let img3 = document.createElement("img");

watchcard3.classList.add("watch-card");
video3.classList.add("video");
content3.classList.add("content");
vsteams3.classList.add("vs-teams");
score3.classList.add("score");

hr3.style.display = 'inline-block';
hr3.style.transform = 'rotate(90deg)';
hr3.style.color = 'red';
hr3.style.width = '12vh';

img3.style.height = '5vh';


watchcard3.appendChild(video3);
video3.appendChild(iframe1_3);
watchcard3.appendChild(content3);
content3.appendChild(vsteams3);
vsteams3.appendChild(ul1_3);
ul1_3.appendChild(li1_3);
li1_3.appendChild(li1img3);
ul1_3.appendChild(li2_3);
vsteams3.appendChild(lb2_3);
vsteams3.appendChild(ul2_3);
ul2_3.appendChild(li3_3);
li3_3.appendChild(li3img3);
ul2_3.appendChild(li4_3);
content3.appendChild(score3);
score3.appendChild(hr3);
score3.appendChild(img3);


let lbo1 = document.createElement("br");
let lbo2 = document.createElement("br");

some.appendChild(lbo1);
some.appendChild(lbo2);

some.appendChild(watchcard);
some.appendChild(watchcard2);
some.appendChild(watchcard3);

document.body.append(some);

}

function LoadPlayers(){

    let players = document.createElement("div");
    let plb1 = document.createElement("br");
    let control = document.createElement("div");
    let name = document.createElement("div"); 
    let controls = document.createElement("div");
    let arrow1 = document.createElement("img");
    let arrow2 = document.createElement("img");
    let plb2 = document.createElement("br");
    let playercards = document.createElement("div");
    let card1 = document.createElement("div");
    let dp = document.createElement("div");
    let info = document.createElement("div");
    let pa1 = document.createElement("a");
    let h3 = document.createElement("h3");

    players.classList.add("players");
    control.classList.add("control");
    name.classList.add("name");
    controls.classList.add("controls");
    playercards.classList.add("playercards");
    card1.classList.add("player-card");
    dp.classList.add("dp");
    info.classList.add("information","effect");

    players.appendChild(plb1);
    players.appendChild(control);
    control.appendChild(arrow1);
    control.appendChild(arrow2);
    players.appendChild(plb2);
    players.appendChild(playercards);



}
///////////////////////


function LoadNav(obj){
    let nav = document.createElement("div");
    nav.classList.add("game-nav");
    nav.classList.add("navbar");
    nav.id = "navbar";
    nav.classList.add("gradient");
    ////////
    let logo = document.createElement("div");
    logo.classList.add("logo");
    let a = document.createElement("a");
    a.href = "/index.html";
    let img = document.createElement("img");
    img.src = obj.logo;
    img.classList.add("logoimg");
    a.appendChild(img);
    logo.appendChild(a);
    ////////
    let mid = document.createElement("div");
    mid.classList.add("mid-items");
    let home = document.createElement("a");
    home.href = "#";
    home.innerText = "Home";
    let news = document.createElement("a");
    news.href = "/news.html";
    news.innerText = "News"
    mid.appendChild(home);
    mid.appendChild(news);
    let teams = document.createElement("div");
    teams.classList.add("dropdown");
    let dropbtn = document.createElement("div");
    dropbtn.innerText = "Teams";
    dropbtn.style.cursor = "pointer";
    dropbtn.style.fontSize = "1.15vw";
    let dropcont = document.createElement("div");
    dropcont.classList.add("dropdown-content");
    for (let i =0; i<Object.getOwnPropertyNames(obj["teams"]).length; i++){
        let link = document.createElement("a");
        link.href = obj["teams"][i].link;
        link.target = "_blank";
        link.innerText = obj["teams"][i].name;
        dropcont.appendChild(link);
    }
    teams.appendChild(dropbtn);
    teams.appendChild(dropcont);
    mid.appendChild(teams);

    let games = document.createElement("a");
    games.href = "/games.html";
    games.innerText = "Games"
    mid.appendChild(games);
    ////////
    let search = document.createElement("div");
    search.classList.add("search-container");
    let form = document.createElement("form");
    form.action = "/search";
    form.method = "get";
    let input = document.createElement("input");
    input.classList.add("search");
    input.classList.add("expandright");
    input.id = "searchright";
    input.type = "search";
    input.name = "q";
    input.placeholder = "Search";
    let label = document.createElement("label");
    label.classList.add("button");
    label.classList.add("searchbutton");
    label.htmlFor = "searchright";
    let span = document.createElement("span");
    span.classList.add("mglass");
    span.innerHTML = "&#9906;"
    label.appendChild(span);
    form.appendChild(input);
    form.appendChild(label);
    search.appendChild(form);
    ////////
    let login = document.createElement("div");
    let signa = document.createElement("a");
    signa.href = "/login.html";
    let simg = document.createElement("img");
    simg.classList.add("signup");
    simg.src = obj.signup;
    signa.appendChild(simg);
    login.appendChild(signa);
    ////////
    nav.appendChild(logo);
    nav.appendChild(mid);
    nav.appendChild(search);
    nav.appendChild(login);
    let head = document.createElement("header");
    head.appendChild(nav);
    document.body.appendChild(head);
}


function LoadFooter(obj){
    let footer = document.createElement("div");
    footer.style.background = "#0F0F0F";
    footer.style.marginTop = "8vh";
    footer.classList.add("footer");
    let icons = document.createElement("div");
    icons.classList.add("social-media");
    for(let icon of obj.icons){
        let a = document.createElement("a");
        a.href = "#";
        let img = document.createElement("img");
        img.src = icon;
        a.appendChild(img);
        icons.appendChild(a);
    }
    footer.appendChild(icons);
    let logo = document.createElement("div");
    logo.classList.add("f-logo");
    let a = document.createElement("a");
    a.href = "/index.html";
    let img = document.createElement("img");
    img.src = obj.logo;
    img.classList.add("logoimg");
    a.appendChild(img);
    logo.appendChild(a);
    footer.appendChild(logo);
    let p = document.createElement("p");
    p.innerText = obj.copyright;
    footer.appendChild(p);
    let nav = document.createElement("div");
    nav.classList.add("navigation");
    let home = document.createElement("a");
    home.href = "#";
    home.innerText = "Home";
    let news = document.createElement("a");
    news.href = "/news.html";
    news.innerText = "News  "
    let games = document.createElement("a");
    games.href = "/games.html";
    games.innerText = "Games";
    nav.appendChild(home);
    nav.appendChild(news);
    nav.appendChild(games);
    footer.appendChild(nav);
    let end = document.createElement("end")
    let hr = document.createElement("hr");
    hr.style.marginBottom = "5vh";
    end.innerText = obj.end;
    footer.appendChild(end);
    document.body.appendChild(footer);
}


