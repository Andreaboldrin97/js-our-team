
//* creo un array di oggetti gei componenti del team
const team = [
    {
        name : `Wayne Barnett`,
        role : `Founder & CEO	`,
        img : `wayne-barnett-founder-ceo.jpg`
    },
    {
        name : `Angela Caroll`,
        ruole : `Chief Editor`,
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
        img : `  scott-estrada-developer.jpg`
    },
    {
        name : `Barbara Ramos`,
        role : `Graphic Designer`,
        img : ` barbara-ramos-graphic-designer.jpg`
    },
]


//* creo un ciclo for dell'array per vedere index di ogni oggetto
for( let i = 0 ; i < team.length ; i++ ){
    
    
    console.log(`nome ${team[i].name} ruolo ${team[i].role} img ${team[i].img}`)
};