let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

console.log(total);
console.log('--------------------');

for (let review of reviews){
    console.log(review);
}

//Growable arrays
console.log('Growable arrays');
reviews.push(0);

for (let review of reviews){
    console.log(review);
}
