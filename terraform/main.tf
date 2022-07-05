terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.17.1"
    }
  }

  required_version = ">= 0.14.9"
}

/*
  Necessario configurar de acordo com as credenciais da AWS
*/
provider "aws" {
  profile = "terraform_profile"
  region = "us-east-1"
}

resource "aws_security_group" "ssh-access" {
  tags = {
    "Name" = "SSH Access"
  }

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    description = "ssh"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "customers-service" {
  source = "./modules/backend-service"

  ssh_security_group = aws_security_group.ssh-access.id

  instance_tags = {
    "Name" = "customers-instance"
  }

  db_name = "customers"
  db_username = "postgres"
  db_password = "password"
  db_tags = {
    "Name" = "customers-db"
  }
}