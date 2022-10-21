Load()

async function Load(){

    let request = new Request("../json/index.json")
    let response = await fetch(request)
    let json = await response.json()
    
    LoadNav(json["navbar"])
    
    //Write Below//


    LoadFooter(json["footer"])

}


////////Add Here///////






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


