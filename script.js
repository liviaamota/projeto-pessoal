let option = ``
 // o projeto deve contar sobre posiçoes,regras e quantidade de jogadores.
const handball = {}
 do {
    option = prompt(`
    1 - handebool
    2 -  sair 

    `)
    
    switch (option){
        case '1': 
        handball.positions = alert('Existem cinco posições no handebool,quais delas são central,ponta,pivÔ,armação e goleiro')
        handball.rules = alert('Tempo de posse: não há limite de tempo, mas ataques passivos são penalizados. Substituições: as substituições de jogadores são ilimitadas .')
        handball.players = alert ('A quantidade de jogadores são sete,contando com o goleiro.')
             
           
            break
        case'2': 
        alert('Saindo, obrigado pela atenção ...')
    
    }
} while (option !== '2')

    