
DROP DATABASE IF EXISTS foodordering_db;
CREATE DATABASE foodordering_db;
USE foodordering_db;

CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(100),
    mobile CHAR(10)
);

-- Insert sample users
INSERT INTO users (name, email, password, mobile) VALUES 
('Nilesh Ghule', 'nilesh@gmail.com', 'nilesh123', '9876543210'),
('Prashant Lad', 'prashant@gmail.com', 'prashant123', '9876543211'),
('Nitin Kudale', 'nitin@gmail.com', 'nitin123', '9876543212');

CREATE TABLE fooditems(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    price DECIMAL(7,2),
    description VARCHAR(300),
    image VARCHAR(100),
    type ENUM('Veg', 'NonVeg') DEFAULT 'Veg'
);

-- Insert sample food items
INSERT INTO fooditems(name, price, description, image, type) VALUES 
('Burger', 70, 'Very tasty veg burger', 'Burger.jpg', 'Veg'),
('Dosa', 80, 'Healthy light crape', 'Dosa.jpg', 'Veg'),
('Fries', 50, 'Potato fried chips', 'Fries.jpg', 'Veg'),
('Idli', 40, 'Very Healthy breakfast choice', 'Idli.jpg', 'Veg'),
('PaniPuri', 30, 'Spicy, sour and sweet', 'Panipuri.jpg', 'Veg'),
('PavBhaji', 100, 'Spicy and bit healthy', 'PavBhaji.jpg', 'Veg'),
('Chicken Burger', 120, 'Juicy chicken burger', 'ChickenBurger.jpg', 'NonVeg'),
('Butter Chicken', 220, 'Creamy butter chicken', 'ButterChicken.jpg', 'NonVeg'),
('Egg Curry', 150, 'Spicy egg curry', 'EggCurry.jpg', 'NonVeg'),
('Mutton Biryani', 280, 'Flavorful mutton biryani', 'MuttonBiryani.jpg', 'NonVeg');

CREATE TABLE orders(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    odate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deldate TIMESTAMP,
    total_amount DECIMAL(9,2),
    status ENUM('PENDING','PROCESSING','CANCELLED','DELIVERED') DEFAULT 'PENDING',
    FOREIGN KEY (uid) REFERENCES users(uid) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE orderdetails(
    oid INT,
    fid INT,
    quantity INT,
    PRIMARY KEY (oid, fid),
    FOREIGN KEY (oid) REFERENCES orders(oid) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (fid) REFERENCES fooditems(fid) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert orders with order details
INSERT INTO orders (uid, total_amount, status) VALUES 
(1, 190.00, 'DELIVERED');

INSERT INTO orderdetails (oid, fid, quantity) VALUES 
(1, 1, 2),  -- Order 1: 2 Burgers (70*2 = 140)
(1, 3, 1);  -- Order 1: 1 Fries (50*1 = 50) Total: 190

-- Update delivery date for delivered order
UPDATE orders SET deldate = NOW() + INTERVAL 30 MINUTE WHERE oid = 1;

INSERT INTO orders (uid, total_amount, status) VALUES 
(2, 370.00, 'PROCESSING');

INSERT INTO orderdetails (oid, fid, quantity) VALUES 
(2, 6, 2),  -- Order 2: 2 PavBhaji (100*2 = 200)
(2, 7, 1),  -- Order 2: 1 Chicken Burger (120*1 = 120) Total: 320
(2, 3, 1);  -- Order 2: 1 Fries (50*1 = 50) Total: 370

INSERT INTO orders (uid, total_amount, status) VALUES 
(1, 150.00, 'PENDING');

INSERT INTO orderdetails (oid, fid, quantity) VALUES 
(3, 9, 1);  -- Order 3: 1 Egg Curry (150*1 = 150) Total: 150

