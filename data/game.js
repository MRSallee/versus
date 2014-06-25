
var metadata = {
        title: 'Master Chief Chooses Everything',
        categoryCount: 4,
        optionsCount: 3,
        countTimer1 : 6,
        countTimer2 : 6,
        option1: '&#8592;',
        option2: '&#8593;',
        option3: '&#8594;'
    },
    message = {
        start: 'Start the video above to begin playing the game.',
        countdown: 'Master Chief is arriving at his next choice...',
        vote: 'Vote to advance to the next poll.',
        verify: 'Master Chief\'s next choice arrives in...',
        verifyThanks: 'You completed the game. <b>Thanks for playing!</b>'
    },
    categories = {
        category1 : {
            name: 'Level 1',
            question: '<b>Which way</b> should Master Chief go?',
            thumbnail: 'http://assets1.ignimgs.com/2012/06/05/e32012halo4pvp7jpg-fdfc6f_610w.jpg',
            videoUrlNeutral: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-games-ign-versus',
            videoUrlIntro: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-games-ign-versus'
        },
        category2 : {
            name: 'Level 2',
            question: '<b>Which way</b> should Master Chief go?',
            thumbnail: 'http://assets1.ignimgs.com/2012/06/05/e32012halo4pvp6jpg-acfd9f_610w.jpg',
            videoUrlNeutral: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-tech-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-tech-microsoft-games-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-tech-sony-games-vote-ign-versus',
            videoUrlVote3: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-tech-nintendo-games-vote-ign-versus'
        },
        category3 : {
            name: 'Level 3',
            thumbnail: 'http://assets1.ignimgs.com/2012/06/05/e32012halo4spartanops4jpg-acfda0_610w.jpg',
            question: '<b>Which way</b> should Master Chief go?',
            videoUrlNeutral: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-overall-ign-versus',
            videoUrlVote1: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-overall-microsoft-tech-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-overall-sony-tech-vote-ign-versus',
            videoUrlVote3: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-overall-nintendo-tech-vote-ign-versus'
        },
        category4 : {
            name: 'You Win',
            question: 'You completed the game. <b>Congratulations</b>.',
            videoUrlVote1: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-finale-microsoft-overall-vote-ign-versus',
            videoUrlVote2: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-finale-sony-overall-vote-ign-versus',
            videoUrlVote3: 'http://www.ign.com/videos/2013/05/15/who-won-e3-2014-the-finale-nintendo-overall-vote-ign-versus'
        }
    };
