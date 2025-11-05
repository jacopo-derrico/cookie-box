import { getCookiePurpose } from '../cookieDictionary.js';

// Get the active tab and retrieve its cookies
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    // Get cookies for the active tab
    chrome.cookies.getAll({ url: activeTab.url }, (cookies) => {
        displayCookies(cookies);
        console.log(cookies);

        // show number of cookies found
        const cookieCount = document.getElementById('cookie-number');
        cookieCount.innerHTML = cookies.length;
    });
});

// Function to display cookies in the table
function displayCookies(cookies) {
    const tbody = document.querySelector('table tbody');

    if (cookies.length === 0) {
        const row = tbody.insertRow();
        row.innerHTML = '<td colspan="3">No cookies found for this page</td>';
        return;
    }

    cookies.forEach((cookie, index) => {
        const row = tbody.insertRow(index);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        const purpose = getCookiePurpose(cookie.name);

        cell1.innerHTML = `<a class="me-2 link-underline link-underline-opacity-0" href="https://cookiedatabase.org/?s=${cookie.name}" title="Lookup on cookiedatabase.org" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </a>` +
            `<a class="me-2 link-underline link-underline-opacity-0 search-cookie" href="#" data-name="${cookie.name}" data-purpose="${purpose[0]}" data-partial="${purpose[1]}" title="Search with your default search engine" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </a>` + cookie.name;
        cell2.innerHTML = cookie.value;
        cell3.innerHTML = purpose[0];

        if (cookie.expirationDate || cookie.session === false){
            const expirationDate = new Date(cookie.expirationDate * 1000);
            let days = Math.round((expirationDate - new Date()) / (1000 * 60 * 60 * 24));
            if (days === 0) {
                days = 'Less then a day';
            } else {
                days = days.toLocaleString() + ' days';
            }
            cell4.innerHTML = days; 
        } else {
            const days = 'This session only';
            cell4.innerHTML = days; 
        }

        cell2.className = 'text-truncate';
    });
}

// Handle clicks on search-cookie links
document.addEventListener('click', (event) => {
    const link = event.target.closest('a.search-cookie');
    if (!link) return;
    event.preventDefault();
    const name = link.dataset.name;
    const purpose = link.dataset.purpose;
    const partial = link.dataset.partial;
    
    if (purpose === 'Unknown - Purpose not identified') {
        const query = `${partial || name} cookie purpose`;
        chrome.search.query({ text: query, disposition: 'NEW_TAB' });
    } else {
        const query = `${name} cookie purpose`;
        chrome.search.query({ text: query, disposition: 'NEW_TAB' });
    }
});