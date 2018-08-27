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
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "DELETE"
            })
            .then(() => this.getAllData(key)) 
        }
    }
})     
export default APIManager;
