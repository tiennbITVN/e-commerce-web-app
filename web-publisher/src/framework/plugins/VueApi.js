import axios from "axios";
import store from "@/framework/store";

export default class VueApi {
    static install(app, opt) {
        app.$api = new VueApi(app, opt);
        app.prototype.$api = app.$api;
    }

    constructor(opt) {
        this.token = opt.token;
        this.refreshToken = opt.refreshToken;
        this.authTyp = opt.authTyp;
        this.loginUrl = opt.loginUrl;
        switch(opt.authTyp) {
            case "Bearer": this.authStr = "Bearer "+opt.token; break;
            case "Basic": this.authStr = "Basic "+opt.token; break;
        }
    
        this.repos = axios.create({
            baseURL: "/api",
            // timeout: 5000,
            headers : {
                'Authorization': this.authStr
            }
        });
        this.repos.interceptors.request.use((config) => {
            console.log("Request", config);
            return config;
        }, (error) => {
            console.log("Request", error);
            if (error.code)
            return Promise.reject(error);
        });
        this.repos.interceptors.response.use((response) => {
            console.log(response);
            return response
        }, (error) => {
            console.log(error.response)
            switch(error.response.status) {
                case 401: window.location.assign(this.loginUrl); break;
                case 404: store.commit("showAlert", {
                    type: "error",
                    msg: `${error.response.status} ${error.response.statusText}`
                });
                break;
            }
            return Promise.reject(error);
        });
    }
    get(endpoint) {
        if(endpoint == undefined || endpoint.nm == undefined || endpoint.nm == "" || endpoint.ver == undefined || endpoint.ver == "") {
            console.error("Missing require parameter")
            return;
        }
        return this.repos.get(`${endpoint.nm}/${endpoint.ver}`);
    };
    post(endpoint, data) {
        if(endpoint == undefined || endpoint.nm == undefined || endpoint.nm == "" || endpoint.ver == undefined || endpoint.ver == "") {
            console.error("Missing require parameter")
            return;
        }
        return this.repos.post(`${endpoint.nm}/${endpoint.ver}`, data);
    };
    put (endpoint, data) {
        if(endpoint == undefined || endpoint.nm == undefined || endpoint.nm == "" || endpoint.ver == undefined || endpoint.ver == "") {
            console.error("Missing require parameter")
            return;
        }
        this.repos.put(`${endpoint.nm}/${endpoint.ver}`, data);
    };
    delete(endpoint, data) {
        if(endpoint == undefined || endpoint.nm == undefined || endpoint.nm == "" || endpoint.ver == undefined || endpoint.ver == "") {
            console.error("Missing require parameter")
            return;
        }
        this.repos.delete(`${endpoint.nm}/${endpoint.ver}`, data);
    };
}
