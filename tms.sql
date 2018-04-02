/*
Navicat MySQL Data Transfer

Source Server         : node
Source Server Version : 50559
Source Host           : localhost:3306
Source Database       : tms

Target Server Type    : MYSQL
Target Server Version : 50559
File Encoding         : 65001

Date: 2018-04-02 17:29:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for permiss
-- ----------------------------
DROP TABLE IF EXISTS `permiss`;
CREATE TABLE `permiss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permiss_code` varchar(255) DEFAULT NULL,
  `permiss_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permiss
-- ----------------------------
INSERT INTO `permiss` VALUES ('1', 'PERMISS', '权限管理');
INSERT INTO `permiss` VALUES ('2', 'ROLE', '角色管理');
INSERT INTO `permiss` VALUES ('3', 'ACCOUNT', '账户管理');
INSERT INTO `permiss` VALUES ('4', 'CATEGORY', '分类管理');
INSERT INTO `permiss` VALUES ('6', 'GOODS', '商品管理');
INSERT INTO `permiss` VALUES ('7', 'ORDER', '订单管理');
INSERT INTO `permiss` VALUES ('8', 'STATISTICS', '统计管理');
INSERT INTO `permiss` VALUES ('9', 'ACTIVE', '活动管理');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(16) NOT NULL,
  `role_code` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for role_permiss
-- ----------------------------
DROP TABLE IF EXISTS `role_permiss`;
CREATE TABLE `role_permiss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` varchar(255) NOT NULL,
  `permiss_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_permiss
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` char(30) NOT NULL,
  `password` char(30) NOT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT 'email',
  `cell_phone` char(13) NOT NULL,
  `join_date` date DEFAULT NULL,
  `leave_date` date DEFAULT NULL,
  `gender` char(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
