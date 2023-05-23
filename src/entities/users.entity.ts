import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
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

  @Column()
  password: string;

  @OneToMany(() => Contact, (contacts) => contacts.user)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
