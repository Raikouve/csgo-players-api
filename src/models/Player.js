const connection = require('./connection');

const getAll = async () => {
  try {
    const [ players ] = await connection.execute('SELECT * FROM players;');
    return players;
  } catch (error) {
    console.log(error);
  }
}

const getById = async (id) => {
  try {
    const [ player ] = await connection.execute('SELECT nickname, team, player_role, nationality, age FROM players WHERE id = ?;', [ id ]);
    return player;
  } catch (error) {
    console.log(error);
  }
}

const create = async (player) => {
  try {
    const result = await connection.execute('INSERT INTO players (nickname, first_name, last_name, team, player_role, nationality, age) VALUES (?, ?, ?, ?, ?, ?, ?);', [ player.nickname, player.firstname, player.lastname, player.team, player.role, player.nationality, player.age ]);

    return result;
  } catch (error) {
    console.log(error);
  }
}

const update = async (nickname, firstname, lastname, team, role, nationality, age, id) => {
  try {
    await connection.execute('UPDATE players SET nickname = ?, first_name = ?, last_name = ?, team = ?, player_role = ?, nationality = ?, age = ? WHERE id = ?;', [ nickname, firstname, lastname, team, role, nationality, age, id ]);
  } catch (error) {
    console.log(error);
  }
}

const remove = async (id) => {
  try {
    await connection.execute('DELETE FROM players WHERE id = ?;', [ id ]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};