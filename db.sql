-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 25, 2023 at 04:11 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam4`
--
CREATE DATABASE IF NOT EXISTS `exam4` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `exam4`;
--
-- Database: `mysql_metro`
--
CREATE DATABASE IF NOT EXISTS `mysql_metro` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `mysql_metro`;

-- --------------------------------------------------------

--
-- Table structure for table `Accounts`
--

CREATE TABLE `Accounts` (
  `AccountID` varchar(255) NOT NULL,
  `CustomerCode` varchar(255) NOT NULL,
  `CompanyName` varchar(255) NOT NULL,
  `CompanyAddress1` varchar(255) NOT NULL,
  `CompanyAddress2` varchar(255) NOT NULL,
  `ContactPerson` varchar(255) NOT NULL,
  `Mobile` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `TaxID` varchar(255) NOT NULL,
  `BillingCharge` decimal(5,2) NOT NULL,
  `AccountStatus` tinyint(1) NOT NULL,
  `DateModify` datetime NOT NULL,
  `ModifiedBy` varchar(255) NOT NULL,
  `CreatedBy` varchar(255) NOT NULL,
  `DateCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Accounts`
--

INSERT INTO `Accounts` (`AccountID`, `CustomerCode`, `CompanyName`, `CompanyAddress1`, `CompanyAddress2`, `ContactPerson`, `Mobile`, `Email`, `TaxID`, `BillingCharge`, `AccountStatus`, `DateModify`, `ModifiedBy`, `CreatedBy`, `DateCreated`) VALUES
('12345678', 'ee12345678', 'test_e1', 'test_e1', 'test_e1', 'test_e1', '0987654312', 'rew_2@gmail.com', '12345678', 123.00, 0, '2023-07-11 02:40:12', 'Athichanan Lertliangchai', 'Setthanan Thongpanchang', '2023-07-11 13:03:10'),
('123456782', 'ee12345678112', 'test1', 'r', 'test_e1', 'test_e1', '0987654312', 'rew_2@gmail.com', 'test_e1', 1.00, 1, '2023-07-11 09:42:15', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:42:15'),
('12345678dwdw', 'dw', 'wdw', 'wdwdw', 'dwdwdwd', 'dwdw', '0912222222', 'wdw@wdw.com', 'd', 1.00, 0, '2023-07-11 09:41:52', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:41:52'),
('ABC123', 'CUST001', 'Company A', 'Address 1', 'Address 2', 'John Doe', '1234567890', 'john.doe@example.com', 'TAX123', 100.50, 1, '2023-07-11 09:30:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('BCD890', 'CUST010', 'Company J', 'Address 19', 'Address 20', 'Olivia Davis', '9990001111', 'olivia.davis@example.com', 'TAX890', 70.45, 0, '2023-07-11 18:00:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('DEF456', 'CUST002', 'Company B', 'Address 3', 'Address 4', 'Jane Smith', '9876543210', 'jane.smith@example.com', 'TAX456', 75.20, 0, '2023-07-11 14:45:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('fff', 'fff', 'fff', 'fff', 'fff', 'fff', '0987654312', 'fff@feffa.com', 'wwd', 12.00, 1, '2023-07-11 09:42:39', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:42:39'),
('GHI789', 'CUST003', 'Company C', 'Address 5', 'Address 6', 'Michael Johnson', '5551234567', 'michael.johnson@example.com', 'TAX789', 150.75, 1, '2023-07-11 17:20:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('jiojoijijoijoijiojijijoijiojiojijiojijoijoijiojiojiojioj22', 'jiojoijijoijoijiojijijoijiojiojijiojijoijoijiojiojiojioj1', 'jiojoijijoijoijiojijijoijiojiojijiojijoijoijiojiojiojioj', 'jiojoijijoijoijiojijijoijiojiojijiojijoijoijiojiojiojioj', 'jiojoijijoijoijiojijijoijiojiojijiojijoijoijiojiojiojioj', 'jojiojiojiojiojijoijiojiojijiojiojjijiojoijoi', '0987654312', 'rewojojojojojojojo_2@gmail.com', 'test_e1', 0.10, 1, '2023-07-19 14:22:50', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-19 14:23:52'),
('JKL012', 'CUST004', 'Company D', 'Address 7', 'Address 8', 'Sarah Davis', '4449876543', 'sarah.davis@example.com', 'TAX012', 80.90, 0, '2023-07-11 10:15:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('last', 'last', 'rew', 'r', 'test_e1', 're', '0987654312', 'rew_2@gmail.com', '12345678', 1.00, 1, '2023-07-11 09:57:43', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:57:43'),
('Material Table	d', 'Material Table	d', 'test_e1', 'fefef', 'fe', 'fe', '0987654312', 'rew_2@gmail.com', '9', 2.00, 1, '2023-07-11 09:41:24', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:41:24'),
('Material Table', 'Material Table', 'Material Table', 'Material Table', 'Material Table', 'Material Table', '0987654312', 'rew_2@gmail.com', '12345678', 0.10, 1, '2023-07-11 09:08:27', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:08:27'),
('MNO345', 'CUST005', 'Company E', 'Address 9', 'Address 10', 'David Wilson', '7775554444', 'david.wilson@example.com', 'TAX345', 120.25, 1, '2023-07-11 13:00:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('pppfkpfkpekfpekfefefeffef', 'kpkpkpkpkpk', 'pkpkpkpkpkpkpkpkp9876543218676376763726732673627362767QQQQQQQQ', 'pkpkpkpkpkpkpkpkfwff9', 'pkpkpkpkpkpkpkp', 'kpkpkpkpkpkpkpk', '0987654312', 'rew_2@gmail.comi', 'r', 1.00, 1, '2023-07-19 14:15:34', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-19 14:15:53'),
('PQR678', 'CUST006', 'Company F', 'Address 11', 'Address 12', 'Emily Johnson', '0813123442', 'emily.johnson@example.com', 'TAX678', 90.80, 0, '2023-07-11 00:00:00', 'Setthanan Thongpanchang', 'Admin', '2023-07-19 11:54:11'),
('re1345671323123123', 'erwfwefwp[kw[pkpwekfp[kw', 'kf[kpk[pkp[k', 'kpkp[kp[kp[k[pk', 'p[kpkpk[pk[p', 'pkp[kp[kp[kp[', '0912222222', 'rew_2@gmail.comi', '12345678', 1.00, 1, '2023-07-19 14:22:16', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-19 14:22:16'),
('rrewffwf', 'fef', 'test_e1', 'test_e1', 'r', 'test_e1', '0987654312', 'rew_2@gmail.comi', 'test1', 12.00, 1, '2023-07-11 09:40:39', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:40:39'),
('STU901', 'CUST007', 'Company G', 'Address 13', 'Address 14', 'Robert Davis', '1112223333', 'robert.davis@example.com', 'TAX901', 135.60, 1, '2023-07-11 11:45:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('success', 'success', 'success', 'success', 'success', 'success', '0987654312', 'success@hmg.com', '1esuccess', 0.10, 0, '2023-07-10 10:14:15', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-10 17:16:34'),
('testaz', 'testaz', 'testaz', 'testaz', 'testaz', 'testaz', '0987654312', 'testaz@mao.com', 'testaz', 1.00, 0, '2023-07-10 10:15:47', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:06:50'),
('test_edit', 'test_edit', 'test_edit', 'test_edit', 'test_edit', 'test_edit', '0987654312', 'rew_2@gmail.com', '12345678', 0.10, 0, '2023-07-11 09:04:09', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:04:09'),
('test_edit2', '12345678', 'test_edit', 'test_e1', 'test_e1', 'test_e1', '0813123442', 'rew_2@gmail.comi', '12345678', 0.10, 0, '2023-07-11 02:04:57', 'Setthanan Thongpanchang', 'Setthanan Thongpanchang', '2023-07-11 09:06:42'),
('VWX234', 'CUST008', 'Company H', 'Address 15', 'Address 16', 'Jessica Smith', '6667778888', 'jessica.smith@example.com', 'TAX234', 95.75, 0, '2023-07-11 15:00:00', 'Admin', 'Admin', '2023-07-11 00:00:00'),
('YZA567', 'CUST009', 'Company I', 'Address 17', 'Address 18', 'Andrew Wilson', '8889990000', 'andrew.wilson@example.com', 'TAX567', 110.90, 1, '2023-07-11 12:15:00', 'Admin', 'Admin', '2023-07-11 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`AccountID`),
  ADD UNIQUE KEY `CustomerCode_2` (`CustomerCode`),
  ADD KEY `CustomerCode` (`CustomerCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
