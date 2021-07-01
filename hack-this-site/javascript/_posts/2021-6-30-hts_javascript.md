---
layout: post
title: Hack This Site - Javascript
---

Welcome back to my walkthrough of hackthissite.org's CTF missions. I will be going through my thought process of how I solved these missions, and therefore also giving away the solutions. If you came across this to give you hints, watch out for spoilers! Good luck, have fun.

These mission are very simple and easy, thus I will consolidate all of the missions into one blog post.

# Idiot Test

I start off by inspecting the form to see how it regulates the password check. We can see that the button makes a call to the function `check()` that is defined in script tags right above the input field. Reading the script, we can see that it checks if the password is `cookies`. Thus, entering the password `cookies` completes the mission.

# Disable Javascript

The title of this mission is 'Disable Javascript', so before entering this mission, I will disable Javascript. Entering the mission, and inspecting the page source, we can see that if we were to have Javascript enabled, it would have simply redirected us to a 'failure page'. Otherwise, I click the link and complete the mission.

# Math time!

Inspecting the page source, we can see that the submit button redirects to another page with the escaped value of the input area. Above the input area we are shown some code that seems like if the length of the password entered is equal to 'moo', then the mission is passed. The variable declaration above can be used to determine the value of moo. We can conclude that:
```
moo = bar * 2
    = (foo % 8) * 2
    = ((5 + 6 * 7) % 8) *2
    = 14
```
Thus, entering any text of length 14 will complete the mission.

# Var?

Inspecting the page source, we can see that the submit button passes the input area text to a function called `check()`. This function is defined in the script tags directly above. This script matches the input against the word `moo`. Thus, entering `moo` will complete the mission.

# Escape!

Inspecting the page source, we can see that the submit button takes the input text and sends it to a function called `check()`. This function is defined in the script tags above. The script matches the input agains `unescape('%69%6C%6F%76%65%6D%6F%6F')`. The value of `unescape('%69%6C%6F%76%65%6D%6F%6F') == "ilovemoo"`. Thus, the password `ilovemoo` will complete this mission.

# go go away .js

Inspecting the page source, we can see that the submit button takes the input of the password and passes it to a function called `checkpass()`. Checking the lowest script tags - the ones with the Javascript written in it, rather than the tags that define a source - for a function named `checkpass()` because if it was defined it both places, the one that was the latest declaration would get presedence. The script tags do not contan this function. This meanst that it is defined in the file `checkpass.js`. Checking this file through the sources tab in my browser, I can see that it checks to see if the password is `moo pwns`. Thus entering this password would complete the mission.

# JS Obfuscation. FTW!

Inspecting the page source, we can see that the submit button checks whether the input is `j00w1n`. Thus this password would complete the mission.