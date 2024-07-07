---
layout: docs
prelink: /docs/index
---


Hello Everybody! This is Alexia, your favourite benevolent dictator for life for GoldenDog Linux, and I thought it would be nice to share some of what's happening behind the scenes with GDL.

On saturday I built what I think would be the best .iso candidate for staging. All the tests were successful and my friend Carles from Spain has been testing it and installing it in a few of his machines.

I also did my part on a virtual machine and I am hoping to deploy it in a thinkpad laptop in the next few days for more thorough testing. 

While we do have a roadmap of things to check and test, there might be things we missed so we want to spend some time with it and try settings, installing things, removing things, breaking and repairing a few things
so we can get a feel of what users might expect.

## Release Date?
There's no release date yet, but it will be very soon. There are a few things I want to test out first. Right now I have given the latest .iso to a few colleagues and friends of mine to test out and report anything
Then there will be an open testing programme and once we're happy with that, there will be a public .iso
I am expecting this process to take no longer than 15 days, so the public release will happen during the first days of June 2024.

## Contributors

I'd love to have contributors to the project, but in order to do that I need to learn how can I put a Contributor Agreement in place that contributors have to sign, so while I'd love to have more helping hands, 
I'm not legally able to, right now. 

## Donations

The project will need some kind of funding and sponsorship, eventually. I need a download mirror and some small computing power to build a small development infrastructure. Right now I am trying to run this with money out of my own pocket, but this won't be sustainable in the long term,
 so I will probably place a paypal and a binance donation QR soon for anyone willing to contribute. 
I also need a webhosting plan with at least a 2 year contract so I could have hosted email mostly and not have to worry about it for a good while. 

If you think you could contribute with money or infrastructure or you know somebody who would like to sponsor this project please let me know. 


## Issues and Known Bugs

There's an issue with Calamares when trying to install GDL using LVM. This is an issue present in all Calamares versions independently of the Operating System. It is also broken in Debian's live .iso for example.
There are a few options I am considering to solve this:

- Wait for KDE to fix Calamares
- Deploy GDL with Ubiquity
- Produce a step-by-step video tutorial on how can you set LVM **_BEFORE_** You run the Calamares installer 
- Create a simple automated partitioning script to convert the target disk to LVM and then run the installer (same as above but automated and launched via script or TUI with options on partition name, sizes, vg name etc)

That's it for now, I guess!
I'm super happy about this and having quite a lot of fun!

If you have any questions or would like to donate or sponsor the project, send me an email to alexia@goldendoglinux.org, and thanks!!

Much love,

Alexia.




  