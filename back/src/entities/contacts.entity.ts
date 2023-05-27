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

  @Column({ length: 75 })
  email: string;

  @Column({ length: 12 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (User) => User.contacts)
  user: User;
}

export { Contact };
