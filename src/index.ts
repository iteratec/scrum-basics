/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import { Popup } from "@workadventure/iframe-api-typings/Api/iframe/Ui/Popup";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch((e) => console.error(e));

let currentPopup: any = undefined;
let hasCompletedTutorial = false;
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

let tutorialIndex = 0;
const tutorial = [
  "Use the curser keys to move around.",
  "Walk up to another player to start an A/V call.",
  "Up to 4 players can talk that way.",
  "Some areas start a video conference, where more than 4 players can talk.",
  "Now find out which door opens for you!",
];

function playTutorial(popup: Popup) {
  popup.close();
  tutorialIndex++;
  if (tutorialIndex < tutorial.length) {
    WA.ui.openPopup("popupTutorial", tutorial[tutorialIndex], [
      { label: "Got it!", callback: playTutorial },
    ]);
  } else {
    WA.controls.restorePlayerControls();
    hasCompletedTutorial = true;
  }
}

WA.room.onEnterZone("start", async () => {
  if (!hasCompletedTutorial) {
    await WA.onInit();
    WA.controls.disablePlayerControls();
    WA.ui.openPopup("popupTutorial", tutorial[tutorialIndex], [
      {
        label: "Got it",
        callback: playTutorial,
      },
    ]);
  }
});

function closePopUp() {
  if (currentPopup !== undefined) {
    currentPopup.close();
    currentPopup = undefined;
  }
}
