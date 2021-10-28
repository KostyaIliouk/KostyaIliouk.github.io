---
layout: post
title: The Effects of a Broken Network
---

“We cannot stop natural disasters but we can arm ourselves with knowledge: so many lives wouldn’t have to be lost if there was enough disaster preparedness.” – Petra Nemcova (4)

The following was written in 2019 for my class at the University of Toronto, Scarborough Campus, CSCC46: Social and Information Networks.

The world has finally begun to act in preventing climate change. Unfortunately, the damage has already been done, and what are defined as natural disasters have seen a dramatic increase within the past 50 or so years (1).

Something that I know for a fact I take for granted, and I’m sure many others do as well, is our infrastructure that we have within Toronto. Such infrastructure includes: our road systems, power grid, drainage systems, sewage system, internet lines, and many more. Thankfully, Toronto is situated in a very key geological region where we do not see many natural disasters such as hurricanes, floods, or forest fires; but many highly densely populated areas of the world are in these danger zones (2).

One of the reasons as to why these disasters can become so catastrophic in terms of monetary damage, and for the local population, is due to the effects that they have on the local infrastructure. There are times when even a failure of a key piece of infrastructure can cause such an event – such as a dam breaking (3). Without access to this infrastructure, locals are unable to deliver aid to the afflicted, or even worse, notify residents of certain events that can put them in danger or affect them in some way.

Thankfully, the local population usually has some kind of remediation plan set in place that would help mitigate the damage. Although these infrastructure systems are built to be resilient, they are not immune.

How does any of this relate back to what we’ve been discussing within CSCC46 you may ask yourself? As we’ve already explored, infrastructures such as the internet can be treated as a network. I will now introduce a network that has not yet been covered by the course: a lattice network. You may think of it as a matrix where each index is a node that has edges connecting to its direct index neighbours, as well as, the index one level above and one level below. In mathematical terms we can conceptualize this as the following: For a given nxn matrix A, an index a_(i,j) has an edge to the following set {a_(i, j – 1), a_(i, j + 1), a_(i + 1, j), a_(i – 1, j)}. Back to the original question, many infrastructure systems can be plotted using such a lattice network, think of road systems, sewage systems, or power grids as examples.

When speaking about such a lattice network, a natural disaster has the capability of breaking such a lattice structure, thus disabling the local infrastructure. Such an event is called a localized attack. I came across a very interesting article (Inspiration) that explored recovery assessments of such networked infrastructure under such an attack. Understanding the best way – in terms of efficiency, cost, and possibly human lives – to repair such a network can prove to be quite useful when it comes to planning ahead. This ‘best way’ is what is referred to as resilience.

<div class="container col">
    <figure class="text-center">
        <img class="img-fluid" src="/assets/images/blogposts/random/infrastructures.png" alt="">
        <figcaption>
            Example of a fragmented network post attack.
        </figcaption>
    </figure>
</div>

The article explores different recovery strategies that would be able to recover from such an event, as demonstrated in the image below. The Periphery Recovery strategy targets the most populous nodes – in terms of people served – before going to repair the attacked node – we will call this the root node. The Preferential Recovery strategy targets nodes that that have edges leading to the most populous nodes. And lastly, the Localized Recovery strategy that assigns a certain max weight w to the root node, and then some weight w – d where d is the distance away from the root node and basically works in a Dijkstras’ fashion to repair the root node as the target in hopes of restoring the full network.

<div class="container col">
    <figure class="text-center">
        <img class="img-fluid" src="/assets/images/blogposts/random/infrastructures-1.png" alt="">
        <figcaption>
            Recovery strategies.
        </figcaption>
    </figure>
</div>

The article further explores something called the resilience metric Φ which is used to analyze the resilience of a network given some localized attack and can be used to create a resilience-based optimization model – using the strategies listed above – in comparison to some existing network.

<div class="container col">
    <figure class="text-center">
        <img class="img-fluid" src="/assets/images/blogposts/random/infrastructures-2.jpg" alt="">
        <figcaption>
            Example of a water distribution network.
        </figcaption>
    </figure>
</div>

An example was given where a water distribution system was used to demonstrate such an analysis. Meant to stop propagation of issues resulting from the failure of the water distribution shortage and to bring back the system in the most efficient way to ensure its resilience is maximized.

I won’t bore you with the math, but this was simply a small look at the potential that network analysis can have to strengthen existing infrastructure and understand how to maximize it’s resilience towards localized attacks which can be the difference between life and death during a natural disaster.

I end this blog post with some parting thoughts. Our infrastructure that we’ve put in place is responsible for getting you your water, your heat, your electricity, that most of us take for granted. If such a localized attack were to occur as result of a natural disaster, or other means, our number one priority should be in restoring this network to ensure it has no further cascading negative effects on it’s populous.

Inspiration: Afrin, T., & Yodo, N. (2019). Resilience-Based Recovery Assessments of Networked Infrastructure Systems under Localized Attacks. Infrastructures, 4(1), 11.

# Citations:

1. Hannah Ritchie and Max Roser (2019) – “Natural Disasters”. Published online at OurWorldInData.org. Retrieved from https://ourworldindata.org/natural-disasters
2. Dillinger, Jessica. (2018, September 26). Countries Most Prone to Natural Disasters. Retrieved from https://www.worldatlas.com/articles/countries-with-the-deadliest-natural-disasters.html
3. CNN Wire Staff. (2010, July 24). Dam fails in eastern Iowa, causing massive flooding. Retrieved from http://www.cnn.com/2010/US/07/24/iowa.dam.breach/index.html
4. Petra Nemcova Quotes. (n.d.). BrainyQuote.com. Retrieved October 24, 2019, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/petra_nemcova_426837
