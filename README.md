# [colorgen](https://builtbynabil.github.io/colorgen)
##### by builtbynabil

gradient background generator app created using Vue

## Instructions
- Input both colors and then press the apply or press the randomize button which will create a random background
- Press the top of the page to hide the form
- Screenshot and crop and make it as your new wallpaper

## Version naming convention
### The new version naming convention is applied after Version 1.021
The version naming convention is [maj_u].[min_u][mini_u]

##### [maj_u]
Major Update
Major update to the website / website technology overhaul

##### [min_u]
Minor Update
Little features being added / new button added

##### [mini_u]
Mini Update
Mini changes to the website / Typo error or user interface improvements

## Todos
- [x] Improve the site in terms of UX and UI
- [ ] Make users able to save images [Right click or hold to save image]
- [x] Better interface to hide the color form [Nothing to do about it]
- [ ] Integrate color pickers

## Version 1.22
- [x] Changed the instructions page
- [x] Generates random background on the instructions page
- [x] Hiding the white box works on the instructions page

## Version 1.021
- [x] Link a instruction page
- [x] Added box shadow to the white block
- [x] Change `"#" + Math.random().toString(16).slice(2, 8);` to `"#" + Math.random().toString(16 + Math.random() * 0.9).slice(2, 8);` so that it will randomly generate slightly more colors

## Version 1.02
- [x] When you visit the page, the randomly generated background color codes will show in the input boxes
- [x] Changed the site to be a gradient generated background app
- [x] Make Reverse Inputs that applied to the randomly generated background!
- [x] Change the Reverse Inputs button text to Reverse.

## Version 1.01
- [x] Make so that everytime the user visits the site, it will generate a random gradient background
- [x] Make Reverse Inputs