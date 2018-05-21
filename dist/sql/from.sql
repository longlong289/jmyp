-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 05 月 21 日 03:33
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `from`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`sid`, `username`, `password`) VALUES
(12, '3213213', 'bb2d91d0fbbebe8719509ed0f865c63f'),
(13, '111111111', 'b7bc2a2f5bb6d521e64c8974c143e9a0'),
(14, '12312312312', '827ccb0eea8a706c4c34a16891f84e7b'),
(15, '321321421312', '9cdfeb19745e3896231b2c3d28f6ffb9'),
(16, '12345678901', '8ad3fac6c6b3528499d347d924443abb'),
(17, '12345678902', 'fcea920f7412b5da7be0cf42b8c93759'),
(18, '11111111111', '96e79218965eb72c92a549dd5a330112');

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `src` varchar(9999) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`sid`, `src`) VALUES
(1, 'http://p0.jmstatic.com/banner/3436/182470_675_435_003-web.jpg?1525342120'),
(2, 'http://p0.jmstatic.com/banner/3436/182464_675_435_002-web.jpg?1525770395'),
(3, 'http://p0.jmstatic.com/banner/3436/182466_675_435_002-web.jpg?1525342043');

-- --------------------------------------------------------

--
-- 表的结构 `piclist`
--

CREATE TABLE IF NOT EXISTS `piclist` (
  `sid` tinyint(20) NOT NULL AUTO_INCREMENT,
  `url1` varchar(999) CHARACTER SET utf8 NOT NULL,
  `title` varchar(42) CHARACTER SET utf8 NOT NULL,
  `sub` varchar(999) CHARACTER SET utf8 NOT NULL,
  `url2` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `piclist`
--

INSERT INTO `piclist` (`sid`, `url1`, `title`, `sub`, `url2`) VALUES
(1, 'http://p0.jmstatic.com/banner/3495/182904_535_250_001-web.jpg?1525682647', '美宝莲旗舰店', '美就现在', 'http://p0.jmstatic.com/brand/logo_180/623.jpg'),
(2, 'http://p0.jmstatic.com/banner/3495/182828_535_250_001-web.jpg?1525662629', '珀莱雅旗舰店', '魅力来自深海', 'http://p0.jmstatic.com/brand/logo_180/3660.jpg'),
(3, 'http://p0.jmstatic.com/banner/3495/182826_535_250_001-web.jpg?1525662532', '自然堂旗舰店', '你本来就很美', 'http://p0.jmstatic.com/brand/logo_180/1145.jpg'),
(4, 'http://p0.jmstatic.com/banner/3495/182824_535_250_001-web.jpg?1525662484', '欧莱雅旗舰店', '你值得拥有', 'http://p0.jmstatic.com/brand/logo_180/388.jpg'),
(5, 'http://p0.jmstatic.com/banner/3495/182822_535_250_001-web.jpg?1525662400', '玛丽黛佳旗舰店', '新艺术彩妆品牌', 'http://p0.jmstatic.com/brand/logo_180/701.jpg'),
(6, 'http://p0.jmstatic.com/banner/3495/182816_535_250_001-web.jpg?1525662173', '卡姿兰旗舰店', '时尚就是卡姿兰', 'http://p0.jmstatic.com/banner/3495/182816_535_250_001-web.jpg?http://p0.jmstatic.com/brand/logo_180/458.jpg'),
(7, 'http://p0.jmstatic.com/banner/3496/182848_535_250_001-web.jpg?1525663580', '姬芮旗舰店', '青春肌肤无穷尽', 'http://p0.jmstatic.com/brand/logo_180/679.jpg'),
(8, 'http://p0.jmstatic.com/banner/3496/182902_535_250_001-web.jpg?1525682506', '欧诗旗舰店', '原来珍珠般的灵动肌肤', 'http://p0.jmstatic.com/brand/logo_180/6116.jpg'),
(9, 'http://p0.jmstatic.com/banner/3496/182874_535_250_001-web.jpg?1525665395', '娥佩兰旗舰店', '来自世界时尚之都', 'http://p0.jmstatic.com/brand/logo_180/756.jpg'),
(10, 'http://p0.jmstatic.com/banner/3496/182872_535_250_001-web.jpg?1525665235', '相宜本草', '本草力量温和实效', 'http://p0.jmstatic.com/brand/logo_180/217.jpg'),
(11, 'http://p0.jmstatic.com/banner/3496/182868_535_250_001-web.jpg?1525665193', '百雀羚旗舰店', '天然不刺激百雀羚草本', 'http://p0.jmstatic.com/brand/logo_180/717.jpg'),
(12, 'http://p0.jmstatic.com/banner/3496/182866_535_250_001-web.jpg?1525665121', '丸美其简单', '15年专注眼部护理', 'http://p0.jmstatic.com/brand/logo_180/1309.jpg'),
(13, 'http://p0.jmstatic.com/banner/3496/182864_535_250_001-web.jpg?1525665082', ' 膜法世家1908旗舰店', '开启魔法美肤之旅', 'http://p0.jmstatic.com/brand/logo_180/690.jpg'),
(14, 'http://p0.jmstatic.com/banner/3496/182856_535_250_001-web.jpg?1525664890', '梦妆旗舰店', '发现花朵的美肌奥秘', 'http://p0.jmstatic.com/brand/logo_180/685.jpg'),
(15, 'http://p0.jmstatic.com/banner/3496/182858_535_250_001-web.jpg?1525664873', '英国aa网旗舰店', '芳疗美肤自然简约', 'http://p0.jmstatic.com/brand/logo_180/857.jpg'),
(16, 'http://p0.jmstatic.com/banner/3496/182854_535_250_001-web.jpg?1525664813', '凡茜旗舰店', '基础美才够美', 'http://p0.jmstatic.com/brand/logo_180/644.jpg'),
(17, 'http://p0.jmstatic.com/banner/3496/182852_535_250_001-web.jpg?1525663750', '雪肌旗舰店', '白肌胜雪你的美白奇迹', 'http://p0.jmstatic.com/brand/logo_180/1663.jpg'),
(18, 'http://p0.jmstatic.com/banner/3496/182850_535_250_001-web.jpg?1525663690', '欧珀莱旗舰店', '伴你左右定制之美', 'http://p0.jmstatic.com/brand/logo_180/34.jpg'),
(19, 'http://p0.jmstatic.com/banner/3496/182838_535_250_001-web.jpg?1525663329', '韩后旗舰店', '天然造就美', 'http://p0.jmstatic.com/brand/logo_180/716.jpg'),
(20, 'http://p0.jmstatic.com/banner/3496/182836_535_250_001-web.jpg?1525663012', '京润珍珠旗舰店', '真珍珠 针美白', 'http://p0.jmstatic.com/brand/logo_180/5591.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `tab`
--

CREATE TABLE IF NOT EXISTS `tab` (
  `sid` tinyint(2) NOT NULL AUTO_INCREMENT,
  `url1` varchar(21332) NOT NULL,
  `url2` varchar(234) NOT NULL,
  `url3` varchar(234) NOT NULL,
  `url4` varchar(243) NOT NULL,
  `url5` varchar(2443) NOT NULL,
  `url6` varchar(3432) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `tab`
--

INSERT INTO `tab` (`sid`, `url1`, `url2`, `url3`, `url4`, `url5`, `url6`) VALUES
(1, 'http://p0.jmstatic.com/banner/3438/40035_163_100_002-web.jpg?1431337749', 'http://p0.jmstatic.com/banner/3440/28476_163_100_002-web.jpg?1419481400', 'http://p0.jmstatic.com/banner/3442/34878_163_100_002-web.jpg?1419913265', 'http://p0.jmstatic.com/banner/3444/34876_163_100_002-web.jpg?1419908094', 'http://p0.jmstatic.com/banner/3446/28533_163_100_004-web.jpg?1419482128', 'http://p0.jmstatic.com/banner/3448/34523_163_100_002-web.jpg?1419481117'),
(2, 'http://p0.jmstatic.com/banner/3438/28457_163_100_002-web.jpg?1430980300', 'http://p0.jmstatic.com/banner/3440/28475_163_100_002-web.jpg?1419481413', 'http://p0.jmstatic.com/banner/3442/28498_163_100_006-web.jpg?1419482287', 'http://p0.jmstatic.com/banner/3444/34875_163_100_002-web.jpg?1419907958', 'http://p0.jmstatic.com/banner/3446/28532_163_100_004-web.jpg?1421219265', 'http://p0.jmstatic.com/banner/3448/34524_163_100_002-web.jpg?1419479292'),
(3, 'http://p0.jmstatic.com/banner/3438/34803_163_100_002-web.jpg?1419821114', 'http://p0.jmstatic.com/banner/3440/28474_163_100_002-web.jpg?1419481426', 'http://p0.jmstatic.com/banner/3442/28495_163_100_003-web.jpg?1456562753', 'http://p0.jmstatic.com/banner/3444/28520_163_100_002-web.jpg?1419482489', 'http://p0.jmstatic.com/banner/3446/28531_163_100_003-web.jpg?1476946012', 'http://p0.jmstatic.com/banner/3448/34525_163_100_002-web.jpg?1419481126'),
(4, 'http://p0.jmstatic.com/banner/3438/28446_163_100_003-web.jpg?1468577277', 'http://p0.jmstatic.com/banner/3438/34487_163_100_002-web.jpg?1430980177', 'http://p0.jmstatic.com/banner/3442/28492_163_100_004-web.jpg?1419482370', 'http://p0.jmstatic.com/banner/3444/28519_163_100_003-web.jpg?1419482499', 'http://p0.jmstatic.com/banner/3446/34810_163_100_003-web.jpg?1468917743', 'http://p0.jmstatic.com/banner/3448/34528_163_100_002-web.jpg?1419481185'),
(5, 'http://p0.jmstatic.com/banner/3438/28463_163_100_004-web.jpg?1433155778', 'http://p0.jmstatic.com/banner/3440/88666_163_100_001-web.jpg?1470391927', 'http://p0.jmstatic.com/banner/3442/28487_163_100_003-web.jpg?1420797045', 'http://p0.jmstatic.com/banner/3444/28518_163_100_002-web.jpg?1456564037', 'http://p0.jmstatic.com/banner/3446/28523_163_100_002-web.jpg?1425032528', 'http://p0.jmstatic.com/banner/3448/34529_136_88_003-web.jpg?1513827238'),
(6, 'http://p0.jmstatic.com/banner/3438/28463_163_100_004-web.jpg?http://p0.jmstatic.com/banner/3438/55574_163_100_004-web.jpg?1494917240', 'http://p0.jmstatic.com/banner/3440/88666_163_100_001-web.jpg?1470391927', 'http://p0.jmstatic.com/banner/3442/28490_163_100_002-web.jpg?1419482380', 'http://p0.jmstatic.com/banner/3444/43623_163_100_002-web.jpg?1438136715', 'http://p0.jmstatic.com/banner/3446/34815_163_100_002-web.jpg?1419823385', 'http://p0.jmstatic.com/banner/3448/34530_163_100_003-web.jpg?1426057665'),
(7, 'http://p0.jmstatic.com/banner/3438/28461_163_100_003-web.jpg?1452758290', 'http://p0.jmstatic.com/banner/3440/88666_163_100_001-web.jpg?1470391927', 'http://p0.jmstatic.com/banner/3442/34819_163_100_002-web.jpg?1484634346', 'http://p0.jmstatic.com/banner/3444/34829_163_100_003-web.jpg?1457319267', 'http://p0.jmstatic.com/banner/3446/54045_163_100_002-web.jpg?1447298749', 'http://p0.jmstatic.com/banner/3448/34531_163_100_002-web.jpg?1419481200'),
(8, 'http://p0.jmstatic.com/banner/3438/28437_163_100_003-web.jpg?1430980088', 'http://p0.jmstatic.com/banner/3440/28479_163_100_002-web.jpg?1419481346', 'http://p0.jmstatic.com/banner/3442/36836_163_100_002-web.jpg?1423451782', 'http://p0.jmstatic.com/banner/3444/28508_163_100_002-web.jpg?1432172316', 'http://p0.jmstatic.com/banner/3446/28524_163_100_002-web.jpg?1472537023', 'http://p0.jmstatic.com/banner/3448/34532_163_100_002-web.jpg?1419480487'),
(9, 'http://p0.jmstatic.com/banner/3438/28444_163_100_003-web.jpg?1476945847', 'http://p0.jmstatic.com/banner/3440/88663_163_100_002-web.jpg?147039177', 'http://p0.jmstatic.com/banner/3442/28485_163_100_001-web.jpg?1419482430', 'http://p0.jmstatic.com/banner/3444/28506_163_100_002-web.jpg?1419482579', 'http://p0.jmstatic.com/banner/3446/28534_163_100_003-web.jpg?1460359069', 'http://p0.jmstatic.com/banner/3448/34533_163_100_002-web.jpg?1419481208'),
(10, 'http://p0.jmstatic.com/banner/3438/28431_163_100_002-web.jpg?1472005582', 'http://p0.jmstatic.com/banner/3440/88662_163_100_002-web.jpg?1470391667', 'http://p0.jmstatic.com/banner/3442/34823_163_100_002-web.jpg?1419834917', 'http://p0.jmstatic.com/banner/3444/28503_163_100_002-web.jpg?1419482613', 'http://p0.jmstatic.com/banner/3446/28529_163_100_003-web.jpg?1419482185', 'http://p0.jmstatic.com/banner/3448/34531_163_100_002-web.jpg?1419481200'),
(11, 'http://p0.jmstatic.com/banner/3438/34804_163_100_003-web.jpg?1421219936', 'http://p0.jmstatic.com/banner/3440/88662_163_100_002-web.jpg?147039166', 'http://p0.jmstatic.com/banner/3442/28488_163_100_002-web.jpg?1419482390', 'http://p0.jmstatic.com/banner/3444/28505_163_100_002-web.jpg?1419482592', 'http://p0.jmstatic.com/banner/3448/34521_163_100_002-web.jpg?1427364851', 'http://p0.jmstatic.com/banner/3448/34532_163_100_002-web.jpg?1419480487'),
(12, 'http://p0.jmstatic.com/banner/3438/34487_163_100_002-web.jpg?1430980177', 'http://p0.jmstatic.com/banner/3440/34798_163_100_003-web.jpg?1419820454', 'http://p0.jmstatic.com/banner/3442/34824_163_100_002-web.jpg?1419835132', 'http://p0.jmstatic.com/banner/3444/34830_163_100_002-web.jpg?1419835876', 'http://p0.jmstatic.com/banner/3448/34522_136_88_003-web.jpg?1513828104', 'http://p0.jmstatic.com/banner/3448/34526_136_88_003-web.jpg?1513828221');
