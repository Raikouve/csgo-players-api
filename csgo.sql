CREATE DATABASE IF NOT EXISTS csgo;

    USE csgo;

    CREATE TABLE players
    (
        id INT NOT NULL AUTO_INCREMENT,
        nickname VARCHAR(30) NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        team VARCHAR(30) NOT NULL
        player_role VARCHAR(30) NOT NULL,
        nationality VARCHAR(100),
        age INT NOT NULL,
        PRIMARY KEY(id)
    );

    INSERT INTO players (nickname, first_name, last_name, team, player_role, nationality, age)

    VALUES ('karrigan','Finn','Andersen','FaZe','IGL', 'Denmark', 31),
        ('rain','Håvard','Nygaard','FaZe', 'Entry', 'Norway', 27),
        ('Twistzz','Russel','Van Dulken','FaZe', 'Support', 'Canada', 22),
        ('ropz','Robin','Kool','FaZe', 'Lurker', 'Estonia', 22),
        ('broky','Helvijs','Saukants','FaZe','Awper', 'Latvia', 21);

    UPDATE players SET player_role = 'Lurker' WHERE id = 4;