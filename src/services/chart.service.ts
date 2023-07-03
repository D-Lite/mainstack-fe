import http from "../http-common";

class ChartService {
    getPieData() {
        return http.get<object>("/");
    }
}

export default new ChartService();