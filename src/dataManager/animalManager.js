const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getAnimal: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    getAllAnimals: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },
    deleteAnimal: {
        value: function (id) {
            fetch(`http://localhost:5002/animals/${id}`, {
                method: "DELETE"
            })
        }
    }
})     
