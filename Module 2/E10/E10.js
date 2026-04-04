'use strict';

const candidate_count = Number(prompt('Enter number of candidates'));

const candidates = [];

for (let i = 0; i < candidate_count; i++) {
  const candidate_name = prompt(`Enter name for candidate ${i + 1}`);

  const candidate = {
    name: candidate_name, votes: 0,
  };

  candidates.push(candidate);
}

const voter_count = Number(prompt('Enter number of voters'));

for (let i = 0; i < voter_count; i++) {
  const vote = prompt('Who would you like to vote for?');

  if (vote === '') {
    continue;
  }

  for (let candidate of candidates) {
    if (candidate.name === vote) {
      candidate.votes++;
      break;
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

console.log('results:');

for (let candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}