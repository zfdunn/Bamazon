DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(250) NULL,
    department_name VARCHAR(250) NULL,
    price DECIMAL NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Apple MacBook Air (13-inch retina display, 1.6GHz dual-core Intel Core i5, 128gb)", "Computers", 1099.99, 925);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("LG 34 inch Ultra-Wide Monitor", "Displays", 450, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Kingston 120gb A400 SSD 2.5 inch SATA 7MM SA400S37/120GB", "Computer Components",100, 199);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Samsung 32 inch Curved Monitor", "Displays", 230, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Apple iPad 2018 32gb 6th Gen", "Tablets", 249.00, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Fire HD 8 Tablet(8 inch Display, 16gb)", "Tablets", 79.99, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("AMD Ryzen 7 2700 Processor with Wraith Spire LED Cooler - YD2700BBAFBOX", "Computer Components", 198.48, 188);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Turtle Beach - Ear Force Recon 50x Stereo Gaming Headset - Xbox One Compatible", "Gaming", 29.95, 300);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("HyperX Cloud Flight - Wireless Gaming Headset, w/ Long Lasting Battery - Up to 30 hours of Use, Noise-Cancelling, Compatible w/ PS4-PC-PS4 Pro", "Gaming", 115, 99);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Western Digital 2tb Elements Portable External HD", "Computer Components", 59.99, 38);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("WD 10TB Elements Desktop Hard Drive - USB 3.0 - WDBWLGO100HBK-NESN", "Computer Components", 197.01, 31);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Intel Core i9-9900 Desktop Processor 8 Cores up to 5.0 GHz Turbo unlocked LGA1151 300 Series 95W", "Computer Components", 484.99, 294);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("2019 Lenovo ThinkPad Yoga 11e 11.6 inches Anti-Glare HD Touchscreen 2-in-1 Business Laptop - Intel Core i3-7100U, 128GB M.2 SSD, 8GB RAM, Windows 10 Pro", "Computers", 428.98, 1400);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'enter password here';