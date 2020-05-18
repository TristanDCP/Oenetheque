// pop-up majeur ?
let idWarningYes = document.getElementById("warning-yes");
let idWarning = document.getElementById("warning");

window.onload = function minorBlock() {
  idWarning.focus();
  idWarning.style.display = "block";
}

idWarningYes.onclick = showsite;

function showsite(){
  idWarning.style.display = "none";
}

//function bouton up to top
let idBtnUpPage = document.getElementById("btnUpPage");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    idBtnUpPage.style.zIndex = 99;
    idBtnUpPage.style.opacity = "1";
    idBtnUpPage.style.bottom = "20px";
    idBtnUpPage.style.transition = "padding 500ms, opacity 1s, bottom 1s";
  } else {
    idBtnUpPage.style.zIndex = -1;
    idBtnUpPage.style.opacity = "0";
    idBtnUpPage.style.bottom = "0px";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// card pour la page
let idHomepage = document.getElementById("homepage");
let idChampagne = document.getElementById("champagne");
let idWine = document.getElementById("wine");
let idSpirit = document.getElementById("spirit");
let idMainArea = document.getElementById("mainArea");
let idCartList = document.getElementById("cartlist");
let totalPrice = 0;
let idBuyTotal = document.getElementById("buytotal");
let idIconCart = document.getElementById("icon-cart");

// EX : let cardNom = ["nom", "champage/img.png", "description", "prix", "ref-0001","cardNom", 0]
//champagne
let cardSiecle = ["Champagne Laurent Perrier - Grand Siècle N°24 - Maison LP", "assets/img/champagne/siecle.png", "Grand siècle est la cuvée de prestige de la maison Laurent-Perrier, signature de son exigence ! Cette itération n°24 de Grand Siècle est le fruit de l'assemblage de trois années exceptionnelles millésimées (2007, 2006 et 2004) et vieillit 7 années minimum en cave.", "110", "C001", "cardSiecle", 0]
let cardKrug = ["Champagne KRUG - Grande Cuvée 167 Edition", "assets/img/champagne/krug.png", "Krug Grande cuvée est né en 1843 de la volonté de Joseph Krug. Cet assemblage de 191 vins provenant de 13 millésimes diférents (de 1995 à 2011) dont 42% de vins de réserve a reposé durant 7 longues années en cave. Découvrez la 167ème édition et son unique richesse en saveurs et en arômes.", "185", "C002", "cardKrug", 0]
let cardCristal = ["Champagne Louis Roederer - Maison Roederer CRISTAL 2012", "assets/img/champagne/cristal.png", "Nous sommes à l'apogée de Cristal, un superbe équilibre, une évanescence scintillante, tant d'élégance et d'harmonie dans les accords. Cette cuvée bénéficie en moyenne de 10 années de maturation en cave avant que le mythe ne s'offre à vous.", "220", "C003", "cardCristal", 0]
let cardWinston = ["Champagne Pol Roger - Cuvée Winston Churchill 2009", "assets/img/champagne/winston.png", "Élaborée uniquement dans les meilleurs millésimes de la maison Pol Roger, la cuvée a été créée en hommage à Sir Winston Churchill, avec pour références les qualités qu'il appréciait dans le champagne: robustesse, charpente et maturité. Un Champagne qui mérite d'être oublié en cave pour dévoiler une palette aromatique exceptionnelle. tout en finesse, simplement un diamant fourni par un millésime d'exception.", "250", "C004", "cardWinston", 0]
let cardBollinger = ["Champagne Bollinger Coffret 007 - Millésime 2011", "assets/img/champagne/bollinger.png", "La Maison Bollinger dévoile pour cet évènement le millésime 2011, exclusivement issus de grands crus de Pinot Noir du village d'Ay. C'est la premère fois que la maison élabore une cuvée issue uniquement de ce cru historique ou la maison est implantée depuis sa création en 1829. Avis aux collectionneurs!", "320", "C005", "cardBollinger", 0]
let cardSalon = ["Champagne Salon - Blanc de Blancs - Le Mesnil 2007", "assets/img/champagne/salon.png", "La Maison Salon nous offre une cuvée complexe, savoureuse et gourmande. On retrouve également beaucoup de précision dans une bouche très nerveuse et envoutante. De très nombreuses années de garde sont devant cette belle cuvée, années durant lesquelles ce Champagne s'affinera et laissera exalter tous ses dons au moment de sa dégustation.", "950", "C006", "cardSalon", 0]
let cardTaittinger = ["Champagne Taittinger Rosé - Comtes de Champagne 2007", "assets/img/champagne/taittinger.png", "Le Comtes de Champagne Rosé puise sa noblesse dans le long vieillissement en caves dont il bénéficie. Durant toutes ces années, ce champagne Grand Cru à la composition pure et exigeante, va affiner sa matière pour parvenir à un équilibre soyeux et savoureux, jusqu’à ce qu’il devienne totalement fondu en une multitude de particules de petit fruits rouges légèrement grillés, un équilibre entre fraîcheur et structure.", "170", "CR001", "cardTaittinger", 0]
let cardKrugR = ["Champagne Krug Rosé - Grande Cuvéé 23 Edition Krug", "assets/img/champagne/krugR.png", "Alliant distinction et audace, Krug rosé est inspiré par le rêve de la cinquième génération de la Maison de Krug. L’édition 23 est un assemblage de 60 vins issus de 10 millésimes différents, le plus jeune datant de 2011 et le plus ancien du millésime 2000. Vieillit 7 années en cave, ce champagne dévoile une largeur et une profondeur étonnantes. Déjà très avenante, cette cuvée révélera toute sa fraîcheur et son élégance après un repos en cave de 5 ans.", "259", "CR002", "cardKrugR", 0]

//wine
let cardRiesling = ["Riesling Clos du Saint Hune - Domaine Trimbach - 2002", "assets/img/vins/riesling.png", " Le Clos Saint Hune est considéré comme un des plus grands blanc du monde. Le Riesling Clos Ste Hune 2014 présente un nez minéral très net et profond avec des notes fumées, qui reflète de manière impressionnante le terroir du Muschelkalk. Ce riesling expressif et riche, précis et pur, avec une belle texture et d'une grande élégance. Il est minéral mais très juteux. La finale est extrêmement longue et complexe.", "190", "B001", "cardRiesling", 0]
let cardSilex = ["Silex Pouilly Fumé - Domaine Didier Dagueneau - 2005", "assets/img/vins/silex.png", "Très pur, débordant d'énergie saline et de fraîcheur, il s'inscrit dans un univers aromatique à part ; zan, fleurs blanches, notes racinaires de tarragone.Son profil fuselé et tonique encadre une vraie mâche et une densité vigoureuse jusqu'en finale.Minéralité, puissance, race et complexité aromatique témoignent d'un terroir d'exception.", "210", "B002", "cardSilex", 0]
let cardErmitage = ["Ermitage de L'Orée - Domaine Michel Chapoutier - 2009", "assets/img/vins/ermitage.png", "Issu de vignes de Marsanne âgée de 60 à 70 ans, De L’Orée propose une robe jaune or intense, aux reflets dorés et verts. Son nez, extrêmement aromatique et intense oscille entre arômes de cailloux chauds, de caramel, de fruits très mûrs, de citron, d’acacia et d’aubépine. La bouche, grasse, ample et très complexe est chargée de notes de fruits mûrs, d’épices et de grillé avant de terminer sur une belle longueur et une finale fraîche.", "290", "B003", "cardErmitage", 0]
let cardMontrachet = ["Montrachet Grand Cru - Domaine Baron Thenard - 2012", "assets/img/vins/montrachet.png", "La grandeur et la richesse de ce Montrachet sont impressionnantes des saveurs si délicieuses qui offrent une longueur remarquable. Le plus réputé de toute la Bourgogne. C'est un vin à la puissance aromatique hors norme. Très beau boisé, présent mais suffisament bien intégré pour ne pas masquer les arômes subtiles de fleurs blanches, de pommes et d'épices douces.", "420", "B004", "cardMontrachet", 0]
let cardTrevallon = ["Domaine de Trevallon - Famille Dürrbach - Provence Les Alpilles 2014", "assets/img/vins/trevallon.png", "Un vin de pays devenu mythique, en incluant à parité le sauvignon et la syrah, Eloi Dürrbach bâtit un vin aux tanins frais, élégants et vibrants. Portée par une forte complexité aromatique, cette cuvée à la fois charnue et soyeuse en fera un magnifique vin de gastronomie.", "110", "R001", "cardTrevallon", 0]
let cardLambrays = ["Clos Des Lambrays Grand Cru - Bourgogne Domaine Des Lambrays - 2002", "assets/img/vins/lambrays.png", "Issu d’un terroir complexe chargé d’histoire ce fabuleux Clos des Lambrays est convoité par les amateurs passionnés ! Corsé, souple et intense, ce vin offre une harmonie d’arômes et un équilibre magistral. Quelques années de garde sublimeront ce vin et seront la promesse d'une dégustation inoubliable.", "270", "R002", "cardLambrays", 0]
let cardRaven = ["Domaine Sine Qua Non - Raven 3 Series 2006 - Californie USA", "assets/img/vins/raven.png", "Sine Qua Non se concentre sur les cépages rhodaniens : la Syrah, la Grenache et la Roussanne notamment. La série Raven est un assemblage de 93% Syrah, 5% Grenache et 2% Viognier poiur une durée de deux ans en fut de chêne français. Offrant une couleur pourpre dense, des fruits magnifiques et un doux parfum de graphite, de mûres, de bleuets et de charbon de bois.", "540", "R003", "cardRaven", 0]
let cardCheval = ["Château Cheval Blanc 2010 - Saint-Emilion Grand Cru Classé A", "assets/img/vins/cheval.png", "Le plus célèbre des Saint-Emilion Grand Cru, et l’un des vins français les plus réputés au monde, s’est construit une réputation sans faille depuis la seconde moitié du XXème siècle grâce à sa régularité exemplaire. Le Château signe un millésime 2010 légendaire et inoubliable au potentiel de garde considérable.Avec une parfaite combinaison entre fraîcheur, concentration et finesse, ce vin est tout simplement extraordinaire", "760", "R004", "cardCheval", 0]
let cardPibarnon = ["Château de Pibarnon - AOC BANDOL Rosé - Provence Rosé 2009", "assets/img/vins/pibarnon.png", "Tout d'abord, un terroir exceptionnel. Ensuite, une texture et une matière de grande finesse. Un vin charnu, fruité, entier et gourmand à la fois. Produit en petite quantité, ce rosé possède une superbe typicité, une référence mondiale.", "90", "RO001", "cardPibarnon", 0]
let cardSine = ["Domaine Sine Qua Non - Autrement Dit 2006 - Rosé Californie USA", "assets/img/vins/sine.png", "Sine Qua Non se concentre sur les cépages rhodaniens.Rosé foncé à grenat dans le verre, teinte claire partout. Nez sur les fruits rouges, saveurs de framboises noires, de cerises. Notes de baies avec un soupçon d'amertume avec un final ample.", "270", "RO002", "cardSine", 0]
let cardBabylone = ["Les Jardins De Babylone - Didier Dagueneau -  Jurançon 2014", "assets/img/vins/babylone.png", "A Jurançon, le vignoble couvre 3 hectares en terrasses, exclusivement plantés de Petit Manseng.Une robe jaune foncée, reflet or pâle. Elle emprunte ses notes exotiques aux vins alsaciens, avec des embruns de caramel et de coing pour beaucoup de gourmandise. Ce vin de petit manseng possède un esprit singulier, riche de son onctuosité et délectable jusqu’à la dernière goutte par sa fraicheur", "112", "M001", "cardBabylone", 0]
let cardYquem = ["Chateau Yquem 2001 - Sauternes 1er Cru Classé Supérieur", "assets/img/vins/yquem.png", "Majestueux dans sa tunique vieil or, il joue subtilement de ses parfums de fruit de la Passion, d'abricot, d'agrumes et de figue qu'il met en rivalité avec des fleurs et une pointe de muscade. A l'aération, ceux-ci deviennent de plus en plus présents et dominent le bouquet, complétés de pointes de vanille et de coing. Dense et ample, l'attaque s'ouvre sur un palais rond, enveloppant, riche, mais équilibré. Longue, la finale revéle des fruits frais et des notes d'abricot confit.", "630", "M002", "cardYquem", 0]


//spirit
let cardMacallan = ["The Macallan Rare Cask Black - Whisky, Speyside Ecosse", "assets/img/spiritueux/macallan.jpg", "Rare Cask Black est un mariage d'une centaine de fûts à prédominance sherry. Fabriqué à partir de whisky tourbé, très rarement produit à la distillerie il présente des notes de fruits secs, de muscade, de gingembre et de fumée.", "650", "S001", "cardMacallan", 0]
let cardLagavulin = ["Lagavulin Distillers Edition 1980 - Whisky, Ecosse", "assets/img/spiritueux/lagavulin.jpg", "Une version vintage de 1980 de l'édition de distillateurs mûris PX Sherry de Lagavulin Ce millésime particulier a été publié il y a quelques années.", "1150", "S002", "cardLagavulin", 0]
let cardNikka = ["Nikka Yoichi 10y - Single Malt - Whisky, Hokkaido Japon", "assets/img/spiritueux/nikka.jpg", "Un single malt de dix ans, élégamment tourbé, de la belle distillerie Yoichi de Nikka à Hokkaido, où le whisky est fabriqué tel qu'il était en Écosse avec de petits alambics à cuisson directe et mûri dans le bois le plus fin que la société puisse trouver. Mis en bouteille à 45% pour plus de punch.", "420", "S003", "cardNikka", 0]
let cardHibiki = ["Suntory Hibiki 17y - Single Malt - Whisky, Hakushu Japon", "assets/img/spiritueux/hibiki.jpg", "Un fantastique mélange japonais, fait de malt vieilli et de whiskies de grain des trois distilleries de Suntory. Épicé et sophistiqué, il est idéal pour surprendre les gens lors de dégustations à l'aveugle.", "550", "S004", "cardHibiki", 0]
let cardParadis = ["Hennessy Paradis Imperial - Hennesy Cognac, France", "assets/img/spiritueux/paradis.png", "Hennessy Paradis Imperial est une création contemporaine de Yann Gillioux, septième génération de Maitres Assembleurs. Ce cognac fait de précision symbolise l'apogée de l'art de la sélection des eaux de vie, l'incessante quête de finesse et offre un assemblage au caractère unique et aux contrastes inattendus. A l'issue d'une récolte, le nombre moyen d'eaux de vie ayant le potentiel de rejoindre un jour cet assemblage est très faible : seulement 10 sur 10000. Une alliance inédite de l'âge et de la finesse, un cognac Hennessy complexe aux arômes floraux délicats additionnés à de légères notes épicées et fumées. Découvrez le luxe signé Hennessy.", "2540", "S007", "cardParadis", 0]
let cardLouis = ["Louis XIII - La Maison Rémy Martin - Cognac, France", "assets/img/spiritueux/louis.png", "Depuis sa création en 1874, le cognac Louis XIII a été suivi par quatre générations de Maître de chai qui ont consacré leur vie à la sélection, à l'assemblage et au vieillissement des eaux-de-vie les plus extraordinaires. Véritable ambassadeur de l'art-de-vivre à la française, Louis XIII est un assemblage exclusif de 1200 eaux-de-vie âgées entre 40 et 100 ans dans un flacon qui a tout d'une oeuvre d'art. Chacune d'entre elles est vieillie dans des fût de chêne du Limousin …Un trésor intemporel qui vous embarque pour un sublime voyage à travers un siècle d'arômes.", "3100", "S008", "cardLouis", 0]


//appel fonction
idChampagne.onclick = showCardChampagne;
idWine.onclick = showCardWine;
idSpirit.onclick = showCardSpirit;
idHomepage.onclick = showHomepage;


// creation de la page d'accueil avec toutes les cards
function showHomepage() {
  idMainArea.innerHTML =
    ` <a class="h1 font-parisienne">Notre Maison</a>
    <p>Œnothèque est une boutique spécialisée en vins de collections pour le plaisir des amateurs et des
        collectionneurs.
        Notre sommelier a sélectionné les plus grands vins de notre territoire pour votre plus grand
        plaisir. Des bulles de la Champagne de nos plus grands terroirs aux parcelles de Bourgogne et de la
        vallée du Rhône en passant par les vins minéraux de la Loire et les vins tanniques du vignoble
        Bordelais, ainsi que ceux du Languedoc. La plupart de nos vins ont un excellent potentiel de garde
        et pourront rester dans votre cave afin de profiter pleinement des arômes.
        Nos livraisons sont préparées avec soin et nous vous garantissons un emballage anti-casse.</p>
    <hr class="separator">
    <a class="h2 col-12 font-parisienne" onclick="showCardChampagne()">Champagne</a>
    <p>
        Œnothèque vous propose un large choix de champagnes issu des meilleures maisons du vignoble
        champenois. La plupart de nos champagnes sont millésimés et viennent d'assemblage dans la parfaite
        tradition de la méthode champenoise, les bulles seront l'allié parfait pour vos apéritifs ou pour
        terminer en beauté autour d'un dessert. Nos champagnes sont servis dans des coffrets luxe.
    </p>
    <hr class="separator">
    <a class="h2 col-12 font-parisienne" onclick="showCardWine()">Vins</a>
    <p>Notre vinothèque met en avant nos cépages français dans une sélection issue des meilleurs domaines de
        France. Les blancs mettent en avant la minéralité du riesling, du sauvignon, la puissance du
        chardonnay et de la Marsanne. Les rouges offrent la puissance du fruit et l'équilibre en bouche.
        Nous vous proposons également la cuvée "Raven" et "Autrement Dit" du domaine Sine Qua Non de
        Californie mettant en avant les cépages rhodaniens. Les vins de dessert sont également à l'honneur
        avec l'inimitable Château Yquem et le terroir du Jurançon.
    </p>
    <hr class="separator">
    <a class="h2 col-12 font-parisienne" onclick="showCardSpirit()">Spiritueux</a>
    <p>Notre gamme de spiritueux est issue de bouteilles rares sélectionnées qui raviront les grands
        connaisseurs. Nos whiskys des Highlands d'Écosse au Japon mais également nos cognacs français mis à
        l'honneur avec l'ambassadeur Louis XIII.</p>
`;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// creation de la page champagnes avec toutes les cards
function showCardChampagne() {
  idMainArea.innerText = "";

  createCard(cardSiecle);
  createCard(cardKrug);
  createCard(cardCristal);
  createCard(cardWinston);
  createCard(cardBollinger);
  createCard(cardSalon);
  createCard(cardTaittinger);
  createCard(cardKrugR);

  window.scrollTo({
    top: 365,
    behavior: 'smooth'
  });
}

// creation de la page vins avec toute les cards
function showCardWine() {
  idMainArea.innerText = "";

  createCard(cardRiesling);
  createCard(cardSilex);
  createCard(cardErmitage);
  createCard(cardMontrachet);
  createCard(cardTrevallon);
  createCard(cardLambrays);
  createCard(cardRaven);
  createCard(cardCheval);
  createCard(cardPibarnon);
  createCard(cardSine);
  createCard(cardBabylone);
  createCard(cardYquem);

  window.scrollTo({
    top: 365,
    behavior: 'smooth'
  });
}

// création de la page Spiriteux avec toutes les cards
function showCardSpirit() {
  idMainArea.innerText = "";

  createCard(cardMacallan);
  createCard(cardLagavulin);
  createCard(cardNikka);
  createCard(cardHibiki);
  createCard(cardParadis);
  createCard(cardLouis);
  createCard(cardMerlin);

  window.scrollTo({
    top: 365,
    behavior: 'smooth'
  });
}
// creation de la card et de sa modale
function createCard(type) {
  idMainArea.innerHTML +=
    `   <div class="col-6 col-md-4 col-lg-3 py-2 px-1 px-md-2 ">
        <div class="card shadow">
        <img src="${type[1]}" class="card-img-top" alt="image ${type[0]}">
        <div class="card-body text-darkwine">
            <h5 class="card-title title-card-size">${type[0]}</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-dark text-pinkwhite bg-pinkdark" data-toggle="modal" data-target="#${type[4]}">Accéder au Produit</a>
            <span class="badge text-pinkwhite bg-darkwine">${type[3]}€</span>
        </div>
        </div>
    
        <div class="modal fade" id="${type[4]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-darkwine">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${type[0]}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row justify-content-center text-center">
                <div class="col-6"><img src="${type[1]}" class="card-img-top" alt="image ${type[0]}"></div>
                </div>
                <div class="modal-body">
                  <p>${type[2]} </p>
                  <p><i>ref: ${type[4]}</i><br>
                  <b>Voulez vous ajouter cet article dans votre panier ?</b>
                  </p>
                </div>
                
                <span class="text-pinkwhite bg-darkwine p-2 h3 text-center"><i><b>${type[3]} </b>€</i></span>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-dark text-pinkwhite bg-darkwine" data-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-dark text-pinkwhite bg-pinkdark" onclick="addToBasket(${type[5]})" data-dismiss="modal" >Mettre dans le panier</button>
                </div>
            </div>
        </div>
        </div>
      </div>`;
}

// ajout d'une ligne de tableau dans la modale panier en fonction de la card 
function addToBasket(type) {
  let idResult = document.getElementById(`result${type[4]}`);
  let idnumber = document.getElementById(`number${type[4]}`);
  //Quand on clic la première fois sur "Ajoutez au panier" d'une des bouteilles, ça augmente la quantité de cette bouteille et ça créé le tableau.
  if (type[6] === 0) {
    type[6]++;
    idCartList.innerHTML +=
      ` <tr class="table-modif" id="table${type[4]}">
      <th scope="row"><img src="${type[1]}" class="card-img-top" style="width: 4em;" alt="image ${type[0]}"></th>
      <td>${type[0]}</td>
      <td class=""><b>${type[3]}</b>€</td>
      <td class="" id="number${type[4]}">
        ${type[6]}<br>
        <a class="btnplus" id="Up${type[4]}" onclick="functionBtnUp(${type[5]})"><img src="assets/img/plus.png" style="width: 2rem;" alt="plus"></a>
        <a class="btnmoins" id="Down${type[4]}" onclick="functionBtnDown(${type[5]})"><img src="assets/img/moins.png" style="width: 2rem;" alt="moins"></a>
      </td>
      <td class="" id="result${type[4]}"><b>${type[3]}</b>€</td>
    </tr>`;
  } else {
    //Si on clic à nouveau sur la même bouteille dans le magasin, ça ajoute une bouteille de plus au panier.
    type[6]++;
    idnumber.innerHTML =
      `${type[6]}<br>
      <a class="btnplus" id="Up${type[4]}" onclick="functionBtnUp(${type[5]})"><img src="assets/img/plus.png" style="width: 2rem;" alt="plus"></a>
      <a class="btnmoins" id="Down${type[4]}" onclick="functionBtnDown(${type[5]})"><img src="assets/img/moins.png" style="width: 2rem;" alt="moins"></a>`;
    idResult.innerHTML = "<b>" + type[3] * type[6] + "</b>€";
  }

  //Ajout du prix sur le total.
  totalPrice = Number(totalPrice) + Number(type[3]);
  idBuyTotal.innerHTML = "Paiement: <b>" + Number(totalPrice) + "</b> €";
  //Si le prix total du panier est supérieur a 0, alors l'icône change, sinon elle redevient vide.
  if (totalPrice > 0) {
    idIconCart.innerHTML = `<img src="assets/img/cartfull.png" alt="Panier plein" style="width: 2.5em; height: 2.5em;">`
  } else {
    idIconCart.innerHTML = `<img src="assets/img/cartempty.png" alt="Panier Vide" style="width: 2.5em; height: 2.5em;">`
  }
}

//Fonction des boutons "moins" avec ajout total sur le prix du paiement.
function functionBtnUp(type) {
  let idResult = document.getElementById(`result${type[4]}`);
  let idnumber = document.getElementById(`number${type[4]}`);

  type[6]++;
  idnumber.innerHTML =
    `${type[6]}<br>
    <a class="btnplus" id="Up${type[4]}" onclick="functionBtnUp(${type[5]})"><img src="assets/img/plus.png" style="width: 2rem;" alt="plus"></a>
    <a class="btnmoins" id="Down${type[4]}" onclick="functionBtnDown(${type[5]})"><img src="assets/img/moins.png" style="width: 2rem;" alt="moins"></a>
  `;
  idResult.innerHTML = "<b>" + type[3] * type[6] + "</b>€";

  //Total -> bouton paiement 
  totalPrice = Number(totalPrice) + Number(type[3]);
  idBuyTotal.innerHTML = "Paiement: <b>" + Number(totalPrice) + "</b> €";
  //Si le prix total du panier est supérieur a 0, alors l'icône change, sinon elle redevient vide.
  if (totalPrice > 0) {
    idIconCart.innerHTML = `<img src="assets/img/cartfull.png" alt="Panier plein" style="width: 2.5em; height: 2.5em;">`
  } else {
    idIconCart.innerHTML = `<img src="assets/img/cartempty.png" alt="Panier Vide" style="width: 2.5em; height: 2.5em;">`
  }
}

//Fonction des boutons "moins" avec ajout total sur le prix du paiement.
function functionBtnDown(type) {
  let idResult = document.getElementById(`result${type[4]}`);
  let idnumber = document.getElementById(`number${type[4]}`);
  let idTable = document.getElementById(`table${type[4]}`);

  type[6]--;
  idnumber.innerHTML =
    `${type[6]}<br>
    <a class="btnplus" id="Up${type[4]}" onclick="functionBtnUp(${type[5]})"><img src="assets/img/plus.png" style="width: 2rem;" alt="plus"></a>
    <a class="btnmoins" id="Down${type[4]}" onclick="functionBtnDown(${type[5]})"><img src="assets/img/moins.png" style="width: 2rem;" alt="moins"></a>
  `;
  idResult.innerHTML = "<b>" + type[3] * type[6] + "</b>€";
  // Si le nombre de bouteille est égal à zéro, la ligne disparaît.
  if (type[6] < 1) {
    idTable.innerHTML = "";
  }
  //total -> bouton paiement
  totalPrice = Number(totalPrice) - Number(type[3]);
  idBuyTotal.innerHTML = "Paiement: <b>" + Number(totalPrice) + "</b> €";
  //Si le prix total du panier est supérieur a 0, alors l'icône change, sinon elle redevient vide.
  if (totalPrice > 0) {
    idIconCart.innerHTML = `<img src="assets/img/cartfull.png" alt="Panier plein" style="width: 2.5em; height: 2.5em;">`
  } else {
    idIconCart.innerHTML = `<img src="assets/img/cartempty.png" alt="Panier Vide" style="width: 2.5em; height: 2.5em;">`
  }
}