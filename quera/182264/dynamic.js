const keyMapping = {
  "`": "Backquote",
  1: "Digit1",
  2: "Digit2",
  3: "Digit3",
  4: "Digit4",
  5: "Digit5",
  6: "Digit6",
  7: "Digit7",
  8: "Digit8",
  9: "Digit9",
  0: "Digit0",
  _: "Minus", // Assuming underscore is typed with Shift + Minus
  "=": "Equal",
  "⟵": "Backspace",
  Tab: "Tab",
  Q: "KeyQ",
  W: "KeyW",
  E: "KeyE",
  R: "KeyR",
  T: "KeyT",
  Y: "KeyY",
  U: "KeyU",
  I: "KeyI",
  O: "KeyO",
  P: "KeyP",
  "[": "BracketLeft",
  "]": "BracketRight",
  "\\": "Backslash",
  "Caps Lock": "CapsLock",
  A: "KeyA",
  S: "KeyS",
  D: "KeyD",
  F: "KeyF",
  G: "KeyG",
  H: "KeyH",
  J: "KeyJ",
  K: "KeyK",
  L: "KeyL",
  ";": "Semicolon",
  "'": "Quote",
  Enter: "Enter",
  "L Shift": "ShiftLeft",
  Z: "KeyZ",
  X: "KeyX",
  C: "KeyC",
  V: "KeyV",
  B: "KeyB",
  N: "KeyN",
  M: "KeyM",
  ",": "Comma",
  ".": "Period",
  "/": "Slash",
  "R Shift": "ShiftRight",
  "L Ctrl": "ControlLeft",
  "L Alt": "AltLeft",
  "R Alt": "AltRight",
  "R Ctrl": "ControlRight",
  Space: "Space",
};

const keys = document.querySelectorAll(".key");

const keyElements = {};
for (let i = 0; i < keys.length; i++) {
  const key = keys[i].textContent.trim();
  if (key === "") {
    keyElements["Space"] = keys[i];
  } else {
    keyElements[key] = keys[i];
  }
}

document.addEventListener("keydown", function (event) {
  const keyLabel = Object.keys(keyMapping).find(
    (key) => keyMapping[key] === event.code
  );
  if (keyLabel) {
    keyElements[keyLabel].classList.add("key--held");
  } else {
    console.log("Key down (unknown):", event.code);
  }
});

document.addEventListener("keyup", function (event) {
  const keyLabel = Object.keys(keyMapping).find(
    (key) => keyMapping[key] === event.code
  );
  if (keyLabel) {
    keyElements[keyLabel].classList.remove("key--held");
    keyElements[keyLabel].classList.add("key--selected");
  } else {
    console.log("Key up (unknown):", event.code);
  }
});
