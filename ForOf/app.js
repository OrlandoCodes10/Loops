// const seatingChart = 
// //for (variable of iterable) {

//}

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.lenght; j++) {
        console.low(row[j])
    }
}