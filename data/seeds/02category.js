exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("category")
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("category").insert([
                {
                    name: "beer",
                    description: "hops based alcoholic bevrage",
                    img: "http://www.gillenscandies.com/wp-content/uploads/2017/09/Beer-Pour-Sq-300x300.jpg"
                },
                {
                    name: "wine",
                    description: "grape base alcoholic bevrage",
                    img: "https://cdn.24.co.za/files/Cms/General/d/7798/5d21ae38b4404e55859e1d3425c055ef.png"
                },
                {
                    name: "travel",
                    description: "visiting exoctic locations",
                    img: "http://jamadvice.eu/wp-content/uploads/2017/01/86482754-300x300.jpg"
                },
                {
                    name: "lacrosse",
                    description:
                        "traditional sport based on getting a ball in net with sticks",
                    img: "http://www.champion-athletes.com/wp-content/uploads/2017/06/Lacrosse-and-Field-Hockey-300x300.png"
                },
                {
                    name: "hockey",
                    description: "sport played on ice with nets",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhss8bLf1-wf0lupvK7a2xP0kxswHqS37lW_O3WLyRAqm5Pinc"
                },
                {
                    name: "soccer",
                    description: "sport played on a field with nets",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/1alessandromartinelli2015.jpg/300px-1alessandromartinelli2015.jpg"
                },
                {
                    name: "star wars",
                    description: "fictional space based film franchize",
                    img: "https://pixel.nymag.com/imgs/daily/vulture/2016/12/18/18-Star-Wars-Logo.w330.h330.jpg"
                },
                {
                    name: "boxing",
                    description: "combat sport involving strikes with hands",
                    img: "http://ringsidereport.com/wp-content/uploads/2015/03/tysonbrunouppercut.-300x300.jpg"
                },
                {
                    name: "Mixed Martial Arts",
                    description:
                        "combat sport involving strikes and grappeling",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0sRt6dsf_aQwS0IrnBIv9Aa3AwzEbo5MQfuP9MEslNVY1Okk"
                },
                {
                    name: "wrestling",
                    description:
                        "combat sport involving grappeling and pinning an opponent",
                    img: "https://www.piercecountyherald.com/sites/default/files/styles/square_300/public/1xHdJm33CbvEIutJfXFfyScFNaSSOlsN9.jpg?itok=igA6_6Ls"
                },
                {
                    name: "ping pong",
                    description:
                        "sport invilving vollying a plastic ball over a net against an opponent",
                    img: "https://store-images.s-microsoft.com/image/apps.27030.9007199266249390.3b1b5b78-2121-4c1a-adf1-c1565a19e842.fb3a60f4-2007-4e18-a390-4705aacd83ad?mode=scale&q=90&h=300&w=300"
                },
                {
                    name: "water polo",
                    description:
                        "sport involving throwing a ball into a net while swimming",
                    img: "https://www.floridawaterpolo.org/wp-content/uploads/2018/01/22861779_1703301583022909_531524336622283717_o-300x300.jpg"
                },
                {
                    name: "bowling",
                    description:
                        "sport involving knocking down pins with a weighted ball",
                    img: "http://static.keygames.com/games/assets/tiles/6/93766/52737/300x300_1-293670.jpg?r=0"
                },
                {
                    name: "tennis",
                    description:
                        "sport invilving vollying a ball over a net against an opponent",
                    img: "https://www.physiomed.co.uk/uploads/article/image/97/show_tennis-player.jpg"
                },
                {
                    name: "fortnite",
                    description: "first person shooter video game",
                    img: "https://d2bnntq9xv492y.cloudfront.net/cdn_pictures/deals/52460/large/fortnite-battle-royale-ps4-download.jpg?1506563825"
                },
                {
                    name: "call of duty",
                    description: "first person shooter video game",
                    img: "https://www.psu.com/app/uploads/2016/09/16-09-30-08-17_0_large_callofduty4_ps4news1.jpg"
                },
                {
                    name: "halo",
                    description: "first person shooter video game",
                    img: "https://img.zergnet.com/19606_300.jpg"
                },
                {
                    name: "world of warcraft",
                    description: "online role playing game",
                    img: "https://dvsgaming.org/wp-content/uploads/2016/02/20150807000716a0e61z82u0p2913j.jpg"
                },
                {
                    name: "runescape",
                    description: "online role playing game",
                    img: "https://assets.podomatic.net/ts/45/1d/6b/reprotted/300x300_10425766.jpg?1443892852"
                },
                {
                    name: "minecraft",
                    description: "online video game",
                    img: "https://static.makeuseof.com/wp-content/uploads/2012/11/minecrafthumb2.jpg"
                },
                {
                    name: "tetris",
                    description: "old school puzzle style video game",
                    img: "http://assets.funny-games.co.uk/games/assets/tiles/4/184/52977/tetris_300x300-122251.jpg?r=1514984508013"
                }
            ]);
        });
};
