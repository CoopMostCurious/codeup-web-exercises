const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(1000).then(() => console.log(`You'll see this after 1 second`));

