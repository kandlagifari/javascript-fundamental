// // Sample 1.2: Pola Callback //
// function getUsers(callback) {
//     // simulate network delay
//     setTimeout(() => {
//         const users = ['John', 'Jack', 'Abigail'];

//         callback(users);
//     }, 3000);
// }

// function usersCallback(users) {
//     console.log(users);
// }

// getUsers(usersCallback);



// Sample 1.2: Pola Callback //
function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }

    console.log('process success:', users);
}

getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline



// Sample 2: Callback Hell //
function getUserWeather(userId) {
    try {
        const user = getUser(userId);
        const weather = getWeather(user.location);
        return { ...user, ...weather };
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }