-- Insert genres
INSERT INTO genre (name) VALUES
('Action'),
('Adventure'),
('Animation'),
('Biography'),
('Comedy'),
('Crime'),
('Documentary'),
('Drama'),
('Family'),
('Fantasy'),
('History'),
('Horror'),
('Music'),
('Mystery'),
('Romance'),
('Sci-Fi'),
('Sport'),
('Thriller'),
('War'),
('Western');

-- Insert movies
INSERT INTO movie (title, description, release_date, image) VALUES
('The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 1994, 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'),
('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 1972, 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg'),
('The Dark Knight', 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', 2008, 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg'),
('Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 1994, 'https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg'),
('Schindler\'s List', 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 1993, 'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg'),
('The Lord of the Rings: The Return of the King', 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', 2003, 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Fellowship_Of_The_Ring.jpg'),
('Fight Club', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.', 1999, 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg'),
('Forrest Gump', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.', 1994, 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg'),
('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', 2010, 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg'),
('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 1999, 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'),
('The Silence of the Lambs', 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer, a madman who skins his victims.', 1991, 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg'),
('Star Wars: Episode V - The Empire Strikes Back', 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.', 1980, 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'),
('Braveheart', 'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.', 1995, 'https://upload.wikimedia.org/wikipedia/en/5/55/Braveheart_imp.jpg'),
('Back to the Future', 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.', 1985, 'https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg'),
('Jurassic Park', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 1999, 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'),
('Se7en', 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.', 1995, 'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg'),
('Avatar', 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 2009, 'https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg'),
('The Social Network', 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.', 2010, 'https://upload.wikimedia.org/wikipedia/en/7/7a/Social_network_film_poster.jpg'),
('Mad Max: Fury Road', 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.', 2015, 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg'),
('Coco', 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.', 2017, 'https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg');
-- Add more movie records similarly...

INSERT INTO movie_genre (movieId, genreId) VALUES
(1, 8), (1, 18),   -- The Shawshank Redemption - Drama, Thriller
(2, 6), (2, 8),    -- The Godfather - Crime, Drama
(3, 1), (3, 18),   -- The Dark Knight - Action, Thriller
(4, 6), (4, 18),   -- Pulp Fiction - Crime, Thriller
(5, 11), (5, 18),  -- Schindler's List - History, Thriller
(6, 1), (6, 2),    -- The Lord of the Rings: The Return of the King - Action, Adventure
(7, 8), (7, 18),   -- Fight Club - Drama, Thriller
(8, 8), (8, 16),   -- Forrest Gump - Drama, Romance
(9, 1), (9, 16),   -- Inception - Action, Sci-Fi
(10, 1), (10, 16), -- The Matrix - Action, Sci-Fi
(11, 6), (11, 8), -- The Silence of the Lambs - Crime, Drama
(12, 1), (12, 2), -- Star Wars: Episode V - The Empire Strikes Back - Action, Adventure
(13, 4), (13, 8), -- Braveheart - Biography, Drama
(14, 5), (14, 16), -- Back to the Future - Comedy, Sci-fi
(15, 2), (15, 16), -- Jurassic Park - Adventure, Sci-fi
(16, 8), (16, 14), -- Se7en - Drama, Mystery
(17, 2), (17, 10), -- Avatar - Adventure, Fantasy
(18, 4), (18, 8), -- The Social Network - Biography, Drama
(19, 1), (19, 8), -- Mad Max: Fury Road - Action, Adventure
(20, 3), (20, 8); -- Coco - Animation, Drama
-- Add relationships for remaining movies...