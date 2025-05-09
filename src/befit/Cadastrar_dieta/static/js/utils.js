function getRamdomInt(list) {
    return Math.floor(Math.random() * list.length + 1);
}

function getRandomItems(array, numItems) {
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    if (numItems > array.length) {
        return array;
    }
    shuffleArray(array);
    return array.slice(0, numItems);
}


class Hash {

    uuid() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    async sha1(message) {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-1', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

}

class Database {

    constructor(table) {
        this.table = table;
    }

    save(data) {
        const db = JSON.parse(localStorage.getItem(this.table)) || [];
        console.log('salvando', data);
        db.push(data);
        localStorage.setItem(this.table, JSON.stringify(db));
    }

    getAll() {
        return JSON.parse(localStorage.getItem(this.table)) || [];
    }

    getById(id) {
        const db = this.getAll();
        return db.find(item => item.id === id);
    }

    update(id, newData) {
        const db = this.getAll();
        const index = db.findIndex(item => item.id === id);
        if (index !== -1) {
            db[index] = { ...db[index], ...newData };
            localStorage.setItem(this.table, JSON.stringify(db));
        }
    }

    delete(id) {
        const db = this.getAll();
        const index = db.findIndex(item => item.id === id);
        if (index !== -1) {
            db.splice(index, 1);
            localStorage.setItem(this.table, JSON.stringify(db));
        }
    }

    clear() {
        localStorage.removeItem(this.table);
    }

}