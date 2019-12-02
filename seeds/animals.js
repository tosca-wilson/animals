
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'butterfly', nouns: 'swarm,flutter,kaleidoscope'},
        {id: 2, name: 'cats', nouns: 'clowder,glaring,pounce,destruction'},
        {id: 3, name: 'penguins', nouns: 'colony,convent,creche,raft,tuxedo'},
      ]);
    });
};
