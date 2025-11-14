# ☕🚀 JazuSoft: FrontEnd

<img src="https://angular.io/assets/images/logos/angular/angular.svg" align="left" width="192px" height="192px"/>
<img align="left" width="0" height="192px" hspace="10"/>

> ⚡ Installation guide

## 💡 Introduction

This is a repository intended to serve as a frontend for projects.

## 🧱 Requirements

- Install npm & node: `More info [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)`
- Install npx: `More info [here](https://www.npmjs.com/package/npx)`
- Windows tools: `npm install -g windows-build-tools`

## 🏁 How To Start

1. Make your settings: `cp src/environments/environment-example.ts src/environments/environment.ts`
2. Add configuration: `nano src/environments/environment.ts`.
3. Update npm dependencies: `npm install --force`.
4. Run: `npm start`
5. Start developing!

## ☝️ How to update dependencies

- Update dependencies: `npm install --force`

## 💡 Related repositories

- Componentes: https://ng.ant.design/components/overview/en

## 💡 Utils commands

##### Make new page

<pre><code>ng g module pages/resource --route resource/:idResource/resource2/:idResource2 --module app.module</code></pre>

##### Make new components

<pre><code>ng g component components/resource-parent/resourceChild --style=scss</code></pre>

> IMPORTANT: Add the new component inside components array in components.module

## ☕ Deploy

### Development

<pre><code>npm run push:dev</code></pre>
