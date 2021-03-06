const remoteURL = "http://localhost:5002"

 const APIManager = Object.create(null, {
    getData: {
        value: function (key, id) {
            return fetch(`${remoteURL}/${key}/${id}`).then(e => e.json())
        }
    },
    getAllData: {
        value: function (key) {
            return fetch(`${remoteURL}/${key}`).then(e => e.json())
        }
    },
    removeAndListData: {
        value: function (key, id) {
            console.log(id)
            
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "DELETE"
            })
            .then(() => this.getAllData(key)) 
        }
    }, 
    post: {
        value: function (newObject, key) {
            return fetch(`${remoteURL}/${key}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    },
    edit: {
        value: function (key, id, editedObject) {
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editedObject)
            }).then(e => e.json())
            .then(() => this.getAllData(key))
        }
    }
})     
export default APIManager;
