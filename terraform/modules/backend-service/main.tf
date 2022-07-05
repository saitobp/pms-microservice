resource "aws_instance" "backend-server" {
  ami = "ami-052efd3df9dad4825"
  instance_type = "t2.micro"
  key_name = "terraform"

  user_data = <<-EOF
  #!/bin/bash
  apt-get remove docker docker-engine docker.io containerd runc
  apt-get update
  apt-get install ca-certificates curl gnupg lsb-release -y
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg --yes
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
  apt-get update
  apt-get install docker-ce docker-ce-cli containerd.io -y
  EOF

  vpc_security_group_ids = [
    var.ssh_security_group
  ]

  tags = var.instance_tags 
}

resource "aws_db_instance" "database" {
  allocated_storage = 20
  engine = "postgres"
  engine_version = "13.4"
  instance_class = "db.t3.micro"
  db_name = var.db_name
  username = var.db_username
  password = var.db_password
  skip_final_snapshot = true
  backup_retention_period = 0
  tags = var.db_tags
}