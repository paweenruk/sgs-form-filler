// ==UserScript==
// @name         SGS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Paweenruk Kotcharin
// @match        https://*.bopp-obec.info/sgs/TblTranscripts/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Your code here...
  document.addEventListener("paste", (evt) => {
    // (B1) CHANGE THE COPIED TEXT IF YOU WANT
    // evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");

    const data = evt.clipboardData.getData("text/plain").split("\n");

    const elementId = `#${evt.target.id}`;
    $(elementId).val(data[0]);
    $(elementId).trigger("change");
    console.log(`Set value '${data[0]}' at elementID '${elementId}'`)
    evt.preventDefault();

    let currentID = evt.target.id;
    const inputs = $('input:enabled');
    console.log(inputs);
    data.slice(1).forEach((score) => {
      for (let i = 0; i < inputs.length; i++) {
        if (currentID == inputs[i].id && i + 1 < inputs.length) {
          console.log(inputs[i + 1])
          inputs[i + 1].focus();
          $(inputs[i + 1]).val(score);
          $(inputs[i + 1]).trigger("change");
          console.log(`Set value '${score}' at elementID '${inputs[i + 1].id}'`)
          currentID = inputs[i + 1].id
          break;
        }
      }
    })


    // (B2) PREVENT THE DEFAULT COPY ACTION
  }, false);
})();
