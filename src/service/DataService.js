import axios from "axios";

const URL = " http://18.116.41.137:8001/projects";

class DataService {
  getData() {
    return axios.get(URL);
  }
  getDatabyId(id) {
    return axios.get(URL + "/" + id);
  }
}

export default new DataService();
