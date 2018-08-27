const remoteURL = "http://localhost:5002"

 const animalManger = Object.create(null, {
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
    removeAndList: {
        value: function (id) {
            return fetch(`http://localhost:5002/animals/${id}`, {
                method: "DELETE"
            })
            .then(() => this.getAllAnimals()) 
        }
    }
})     
export default animalManger;
