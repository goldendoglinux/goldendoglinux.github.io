---
slug: happy-holidays
title: Happy Holidays
authors: [alexia]
tags: [blog, news]
---

Hello everyone, Alexia here, this is the mind behind GoldenDog Linux. In these last two years, both on Instagram and YouTube, I think the most recurring comment has been: "When is GoldenDog Linux coming out?"

And believe me, every time I saw that comment, I thought: "One day I'll have to release a public version."

If you saw the [About](/about) page where I tell a bit about the history of GoldenDog Linux, you'll surely realize that this is a project that has been in development for years. Many!

And although it has never been abandoned, it has gone through stages where my attention was not focused on it.

In 2023, I finished functional version 1 of GoldenDog Linux. And since then, I've been using it as my daily driver on my personal machines.

Two years have passed, and I've managed to collect a lot of data on things I like, things I wish to change, and things I thought I could improve.

I still hesitate to make it public, but I think the time has come.

Possibly some of the people who install GoldenDog Linux will think: "But this has nothing!" and that is precisely one of the strongest points of GoldenDog Linux.

It is not a distro designed to decide for you what to use, but rather it gives you the freedom to use whatever you want.

The biggest advantages are precisely those that are not seen at first glance: a robust engine, a versatile installer, a desktop like Plasma that has been in development for several decades and is magnificent in terms of utility and performance.

There are projects that bring a lot of pre-installed software, but it is very difficult to prune them of all the garbage they bring by default; and in some cases, getting out of the pre-installed software and adding applications is not as simple as it seems.

Then there is the other case: hyper-minimalist projects that bring nothing but to which nothing can be installed easily either.

GoldenDog tries to be a much more balanced project in that sense:

It brings no bloat; it brings nothing that is not essential for the system to function. But at the same time, it offers the freedom to install whatever you want. And the universe of software available, largely thanks to Debian, is of astronomical dimensions compared to other ecosystems.

I think of my users; I like to treat them as people who are not foolish and do not like to be spoon-fed. I bet on the fact that anyone can install any application and configure it if they are offered clear and detailed documentation to achieve their goal.

So, one of the strong points of GoldenDog in the coming months will be that: clear and detailed documentation so that anyone can install and configure any application they desire.

## The Refactor, the Engine, and the Kernel

GoldenDog 1 suffered from the same ills as the vast majority of Debian clones that are floating around out there. It used a Debian Live ISO as a platform, just like the rest.

They are distros that all seem cut from the same cloth. They all use Calamares as an installer, they all bring several GBs of applications that interest no one, and as I mentioned before, cleaning the distro of everything not needed is arduous and tedious work.

GoldenDog 2, on the other hand, is conceived in a different way, with a different base. Unlike 90% of Debian clones, it does not use a Live ISO; it is based on the minimal platform. This offers users a clean, robust environment, without excessive nonsense. It offers you a clean and ready landscape for you to build whatever you want, without fear of falling into *dependency hell* or problems inherent to incompatibilities of any kind.

This new GoldenDog engine will also allow me to fulfill a great dream of mine: **GoldenDog Server**. Something I have wanted to achieve for a long time and that the previous platform simply could not offer.

From a technical standpoint, GoldenDog 1 and 2 have nothing in common; in fact, you cannot update from one to another. They are different engines. They do retain the same look and feel, but under the hood, they are completely different beasts.

GoldenDog 2 brings a Wayland session by default (although it also includes X11), a more modern kernel, backports by default, a more versatile installer, and a more robust desktop environment.

But I insist on what I said before: I don't want to dump a cartload of apps on it that no one cares about just to make it seem "fuller," but rather I want users to find something clean and reliable that allows them to decide what to install and what not.

I don't have an exact release date yet, but all the "hard" part is ready. Now there remains a few more days of evaluation, collecting some feedback from ongoing private tests, and then it's out.

Something also to note is that GoldenDog 1 grew to be a 7GB .iso, while GoldenDog 2 is an 876MB ISO. There has been a complete shift in vision, professionalism, and efficiency in the best sense of the way throughout the road traveled, and I hope it is reflected when you install it.

Have a very happy holiday season, and see you next year!
