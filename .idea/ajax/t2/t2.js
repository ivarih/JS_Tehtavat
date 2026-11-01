async function createUser() {
    try {
        const newUser = {
            name: 'Matti Meikäläinen',
            job: 'Ohjelmistokehittäjä',
        };

        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1',
            },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Virhe käyttäjän luonnissa:', error);
    }
}

createUser();
