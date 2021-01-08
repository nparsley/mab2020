interface PostGateKeeper {
    title: string;
    daysOld: number;
    published: boolean;
}


const post = {
    title: 'latest typescript news',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: PostGateKeeper) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);