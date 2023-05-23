import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("contacts-users")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 65 })
  name: string;

  @Column({ length: 75, unique: true })
  email: string;

  @Column({ length: 35, unique: true })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (User) => User.contacts)
  user: User;
}

export { Contact };
