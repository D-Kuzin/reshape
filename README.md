# Introduction

This is the submission of the Frontend Challenge as part of the second round of interview at Reshape Biotech.

The challenge is provided as part of the following repository: [https://github.com/reshapebiotech/hiring/blob/main/frontend/README.md](https://github.com/reshapebiotech/hiring/blob/main/frontend/README.md)

## Running locally

It is recommended to run the command

```bash
nvm use
```

In order to ensure same versioning of node as used for this challenge. If nvm is not used, please make sure a suitable version of Node is installed.

Depending on your package manager install the packages and then run the development server using one of the following:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Release

This project has also been released on [https://reshape.kuzin.dk](https://reshape.kuzin.dk)

## Assumptions

Following assumptions has been done when developing the platform:

- It is assumed that the image and folder structure always has 2 images in the folder and the naming of the files within the folder always is bottom.jpeg, top.jpeg or gfp.jpg, such that we can correctly map the names to the correct label of the Figma design, e.g. "Top light" as well as icon. A fallback is in place if one of the 3 names are not present and will just use the file name itself instead.
- Minor user interaction designs has been added for better UX, such as hover, selected and active items which was not clearly labeled in the Figma
- Small UI additions to accomodate sidebar open / close functionality on smaller devices

## Blend mode clarification

The blend mode has been chosen to follow a opacity 70/30 split between the two images. The reason being that 50/50 wouldn't favor the swap order functionality, and that a 100/0 would just be a single view. Hence 70/30 would be the down the middle approach, to allow other functionalities to still bring value

## Choose your own adventure

A fourth view mode has been added that allows the user to modify the brightness of the image in a single view mode. The brightness can be adjusted in an increment of 20%
