export default class View {
    constructor() {
        /**
         * @type HTMLButtonElement
         */
        this.myBtn = undefined;
    }

    // noinspection JSUnusedGlobalSymbols
    start(dispatch) {
        this.myBtn = document.getElementById("myBtn");
        this.myBtn.addEventListener("click", () => dispatch({
            type: "BTN_CLICKED",
        }));
    }

    // noinspection JSUnusedGlobalSymbols
    render({ clickCount }) {
        this.myBtn.innerText = `Clicked ${clickCount || 0} times`;
    }
}
