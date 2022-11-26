import os from "os";
import {ItermPreferences} from "../iterm-preferences";
import {MacSoftware} from "@liangshen/mac-software";

export class Iterm extends MacSoftware<ItermPreferences> {
    constructor() {
        super(`${os.homedir()}/Library/Preferences/com.googlecode.iterm2.plist`);
    }
}
const iterm = new Iterm();
export default iterm;

export {ItermPreferences}
