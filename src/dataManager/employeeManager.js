const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getEmployee: {
        value: function (id) {
            return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
        }
    },
    getAllEmployees: {
        value: function () {
            return fetch(`${remoteURL}/employees`).then(e => e.json())
        }
    },
    deleteEmployee: {
        value: function (id) {
            fetch(`http://localhost:5002/employees/${id}`, {
                method: "DELETE"
            })
        }
    }
})   