# DAppNodeSDK
dappnodesdk is a tool to make as simple as possible the creation of new dappnode packages. It helps to initialize and publish an Aragon Package Manager Repo in the ethereum mainnet.

We have deployed a public APM (Aragon Package Manager) registry in which anyone can create their own APM repository: [public.dappnode.eth](https://etherscan.io/address/public.dappnode.eth)

## Install 

```
$ npm install -g @dappnode/dappnodesdk
```

## DEMO

<p align="center"><img src="/img/demo.gif?raw=true"/></p>

## Initialization
```
$ dappnodesdk init
```

## build 
Only generates the IPFS Hash to be able to install it without needing to create the APM Repo
```
$ dappnodesdk build
```

## Publish 
It does the build of the image and shows the necessary transaction to be able to publish the package. The first time will create the repository but the rest will be updates of it.

__To be able to update a repository you must be the authorized dev.__

the script increases the current version of the repository based on the specified type (patch, minor, major), unless a version hasn't yet been published

for more information about versioning check [semver](https://semver.org/)

```
$ dappnodesdk publish < patch | minor | mayor >
```
