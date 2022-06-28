
//* creo un array di oggetti gei componenti del team
const team = [
    {
        name : `Wayne Barnett`,
        role : `Founder & CEO	`,
        img : `wayne-barnett-founder-ceo.jpg`
    },
    {
        name : `Angela Caroll`,
        role : `Chief Editor`,
        img : `angela-caroll-chief-editor.jpg`
    },
    {
        name : `Walter Gordon`,
        role : `Office Manager	`,
        img : `walter-gordon-office-manager.jpg`
    },
    {
        name : `Angela Lopez`,
        role : `Social Media Manager`,
        img : `angela-lopez-social-media-manager.jpg`
    },
    {
        name : `Scott Estrada`,
        role : `Developer`,
        img : `scott-estrada-developer.jpg`
    },
    {
        name : `Barbara Ramos`,
        role : `Graphic Designer`,
        img : `barbara-ramos-graphic-designer.jpg`
    },
    {
        name : `Luigi Micco`,
        role : `tutor boolean`,
        img : `luigiMicco.jpeg`
    },
    {
        name : `Stefano Cappellini`,
        role : `tutor boolean`,
        img : `stefanoCappellini.jpeg`
    },
    {
        name : `Riccardo Petricca`,
        role : `teacher boolean`,
        img : `riccardoPetricca.jpeg`
    },
];

//? recupero l'elemento cards(contenitore delle card)
let cardContein = document.getElementById('card');


//* creo un ciclo for dell'array per vedere index di ogni oggetto
for( let i = 0 ; i < team.length ; i++ ){
    
    //porto in console il nome il ruolo e l'img di ogni elemento del team
    console.log(`nome (${team[i].name}) ruolo (${team[i].role}) img (${team[i].img})`)

    //! creo un elemento div
    let card = document.createElement('div');
    card.classList.add('col-4');

    //! creo il contenuto HTML con un Template literals 
    card.innerHTML= 
                    ` <div class="card m-3">
                        <img src="./img/${team[i].img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${team[i].name} </h5>
                            <p class="card-text">${team[i].role} </p>
                        </div>
                    </div> `
                            ;
    //! appendo l'elemento creato
    cardContein.append(card);
    
};


// elemento per creare una card preso da bootstrap

{/* <div class="card">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div> */}



