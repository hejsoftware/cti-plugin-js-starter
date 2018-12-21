import { startView } from "@hejsoftware/cti-plugin-lib";
import View from "./view";

startView(new View())
    .catch(console.error);
