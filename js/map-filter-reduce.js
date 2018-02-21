const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

const triples = users.filter(user => user.languages.length > 2);

const emails = users.map(user => user.email);

const usersAsObj = users.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

/*

array.reduce((array, keyField) => {
    obj[item[keyField] = item;
    return obj;
    }, {});

*/