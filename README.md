<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gitlab.com/mvrska/realinfobox-frontend">
    <img src="https://static.wixstatic.com/media/232203_2da4c3c48b7c4e4faf2ea3c9d975b30d~mv2_d_2874_1686_s_2.png/v1/crop/x_0,y_106,w_2874,h_1473/fill/w_238,h_122,al_c,usm_0.66_1.00_0.01/Real%20Info%20Box%20LOGO_orange_Text.png" alt="Logo" width="150">
  </a>

  <p align="center">
    Developed specially for realtors.
    <br />
    <a href="https://gitlab.com/mvrska/realinfobox-frontend"><strong>Jump to the repo »</strong></a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contribution guildelines](#contribution-guidelines)
  - [Basic workflow](#basic-workflow)
  - [Gitflow](#gitflow)
    - [Merging tips](#merging-tips)
  - [Versioning](#versioning)
  - [Issue Tracking](#issue-trackig)
- [Release & Deployment](#release-&-deployment)
  - [Environments](#environments)
  - [Netlify](#netlify)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

This app is developed specifically for realtors and provides features such as Campaign Newsletters and Market Reports.

<br>

The goal is to provide the users with an easy to use and powerful app, which will help to collect data from various sources and transform them into easy to understand, beautiful reports.

### Built With

We currently use VueJS as the front-end framework of choice along with Nuxt.js for server-side rendering.

- [VueJS](https://vuejs.org)
- [Nuxt](https://nuxtjs.org)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

First, you'll need to install a few tools listed below.

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2. Install the NPM packages

```sh
yarn
```

3. Run the dev server

```sh
// the app will run on port 3000
yarn dev
```
IF FATAL listen EACCES: permission denied 127.0.0.1:3000
net stop winnat
net start winnat

## Contribution guidelines

To get you up and started in no time! 🚀

### Basic workflow

We use Git Flow (described as a separate section below) for keeping our git history in check. If you want to start contributing, then follow these basic steps:

1. Create your Feature Branch from the `staging` branch (`git checkout -b feature/AmazingFeature`). For Bugfixes use `fix/AwesomeFix`
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request (always merge into `staging`)

### Gitflow

<p align="center" margin-bottom="20">
<img src="https://miro.medium.com/max/1400/1*uUpzVOpdFw5V-tJ_YvgFmA.png" alt="GitFlow chart">
</p>

The basic idea is to deliver a product to the customers with as few bugs as possible. In order to achieve this, we have two development environments, called `master` and `staging`. <br><br>
New features are being developed strictly on the `staging` branch and after they are tested and approved, we merge them into the `master` branch as a part of a release. Please follow semantic versioning for each release.

#### Merging tips

- Always use `squash commit` if you're merging bugfix/features branches into `develop`
- Always use `merge commit` if you're creating a release

### Versioning

Given a version number _MAJOR.MINOR.PATCH_, increment the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards compatible manner, and
- PATCH version when you make backwards compatible bug fixes.

### Issue tracking

We use [Asana](https://app.asana.com/) for issue tracking, which you can find [here](https://app.asana.com/0/1163779302243353/1198962446813629).

## Release & Deployment

1. Create a `release-x.x.x` branch from develop
2. Merge into master with a `merge commit` <br>

Always create a detailed release on GitHub with a correct version tag, such the following: `v1.0.1`.

### Environments

As we mentioned previously, we use two environments:

- `master`, [which can be found here](https://app.realinfobox.com/)
- `staging`, [which can be found here](https://staging--realinfo-box.netlify.app/)

### Netlify

[Netlify](https://www.netlify.com/) is a CI/CD service which we use for our front-end deployment. Each branch is automatically release with a prefix: `branch-name--realinfo-box/netlify.app`. <br>
To gain the access rights, please contact Michal Vrska.

<!-- CONTACT -->

## Contact

- [Michal Vrska](https://www.linkedin.com/in/mikevrska/) - Back-end developer & project author
- [Matus Giertl](https://www.linkedin.com/in/mattgiertl/) - Front-end developer & maintainer

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Semantic versioning 2.0](https://semver.org)
- [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
