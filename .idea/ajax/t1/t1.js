async function getUser() {
    try {
        const response = await fetch('https://reqres.in/api/users/1', {
            headers: {
                'x-api-key': 'reqres-free-v1',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Virhe haettaessa käyttäjää:', error);
    }
}

getUser();