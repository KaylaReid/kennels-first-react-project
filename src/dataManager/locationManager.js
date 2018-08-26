const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getLocation: {
        value: function (id) {
            return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
        }
    },
    getAllLocations: {
        value: function () {
            return fetch(`${remoteURL}/locations`).then(e => e.json())
        }
    },
    deleteLocation: {
        value: function (id) {
            fetch(`http://localhost:5002/locations/${id}`, {
                method: "DELETE"
            })
        }
    }
})   