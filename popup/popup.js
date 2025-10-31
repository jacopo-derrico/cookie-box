import { getCookiePurpose } from '../cookieDictionary.js';

// Get the active tab and retrieve its cookies
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    console.log('Active tab URL:', activeTab.url);

    // Get cookies for the active tab
    chrome.cookies.getAll({ url: activeTab.url }, (cookies) => {
        console.log('Cookies found:', cookies);
        displayCookies(cookies);
    });
});

// Function to display cookies in the table
function displayCookies(cookies) {
    console.log('Displaying cookies:', cookies);
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

        cell1.innerHTML = cookie.name;
        cell2.innerHTML = cookie.value;
        cell3.innerHTML = getCookiePurpose(cookie.name);

        cell2.className = 'text-truncate';
    });
}

