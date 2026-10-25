---
slug: goldendog-and-ai
title: Goldendog and AI
description: Why Goldendog ships free of artificial intelligence, and why that choice belongs to you
authors: [alexia]
tags: [blog, goldendog, linux]
---

This is a strange time for operating systems. Almost every week brings a new assistant built into the taskbar, a feature that takes screenshots "to help you remember", or an agent that promises to organize your files for you. Artificial intelligence is no longer an application you choose to open; it has become another layer of the system, often enabled by default.

Amid all of this, I think it is important to state Goldendog's position clearly.

<!-- truncate -->

## The position

**Goldendog will not include any software that uses artificial intelligence, either directly or indirectly.**

This is neither an improvised decision nor a reaction to a trend. It follows naturally from what I wrote in [The Goldendog Manifesto](./2026-05-19-el-manifiesto-goldendog.md): an operating system should be silent, predictable, and stay out of your way. Goldendog is designed to be clean and as close to Debian as possible. An agent that watches, suggests, or acts on its own is, by definition, the opposite of "staying out of your way".

What I deliver is a system where nothing acts without your consent.

## I am not anti-AI

I want to be honest: I use artificial intelligence every day. It solves many problems for me, and I consider it a great assistant. But I always use it with a critical eye, reviewing what it gives back and knowing that the final responsibility is mine.

That is precisely why this position comes from respect, not rejection. If you want to install Claude Code, another command-line agent, or a local model on your Goldendog, you can. It is your machine. That decision is yours, not mine.

## The choice belongs to the user

I believe the most honest way to deliver a product is to let the end user decide whether or not to use AI on their operating system. Making that decision for them by preinstalling agents or enabling features they never asked for does not seem ethical to me.

It is like buying a house. You expect solid walls, running water, and working electricity. What you hang on the walls, the furniture you choose, whether you want a voice assistant in the kitchen: that is up to whoever lives there. Goldendog delivers the house; you decide the rest.

## And Debian

Debian, the foundation Goldendog is built on, went through this same debate this year. In August 2026 the community voted on the [General Resolution on LLM usage](https://www.debian.org/vote/2026/vote_002), and the winning option was clear: the project **neither endorses nor prohibits** the use of generative AI tools, and responsibility for every contribution always remains with the person.

Goldendog shares that spirit: neutrality toward the tool and human responsibility for how it is used. My way of applying it as a distribution is to ship a base system without AI, so that this neutrality is real and you are the one who decides.

## What about contributions?

What the system ships with is one thing; how it is built is another. When it comes to contributions to Goldendog, I do not have a fixed position on using AI to write them. I do not care whether a piece of code was written with the help of AI, as long as it meets the standard that an operating system demands, nothing more and nothing less.

What I will not accept is plagiarism. Any material submitted to become part of Goldendog must carry a free or permissive license that allows me to distribute it freely. If I cannot know where it comes from or under what terms it can be shared, it does not get in.

And there is one rule with no exceptions: **nobody submits compiled binaries to Goldendog.** You submit an open repository, subject to review. Compilation always happens on Goldendog's side, and only after the package has been thoroughly reviewed and deemed fit for distribution: no security risks, free of malware, viruses, and any other surprises.

Going back to the Schengen Area analogy: we trust the passport Debian issues, but anything that wants to enter through our own border goes through our own checkpoint. And that checkpoint does not care which tool you used, only what you are bringing in.

## In short

- Goldendog ships **AI-free**: no assistants, no agents, and no features that act without your permission.
- You are free to install any AI tools you want. Goldendog will not stop you.
- Contributions are judged by their quality and their license, not by the tool used to write them.
- Nothing arrives as a binary: everything is reviewed and built by Goldendog.
- Whether to use AI on your system is your choice. Always.

An operating system should accompany us, not decide for us.

— Alexia M. - Project Lead
