import http from 'k6/http';
import crypto from 'k6/crypto';

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.randomBytes(1)[0] & 15 >> c / 4).toString(16)
    );
}

export default function () {
    var id = uuidv4();
    http.get('http://localhost:8080/service/' + id);
}