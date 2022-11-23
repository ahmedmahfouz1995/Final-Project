const baseUrl = "https://ej2services.syncfusion.com/production/web-services/api";
// get
export const get = (url) => fetch(url, {
    credentials: 'same-origin',
    mode: 'cors'
}).then((res) => res.json());

// add
export const add = (url, body) => fetch(url, {
    credentials: 'same-origin',
    mode: 'cors',
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
}).then((res) => res.json());


// update
export const put = (url, body) => fetch(url, {
    credentials: 'same-origin',
    mode: 'cors',
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
}).then((res) => res.json());


// delete
export const del = (url) => fetch(url, {
    credentials: 'same-origin',
    mode: 'cors',
    method: "delete"
}).then((res) => res.json());

