// create a fetch all and a fetch single function w/ async await (t/c block), have this be a named export

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-mt-web-pt/`;

// const COHORT = "2308-ftb-mt-web-pt";

export const fetchPlayers = async () => {
    try {
        const rsp = await fetch(`${API_URL}/players`)
        const json = await rsp.json();
        return json.data.players;
    } catch (err) {
        console.error(err)
    }
}


export const fetchSinglePlayer = async (playerId) =>{
    try {
        const rsp = await fetch(`${API_URL}/players/${playerId}`)
        const json = await rsp.json();
        return json.data.player;
    } catch (err) {
        console.log(err);
    }
}

export const  addPlayer = async (playerObj) =>{
    try {
        const rsp = await fetch(`${API_URL}/players`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playerObj)
        })
        const json = await rsp.json();

        return json.data.newPlayer;
    } catch (err) {
        console.error(err)
    }
}

export const removePlayer = async (playerId) =>{
    try {
        const rsp = await fetch(`${API_URL}/players/${playerId}`,{
            method: "DELETE"
        });
        const json = await rsp.json();
        return;
    } catch (err) {
        console.error
    }
}


// export {fetchAllPlayers, fetchSinglePlayer}

// destructuring

// paramaters are hypotheticals of a functions and the arguments are the actualizations of those parameters

// delete and add logic will need to go into here as well
