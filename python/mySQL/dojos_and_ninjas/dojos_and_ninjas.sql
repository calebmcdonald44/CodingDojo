INSERT INTO dojos (name)
VALUE ('Cobra Kai'), ('Miyagi Do'), ('Rex Kwon Do');

DELETE FROM dojos
WHERE id > 0;

INSERT INTO dojos (name)
VALUE ('Cobra Kai'), ('Miyagi Do'), ('Rex Kwon Do');

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUE ('Johnny', 'Lawrence', 18, 4), ('Daniel', 'LaRusso', 17, 4), ('Napoleon', 'Dynamite', 18, 4);

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUE ('Caleb', 'McDonald', 25, 5), ('Michael', 'Cunningham', 24, 5), ('Jesse', 'Parsons', 25, 5);


INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUE ('Raj', 'Jarvis', 5, 6), ('Rolo', 'McDonald', 4, 6), ('Robbie', 'Jucht', 5, 6);

SELECT *
FROM ninjas
WHERE dojo_id = 4;

SELECT *
FROM ninjas
WHERE dojo_id = 6;

SELECT dojo_id
FROM ninjas
WHERE id = 9;

SELECT *
FROM ninjas
JOIN dojos ON ninjas.dojo_id = dojos.id
WHERE ninjas.id = 6;

SELECT *
FROM ninjas
JOIN dojos ON ninjas.dojo_id = dojos.id;




