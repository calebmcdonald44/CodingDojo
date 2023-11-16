INSERT INTO users (first_name, last_name)
VALUE ('Jane', 'Amsden'), ('Emily', 'Dixon'), ('Theodore', 'Dostoevsky'), ('William', 'Shapiro'), ('Lao', 'Xiu');

INSERT INTO books (title, num_of_pages)
VALUE ('C Sharp', 200), ('Java', 400), ('Python', 355), ('PHP', 275), ('Ruby', 160);

UPDATE books
SET title = 'C#'
WHERE id = 1;

UPDATE users
SET first_name = 'Bill'
WHERE id = 4;

INSERT INTO favorites (book_id, user_id)
VALUE (1, 1), (2, 1);

INSERT INTO favorites (book_id, user_id)
VALUE (1, 2), (2, 2), (3, 2);

INSERT INTO favorites (book_id, user_id)
VALUE (1, 3), (2, 3), (3, 3), (4, 3);

INSERT INTO favorites (book_id, user_id)
VALUE (1, 4), (2, 4), (3, 4), (4, 4), (5, 4);

SELECT first_name, last_name
FROM favorites
JOIN users ON users.id = favorites.user_id
WHERE book_id = 3;

-- skipped this one because the wording was vague

INSERT INTO favorites (book_id, user_id)
VALUE (2, 5);

SELECT title
FROM books
JOIN favorites ON favorites.book_id = books.id
WHERE user_id = 3;

SELECT first_name, last_name
FROM users
JOIN favorites ON favorites.user_id = users.id
WHERE book_id = 5;


