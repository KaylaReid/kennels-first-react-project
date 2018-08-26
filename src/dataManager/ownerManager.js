const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getOwner: {
        value: function (id) {
            return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
        }
    },
    getAllOwners: {
        value: function () {
            return fetch(`${remoteURL}/owners`).then(e => e.json())
        }
    },
    deleteOwner: {
        value: function (id) {
            fetch(`http://localhost:5002/owners/${id}`, {
                method: "DELETE"
            })
        }
    }
})   