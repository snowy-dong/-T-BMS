/*
Navicat MySQL Data Transfer

Source Server         : node
Source Server Version : 50559
Source Host           : localhost:3306
Source Database       : tms

Target Server Type    : MYSQL
Target Server Version : 50559
File Encoding         : 65001

Date: 2018-05-03 19:14:19
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('8', '管理员', 'ADMIN');
INSERT INTO `role` VALUES ('9', '超级管理员', 'MASTER');

-- ----------------------------
-- Table structure for role_permiss
-- ----------------------------
DROP TABLE IF EXISTS `role_permiss`;
CREATE TABLE `role_permiss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` varchar(255) NOT NULL,
  `permiss_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_permiss
-- ----------------------------
INSERT INTO `role_permiss` VALUES ('5', '8', '1');
INSERT INTO `role_permiss` VALUES ('6', '8', '2');
INSERT INTO `role_permiss` VALUES ('7', '9', '1');
INSERT INTO `role_permiss` VALUES ('8', '9', '2');
INSERT INTO `role_permiss` VALUES ('9', '9', '3');
INSERT INTO `role_permiss` VALUES ('10', '9', '4');
INSERT INTO `role_permiss` VALUES ('11', '9', '6');
INSERT INTO `role_permiss` VALUES ('12', '9', '7');
INSERT INTO `role_permiss` VALUES ('13', '9', '8');
INSERT INTO `role_permiss` VALUES ('14', '9', '9');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'test', '123456', '123456@qq.com', '18133669988', '2018-04-02', null, 'male');
INSERT INTO `user` VALUES ('2', 'admin', '123456', '1234569@qq.com', '123456789', '2018-05-24', null, 'female');

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('8', '2', '8');
INSERT INTO `user_role` VALUES ('9', '2', '9');
