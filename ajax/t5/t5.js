const apiBaseUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const table = document.querySelector('table');
const dialog = document.querySelector('dialog');

async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

async function initRestaurants() {
    try {
        const restaurants = await fetchData(`${apiBaseUrl}/restaurants`);
        restaurants.sort((a, b) => a.name.localeCompare(b.name));

        for (const restaurant of restaurants) {
            const tr = document.createElement('tr');

            const nameTd = document.createElement('td');
            nameTd.textContent = restaurant.name;

            const addressTd = document.createElement('td');
            addressTd.textContent = restaurant.address;

            tr.append(nameTd, addressTd);

            tr.addEventListener('click', async () => {
                const highlightedRows = document.querySelectorAll('.highlight');
                for (const row of highlightedRows) {
                    row.classList.remove('highlight');
                }
                tr.classList.add('highlight');

                dialog.innerHTML = '<p>Loading restaurant details and menu...</p>';
                dialog.showModal();

                let menuCourses = [];
                let menuError = false;

                try {
                    const menuData = await fetchData(
                        `${apiBaseUrl}/restaurants/daily/${restaurant._id}/fi`
                    );
                    menuCourses = menuData.courses || [];
                } catch (err) {
                    console.error('Failed to fetch daily menu:', err);
                    menuError = true;
                }

                dialog.innerHTML = '';

                const title = document.createElement('h3');
                title.textContent = restaurant.name;

                const addressP = document.createElement('p');
                addressP.textContent = `Address: ${restaurant.address}`;

                const postalP = document.createElement('p');
                postalP.textContent = `Postal code: ${restaurant.postalCode}`;

                const cityP = document.createElement('p');
                cityP.textContent = `City: ${restaurant.city}`;

                const phoneP = document.createElement('p');
                phoneP.textContent = `Phone: ${restaurant.phone}`;

                const companyP = document.createElement('p');
                companyP.textContent = `Company: ${restaurant.company}`;

                const menuTitle = document.createElement('h4');
                menuTitle.textContent = "Today's Menu";

                let menuElement;
                if (menuError) {
                    menuElement = document.createElement('p');
                    menuElement.textContent = 'Could not load daily menu.';
                } else if (menuCourses.length === 0) {
                    menuElement = document.createElement('p');
                    menuElement.textContent = 'No menu available for today.';
                } else {
                    menuElement = document.createElement('ul');
                    for (const course of menuCourses) {
                        const li = document.createElement('li');
                        const price = course.price ? ` - ${course.price}` : '';
                        const diets = course.diets ? ` (${course.diets})` : '';
                        li.textContent = `${course.name}${price}${diets}`;
                        menuElement.appendChild(li);
                    }
                }

                const closeBtn = document.createElement('button');
                closeBtn.textContent = 'Close';
                closeBtn.addEventListener('click', () => {
                    dialog.close();
                });

                dialog.append(
                    title,
                    addressP,
                    postalP,
                    cityP,
                    phoneP,
                    companyP,
                    menuTitle,
                    menuElement,
                    closeBtn
                );
            });

            table.appendChild(tr);
        }
    } catch (error) {
        console.error('Error loading restaurants:', error);
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 2;
        errorCell.textContent =
            'Failed to load restaurants. Make sure Metropolia VPN is connected.';
        errorRow.appendChild(errorCell);
        table.appendChild(errorRow);
    }
}

initRestaurants();
