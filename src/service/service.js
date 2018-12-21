import CallHandler from "./call-handler";

export default class Service {
    // noinspection JSUnusedGlobalSymbols
    start(telApi) {
        telApi.onCall((call, callApi) => new CallHandler(call, callApi, telApi));
    }
}
