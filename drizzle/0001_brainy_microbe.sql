CREATE TABLE `asycuda_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`company_name` varchar(255),
	`phone` varchar(50) NOT NULL,
	`email` varchar(320) NOT NULL,
	`service_type` enum('preliminary_declaration','final_declaration','document_review','hs_code_audit','consultation') NOT NULL,
	`product_name` varchar(500) NOT NULL,
	`product_description` text,
	`country_of_origin` varchar(100),
	`goods_value` varchar(100),
	`hs_code` varchar(50),
	`notes` text,
	`attachments` json,
	`status` enum('new','in_review','completed','rejected') NOT NULL DEFAULT 'new',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `asycuda_requests_id` PRIMARY KEY(`id`)
);
