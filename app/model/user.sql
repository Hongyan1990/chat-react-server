CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) NOT NULL COMMENT 'user name',
  `pwd` varchar(30) NOT NULL COMMENT 'user pwd',
  `role` int(11) NOT NULL COMMENT 'user role',
  `avatar` varchar(100) DEFAULT NULL COMMENT 'user avatar',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created time',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='user';