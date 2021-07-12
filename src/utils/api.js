// const BASE_URL = 'http://localhost/api.makescents/';
const BASE_URL = 'https://api.makescents.com.au/';
export const getUID = (formID, options, callback) => {
    let url = `${BASE_URL}index-quote.php?action=uid&form-id=${formID}`;
    for (const item in options) {
        url = `${url}&${item}=${options[item]}`;
    }
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => callback('unknown'));
};

export const getJWT = (data, callback = () => {}, error = () => {}) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('Accept', 'application/json');
    var urlencoded = new URLSearchParams();
    urlencoded.append('action', 'jwt');
    urlencoded.append('data', JSON.stringify(data));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
    };
    fetch(`${BASE_URL}index-quote.php`, requestOptions)
        .then((response) => response.text())
        .then((result) => callback(result))
        .catch((err) => error(err));
};
