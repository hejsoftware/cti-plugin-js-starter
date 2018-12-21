import { NotificationTypes } from "@hejsoftware/cti-plugin-lib";

export default class CallHandler {
    constructor(
        call, // Initial call state
        callApi,
        telApi,
    ) {
        this.state = {
            clickCount: 0,
        };

        // Listen to call updates either using observables
        callApi.callUpdate$.subscribe(() => void 0);

        // or callbacks
        callApi.onCallUpdate.addEventListener(() => void 0);

        // Same applies for UI events and the discard event
        callApi.event$.subscribe(() => void 0);
        callApi.onEvent.addEventListener(() => void 0);

        callApi.discard$.subscribe(() => void 0);
        callApi.onDiscard.addEventListener(() => void 0);


        // Button event handler
        callApi.onEvent.addEventListener((evt) => {
            if (evt.type !== "BTN_CLICKED") {
                return;
            }

            callApi.patchState(this.state = {
                clickCount: this.state.clickCount + 1,
            });

            telApi.showNotification(NotificationTypes.Info, "Button was clicked")
        });
    }
}
