import fs from 'fs';

const path = './db/data.json';

const guardarDB = (data) => {
    fs.writeFileSync(path, JSON.stringify(data));
};

const leerDB = () => {
    if (!fs.existsSync(path)) {
        return null;
    }
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
};

export {
    guardarDB,
    leerDB
}