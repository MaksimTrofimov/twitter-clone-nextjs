const name = 'noname';
const time = '2h';
const username = 'nonameuser';
const comment = 1;
const retweet = 2;

export function addFakeTweetData(tweet) {
  return {
    ...tweet,
    name: name,
    time: time,
    username: username,
    comment: comment,
    retweet: retweet,
  };
}

export function addFakeTweetsData(tweetsData) {
  if (!tweetsData?.posts) return [];
  return tweetsData.posts.map((tweet) => ({
    ...tweet,
    name: name,
    time: time,
    username: username,
    comment: comment,
    retweet: retweet,
  }));
}
