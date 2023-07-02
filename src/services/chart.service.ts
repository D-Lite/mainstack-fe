import http from "../http-common";
import { IPieData, IPieDataForLocation } from "../types/interfaces.types";

class ChartService {
    getPieData() {
        return http.get<object>("/");
    }
}

export default new ChartService();