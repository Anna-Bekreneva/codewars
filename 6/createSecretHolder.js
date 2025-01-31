// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2

function createSecretHolder(secret) {

    let currentSecret = secret

    const getSecret = () => {
        return currentSecret
    }

    const setSecret = (secret) => {
        currentSecret = secret
    }

    return {getSecret, setSecret}
}

obj = createSecretHolder(5)
console.log(obj.getSecret())
obj.setSecret(2)
console.log(obj.getSecret())