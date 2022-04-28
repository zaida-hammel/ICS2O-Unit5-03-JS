// Created by: Zaida Hammel
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  });
}

/**
 * This function determines if a person is eligible for movie rates.
 */
