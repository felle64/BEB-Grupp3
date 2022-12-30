import initPage from "./printModules/initPage.js";
import initUsers from "./userModules/initUsers.js";
import initBlockchain from "./chainModules/initBlockchain.js";
import validateChain from "./chainModules/validateChain.js";
import autoBetter from "./chainModules/mockData/autoBetter.js";

await initBlockchain();
await initUsers();
await initPage();
await validateChain();
autoBetter();