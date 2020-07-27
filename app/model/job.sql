CREATE TABLE `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `publisher_id` varchar(30) NOT NULL COMMENT 'publisher id',
  `title` varchar(30) NOT NULL COMMENT 'job name',
  `salary` int(11) NOT NULL COMMENT 'job salary',
  `description` varchar(500) NOT NULL COMMENT 'job description',
  `work_place` varchar(500) NOT NULL COMMENT 'work place',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='job';