---
layout: post
title: CS:GO A ‘Short’ Game Theory Analysis
---
If you’ve ever been interested in any esports, then you most definitely have come across ‘Counter Strike: Global Offensive’ (CS:GO). CS:GO is a very popular first-person shooter, released in 2011 to replace it’s predecessor ‘Counter Strike Source’, with just under 1 million concurrent players worldwide. There are multinational tournaments held with over $8.6 million in prize money released this year.

The following was written in 2019 for my class at the University of Toronto, Scarborough Campus, CSCC46: Social and Information Networks.

With well over 500 competitive teams all over the world, there are many people that make a living off of this esport. Now the question boils down to: what makes a team such as ‘Astralis’, currently the number one ranked team in the world, so successful in what they do? We will be taking a short glance into what a game analyst would need to look at to help teams make quick split second decisions to ensure that they have the best possible outcome for their team.

I will first give a quick rundown of how the game works. Two teams of 5 in-game players each face off for 30 rounds – or more if they tie at 15-15 – where each round lasts 1 minute and 55 seconds. In the first round, each player is awarded $800 to buy armor/utility grenades/weapons to help them win the round. Upon each kill, and outcome of the round, each player is awarded money to use for the following round. The two teams are split as Terrorists and Counter-Terrorists where the objective of the Counter-Terrorists is to hold and defend a ‘site’ – 2 per map – and the objective for Terrorists is to plant a bomb at a ‘site’ and ensure that it goes off before the round ends.

We will try to see what a game analyst would have to consider when doing their job. We will consider a key moment in the game: defending a site, and attacking a site. To make things simple, we will consider this game as having two players – Terrorists and Counter-Terrorists – and we will assign payouts similarly to a zero-sum game where players are awarded a sum of 1, representing their chances of winning the round. One thing to note is that there are many choices that a team can make – too many to really organize in a neat fashion. Such decisions go down to what equipment is bought/caried over from the previous round to a single footstep that is made in the game. The number one thing the game revolves around is information. Whichever team has the most information as to the other team’s status has control of the round.

<div class="container col">
    <figure class="text-center">
        <img class="img-fluid" src="/assets/images/blogposts/random/example-payout-matrix.png" alt="">
        <figcaption>
            Very basic payout matrix example.
        </figcaption>
    </figure>
</div>

The payout matrix seen above is an extremely rudamentary payout matrix of what a game analyst may build to help teams decide on what kind of strategy is the best strategy for them at any round. Now, in order to make this payout matrix more accurate a game analyst would have to tailor it to specific teams, as each player has an individual skill level. The ‘decisions’ are also not as simple as ‘Attack A’ or ‘Defend B’. There are many decisions that are made by each player in each round that may have an effect into rounds that follow. Each of these decisions would change your expected payout for the end of the round. Being able to identify the outcome of each decision that a player makes, and which further decisions will lead to the best outcome can determine the round. Now a players decision can also be because of some information that they have recieved of a decision from the other team within a round. This should also incoporated to ensure nothing is missed.

The purpose of this was to show how what we’re learning can be taken and applied to the real world and how professional gaming teams would nead data such as this to give them a better advantage over their opponents. Albeit, my example was extremely oversimplified against what a real payout matrix for a round would look like, I hope that my explanation showed how complex such payout matrices can get within the professional world, and more generally, just how such matrices are used professionaly.

# Bibliography

- https://www.statista.com/statistics/808630/- csgo-number-players-steam/
- https://esportsobserver.com/top10-prize-pools-h1-2019/
- https://www.gosugamers.net/counterstrike/rankings
- https://www.hltv.org/ranking/teams/2019/november/11
- https://counterstrike.fandom.com/wiki/Competitive
