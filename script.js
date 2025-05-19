import {betsStructure, mainContainer} from "./dataStructure.js";
import {generateGroup} from "./utils.js";

mainContainer.insertAdjacentHTML("afterbegin",generateGroup(betsStructure));

document.body.append(mainContainer);