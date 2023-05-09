const express = require('express')
const app = express()
const PORT = 8000

const players = {
    'king james': {
        'birthName': 'Lebron James',
        'birthLocation': 'Akron, Ohio',
        'currentTeam': 'Los Angeles Lakers'
    },

    'steph curry': {
        'birthName': 'Wardell Stephen Curry II',
        'birthLocation': 'Akron, Ohio',
        'currentTeam': 'Golden State Warriors'
    },

    'joker': {
        'birthName': 'Nikola Jokic',
        'birthLocation': 'Sombor, Serbia',
        'currentTeam': 'Denver Nuggets' 
    },

    'embiid': {
        'birthName': 'Joel Embiid',
        'birthLocation': 'Yaounde, Cameroon',
        'currentTeam': 'Los Angeles Lakers'
    },

    'dame dolla': {
        'birthName': 'Damian Lamonte Ollie Lillard Sr.',
        'birthLocation': 'Oakland, California',
        'currentTeam': 'Portland Trailblazers'
    },

    'luka': {
        'birthName': 'Luka Doncic',
        'birthLocation': 'Ljubljana, Slovenia',
        'currentTeam': 'Dallas Mavericks'
    },

    'kd': {
        'birthName': 'Kevin Durant',
        'birthLocation': 'Washington, DC',
        'currentTeam': 'Phoneix Suns'
    },

    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'currentTeam': 'unkwown'
    }
}
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response)=>{
    const playerName = request.params.name.toLowerCase()
    if(players[playerName]){
        response.json(players[playerName])
    }else{
        response.json(players['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})