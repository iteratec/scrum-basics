/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch((e) => console.error(e));

let currentPopup: any = undefined;
const time = new Date().toLocaleTimeString("de-de", { timeStyle: "short" });
// const hours = today.getHours();
// const minutes = today.getMinutes();
// const time = `${hours < 10 ? `0${hours}` : hours}:${
//   minutes < 10 ? `0${minutes}` : minutes
// }`;

WA.room.onEnterZone("clock", () => {
  currentPopup = WA.ui.openPopup("clockPopup", time, []);
});

WA.room.onLeaveZone("clock", closePopUp);

function closePopUp() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}
