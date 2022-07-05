variable "ssh_security_group" {
  type = string
}

variable "instance_tags" {
  type = map(string)
}

variable "db_name" {
  type = string
}

variable "db_username" {
  type = string
}

variable "db_password" {
  type = string
}

variable "db_tags" {
  type = map(string)
}