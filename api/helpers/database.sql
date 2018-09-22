-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 24, 2018 at 03:08 AM
-- Server version: 5.6.35
-- PHP Version: 7.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `everythingshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `ordercode` varchar(255) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `customer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`createdAt`, `updatedAt`, `id`, `ordercode`, `total`, `country`, `street`, `city`, `state`, `zip`, `status`, `customer`) VALUES
(1531733787227, 1531733787227, 1, 'qflM4mplNU', 12500, 'Nigeria', '12 Lagos street', 'Ikeja', 'Lagos', '223333', 'pending', 16),
(1531733899509, 1531733899509, 2, 'N0qLb5Wl2p', 45000, 'nigeria', '11111111', 'yoyo', 'lagos', '123', 'pending', 11),
(1531733938118, 1531733938118, 3, 'kUB2Edzhui', 45000, 'nigeria', '11111111', 'yoyo', 'lagos', '123', 'pending', 11),
(1531733956390, 1531733956390, 4, '8JOh8gUlAK', 45000, 'nigeria', '11111111', 'yoyo', 'lagos', '123', 'pending', 11),
(1531733966473, 1531733966473, 5, '39Rh2yAQ71', 12500, 'Nigeria', '12 Lagos street', 'Ikeja', 'Lagos', '223333', 'pending', 16),
(1531734001955, 1531734001955, 6, 'QAqc7KRI7k', 45000, 'niueria', '11111111', 'yoyo', 'lagos', '123', 'pending', 11),
(1531734212624, 1531734212624, 7, 'PyDs04Euam', 12500, 'Nigeria', 'kjhg', 'kjhg', 'Ogun', 'loijh', 'pending', 16),
(1531735173772, 1531735173772, 8, 'fbkoZCGzly', 12500, 'Nigeria', 'kjhg', 'lkjhg', 'Lagos', 'kjh', 'pending', 16),
(1531735406416, 1531735406416, 9, '4rLOXIRHHb', 12500, 'Nigeria', 'lkjhgf', 'kjhgv', 'Lagos', 'kjhvb', 'pending', 16),
(1531735446246, 1531735446246, 10, '6Df4r4Ikz5', 12500, 'Nigeria', 'gvfc', 'sss', 'Lagos', 'ssss', 'pending', 16),
(1531735480938, 1531735480938, 11, 'EUjt4aR8tW', 12500, 'Nigeria', 'kljhgf', 'kjhgf', 'Lagos', 'hgfdxfgh', 'pending', 16),
(1531802005310, 1531802005310, 12, 'c2EvYimWpb', 12500, 'Nigeria', '12 Lagos Street', 'Ikeja', 'Lagos', '9999', 'pending', 16),
(1532042151386, 1532042151386, 13, 'hjtIdQslya', 14000, 'Nigeria', 'Str', 'City', 'Lagos', 'Zip', 'pending', 17),
(1532042339549, 1532042339549, 14, '7xDBmdGVnS', 14000, 'Nigeria', 'jh', 'vghjk.,l', 'Lagos', 'kjhghjk', 'pending', 17),
(1532042397968, 1532042397968, 15, 'mryMR0qLl0', 14000, 'Nigeria', 'jh', 'vghjk.,l', 'Lagos', 'kjhghjk', 'pending', 17),
(1532042467735, 1532042467735, 16, 'kdskYVQhFV', 14000, 'Nigeria', 'jh', 'vghjk.,l', 'Lagos', 'kjhghjk', 'pending', 17),
(1532062027695, 1532062027695, 17, 'y86XPZrG7U', 5500, 'Nigeria', 'Street', 'City', 'Lagos', 'Zip', 'pending', 17),
(1532062498119, 1532062498119, 18, 'mqTlWfNwej', 12500, 'Nigeria', 'street', 'city', 'Lagos', 'zip', 'pending', 18),
(1532062720971, 1532062720971, 19, 'QLlQ8GxXOC', 62500, 'Nigeria', 'street', 'city', 'Lagos', 'zip', 'pending', 19),
(1532062919822, 1532062919822, 20, 'cUYe1zAezI', 62500, 'Nigeria', 'street', 'city', 'Lagos', 'zip', 'pending', 19),
(1532063379712, 1532063379712, 21, '52STGwsRTO', 5500, 'Nigeria', 'Street', 'City', 'Lagos', 'zipppp', 'pending', 19),
(1532063835994, 1532063835994, 22, '6JdrFvyztl', 25000, 'Nigeria', 'Street', 'City', 'Lagos', 'Zip', 'pending', 19),
(1532063990337, 1532063990337, 23, 'cSg6jre8gf', 50000, 'Nigeria', 'jhg', 'kjh', 'Lagos', 'kjhg', 'pending', 19),
(1532276628012, 1532276628012, 24, 'o4SD0XAZO1', 14000, 'Nigeria', '12 Third Mainland Way, Dolphin Estate', 'Ikoyi', 'Lagos', '0000', 'pending', 19),
(1532325081043, 1532325081043, 25, 'Dq4ljLG8th', 28000, 'Nigeria', '12 Lagos Streer', 'Dolphin Estate, Ikoyi', 'Lagos', '234', 'pending', 20),
(1532330676197, 1532330676197, 26, 'L8vHsxx7Yp', 28000, 'Nigeria', '12 Lagos Street', 'Dolphin Estate, Ikoyi', 'Lagos', '234', 'pending', 20),
(1532331786717, 1532331786717, 27, 'pN6Zs6AKzc', 28000, 'Nigeria', '12 Lagos Street', 'Ikoyi', 'Lagos', '234', 'pending', 20),
(1532332067062, 1532332067062, 28, '2pSDfjVQ8W', 28000, 'Nigeria', '12 Lagos Street', 'Ikoyi', 'Lagos', '234', 'pending', 20),
(1532332105484, 1532332105484, 29, 'cJWeEK5vc7', 28000, 'Nigeria', '12 Lagos Street', 'Ikoyi', 'Lagos', '234', 'pending', 20),
(1532332331894, 1532332331894, 30, 'VvfzgnPX2z', 28000, 'Nigeria', '12 Lagos Street', 'Ikoyi', 'Lagos', '234', 'pending', 20),
(1532332349686, 1532332349686, 31, 'TvmFD2ITwl', 28000, 'Nigeria', '12 Lagos Street', 'Ikoyi', 'Lagos', '234', 'pending', 20),
(1532332464186, 1532332464186, 32, 'NYWjvtz5cj', 28000, 'Nigeria', 'iii', 'ddd', 'Lagos', 'ddddd', 'pending', 19),
(1532332501391, 1532332501391, 33, 'iHDps5ei39', 28000, 'Nigeria', '12 Lagos Street', 'Ikoyi', 'Lagos', '234', 'pending', 20),
(1532332662729, 1532332662729, 34, 'qEzsbHO94v', 12500, 'Nigeria', 'fdfgh', 'kkjhg', 'Lagos', 'jhg', 'pending', 19);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`createdAt`, `updatedAt`, `id`, `name`, `description`, `sku`, `imageUrl`, `price`) VALUES
(1531043623387, 1531043623413, 3, 'Prism Palette - ABH', 'A luxe holiday eye shadow collection, Anastasia Beverly Hills Prism Palette features 14 shades that range from universal neutrals to prismatic metallics. Full pigment formula Fourteen shades including ultra-matte, duo chrome, and metallic finishes', 'QiSJ06pxf4-3', './src/assets/images/abh_prism.jpg', 14000),
(1531043885480, 1531043885496, 4, 'Sugar Glow Kit - ABH', 'A collection of four metallic powder highlighters for intense luminosity. Layer shades of Anastasia Beverly Hills Glow Kit or apply separately on face and body for a radiant glow. Ideal for use with Brush A23. Mix with Hydrating Oil for a body glow.', 'Ek57zv9VLC-4', './src/assets/images/abh_sugarkit.jpg', 12500),
(1531044093182, 1531044093190, 5, 'Liquid Lipstick - Bohemian', 'This cult-favorite liquid lipstick packs intense pigment, glides easily on the lips, and stays put for a long-wearing matte look. Featuring a flat sponge-tip applicator, the Anastasia Beverly Hills Liquid Lipstick applies full-coverage, opaque color preci', '8QsUCPGCSM-5', './src/assets/images/abh_liquid_lipstick.jpg', 5500);

-- --------------------------------------------------------

--
-- Table structure for table `productordered`
--

CREATE TABLE `productordered` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `quantity` double DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productordered`
--

INSERT INTO `productordered` (`createdAt`, `updatedAt`, `id`, `quantity`, `order`, `product`) VALUES
(1530577397379, 1530577397394, 1, 2, 15, 1),
(1530577397379, 1530577397394, 2, 21, 15, 1),
(1530578193375, 1530578193397, 3, 2, 16, 1),
(1530578193375, 1530578193397, 4, 21, 16, 1),
(1530578226579, 1530578226599, 5, 2, 17, 1),
(1530578226579, 1530578226599, 6, 21, 17, 1),
(1530578242066, 1530578242091, 7, 2, 18, 1),
(1530578242066, 1530578242091, 8, 21, 18, 1),
(1530579095737, 1530579095763, 9, 2, 19, 1),
(1530579095737, 1530579095763, 10, 21, 19, 1),
(1530579108659, 1530579108679, 11, 2, 20, 1),
(1530579108659, 1530579108679, 12, 21, 20, 1),
(1530579419957, 1530579419985, 13, 2, 21, 1),
(1530579419957, 1530579419985, 14, 21, 21, 1),
(1530579483179, 1530579483202, 15, 2, 22, 1),
(1530579483179, 1530579483202, 16, 21, 22, 1),
(1530579557274, 1530579557295, 17, 2, 23, 1),
(1530579557274, 1530579557295, 18, 21, 23, 1),
(1531733899520, 1531733899562, 19, 2, 2, 1),
(1531733899520, 1531733899562, 20, 21, 2, 1),
(1531733938129, 1531733938154, 21, 2, 3, 1),
(1531733938129, 1531733938154, 22, 21, 3, 1),
(1531733956402, 1531733956428, 23, 2, 4, 1),
(1531733956402, 1531733956428, 24, 21, 4, 1),
(1531734001973, 1531734001994, 25, 2, 6, 1),
(1531734001973, 1531734001994, 26, 21, 6, 1),
(1531735480958, 1531735480982, 27, 1, 11, 4),
(1531802005358, 1531802005406, 28, 1, 12, 4),
(1532042151396, 1532042151426, 29, 1, 13, 3),
(1532042339566, 1532042339582, 30, 1, 14, 3),
(1532042397981, 1532042397998, 31, 1, 15, 3),
(1532042467747, 1532042467767, 32, 1, 16, 3),
(1532062027722, 1532062027753, 33, 1, 17, 5),
(1532062498130, 1532062498157, 34, 1, 18, 4),
(1532062720984, 1532062721006, 35, 5, 19, 4),
(1532062919837, 1532062919854, 36, 5, 20, 4),
(1532063379725, 1532063379745, 37, 1, 21, 5),
(1532063836008, 1532063836029, 38, 2, 22, 4),
(1532063990347, 1532063990365, 39, 4, 23, 4),
(1532276628080, 1532276628142, 40, 1, 24, 3),
(1532325081060, 1532325081097, 41, 2, 25, 3),
(1532331786741, 1532331786784, 42, 2, 27, 1),
(1532331786741, 1532331786784, 43, 21, 27, 1),
(1532332464211, 1532332464242, 44, 2, 32, 3),
(1532332501422, 1532332501443, 45, 2, 33, 3),
(1532332662741, 1532332662764, 46, 1, 34, 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`createdAt`, `updatedAt`, `id`, `firstname`, `lastname`, `phonenumber`, `email`, `password`) VALUES
(1532062643961, 1532062643961, 19, 'Nenne', 'Nwodo', '+2348105854911', 'nennenwodo@gmail.com', '$2b$10$q5/F1hIADX1/euYWZhWIjugRWXPPqLXuuIBfYjVGyzY.u1PbaV0CC'),
(1532323660635, 1532323866407, 20, 'Adaora', 'Nwodo', '+2348067831120', 'nennenwodo@icloud.com', '$2b$10$bdqj3yF7hQaV114LjhEyK.ex6zWo/WlLgT7KsJxXy089gl8P70D3.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `ordercode` (`ordercode`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `productordered`
--
ALTER TABLE `productordered`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `phonenumber` (`phonenumber`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `productordered`
--
ALTER TABLE `productordered`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;