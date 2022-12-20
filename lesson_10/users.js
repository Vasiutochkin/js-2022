//зробити файл users.html
//з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачіввивести їх
//id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача
//(всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
            for (const user of users) {

                const ul = document.createElement('ul');
                ul.classList.add('user-box');

                let li = document.createElement('li');
                ul.append(li);

                let a = document.createElement('a');
                a.innerText = `${user.id} ${user.name}`;
                a.href = 'details.html?id=' + user.id;
                li.appendChild(a);

                ul.append(li);
                document.body.append(ul);

            }

        }
    );