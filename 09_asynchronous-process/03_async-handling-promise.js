function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {

        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];
            
            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    });
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));


/*
Fungsi .catch() tidak akan terpanggil karena Promise tidak pernah berstatus rejected. 
Jika Anda ingin Promise menghasilkan status rejected, 
ubahlah nilai argumen pada pemanggilan getUsers() menjadi true.
*/