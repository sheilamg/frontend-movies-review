
-- the password is tiger123
-- they are all role: user
-- Insert users with UUIDs
INSERT INTO user (id, username, email, password, roleId) VALUES
(UUID(), 'user1', 'user1@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user2', 'user2@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user3', 'user3@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user4', 'user4@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user5', 'user5@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user6', 'user6@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user7', 'user7@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user8', 'user8@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user9', 'user9@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1),
(UUID(), 'user10', 'user10@example.com', '$2a$10$T5LOIUwAxZZuZWVuJSXeOur1cVZErizYdDeFl6nNjWdOp3pD6fFT2', 1);
