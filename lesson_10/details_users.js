let apiURL = 'http://jsonplaceholder.typicode.com/users/';


let url = new URL(location.href);
let id = url.searchParams.get('id');
console.log(id);

fetch(apiURL + id)
    .then(value => value.json())
    .then(value => {
        console.log(value);


        for (const user in value) {
            const userDiv = document.createElement('div');
            if (typeof value [user] !== 'object') {
                userDiv.innerText = `${user} --- ${value [user]}`
            } else {
                userDiv.innerText = `${user} :`;

                for (const Key in value [user]) {
                    const userKeyDiv = document.createElement('div');

                    if (typeof value [user] [Key] !== 'object') {
                        userKeyDiv.innerText = `${Key} -- ${value [user] [Key]}`;
                    } else {
                        userKeyDiv.innerText = `${Key} :`;

                        for (const element in value [user] [Key]) {
                            let divElement = document.createElement('div');
                            if (typeof value [user] [Key] [element] !== 'object') {
                                divElement.innerText = `${element} == ${value [user] [Key] [element]}`
                            }
                            userKeyDiv.append(divElement)
                        }
                    }
                    userDiv.append(userKeyDiv)
                }
            }
            document.body.append(userDiv)
        }
    })
