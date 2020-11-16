import axios from "axios";

// this is the API call
export default {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};
